// MT5 Trade Copier - Main JavaScript

// Socket.IO Connection
const socket = io();

// Toast notification function
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    
    const toastId = 'toast-' + Date.now();
    const toastHtml = `
        <div id="${toastId}" class="toast align-items-center text-bg-${type} border-0" role="alert">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    `;
    
    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
    toast.show();
    
    // Remove toast element after hidden
    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
}

// Update MT5 status in navbar
function updateMT5Status() {
    fetch('/api/mt5/status')
        .then(response => response.json())
        .then(data => {
            const statusEl = document.getElementById('mt5-status');
            if (!statusEl) return;
            
            const dot = statusEl.querySelector('.status-dot');
            const text = statusEl.querySelector('.status-text');
            
            if (data.connected) {
                dot.className = 'status-dot bg-success';
                text.textContent = `MT5: ${data.login}`;
            } else {
                dot.className = 'status-dot bg-danger';
                text.textContent = 'MT5: Disconnected';
            }
        })
        .catch(() => {
            const statusEl = document.getElementById('mt5-status');
            if (statusEl) {
                statusEl.querySelector('.status-dot').className = 'status-dot bg-danger';
                statusEl.querySelector('.status-text').textContent = 'MT5: Error';
            }
        });
}

// Update copier status in navbar
function updateCopierStatus() {
    fetch('/api/status')
        .then(response => response.json())
        .then(data => {
            const statusEl = document.getElementById('copier-status');
            if (!statusEl) return;
            
            const dot = statusEl.querySelector('.status-dot');
            const text = statusEl.querySelector('.status-text');
            
            if (data.master_running || data.copier_running) {
                dot.className = 'status-dot bg-success';
                if (data.master_running && data.copier_running) {
                    text.textContent = 'Both Running';
                } else if (data.master_running) {
                    text.textContent = 'Master Running';
                } else {
                    text.textContent = 'Copier Running';
                }
            } else {
                dot.className = 'status-dot bg-secondary';
                text.textContent = 'Copier: Idle';
            }
        });
}

// Socket.IO event handlers
socket.on('connect', () => {
    console.log('Connected to server');
    updateMT5Status();
    updateCopierStatus();
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('trade_event', (event) => {
    console.log('Trade event:', event);
    
    switch (event.type) {
        case 'new_trade':
            showToast(`New trade: ${event.data.symbol} ${event.data.type} ${event.data.volume} lots`, 'success');
            break;
        case 'trade_closed':
            showToast(`Trade closed: Ticket ${event.data.ticket}`, 'warning');
            break;
        case 'trade_copied':
            showToast(`Trade copied: ${event.data.symbol}`, 'success');
            break;
        case 'error':
            showToast(`Error: ${event.data.message}`, 'danger');
            break;
    }
});

socket.on('new_log', (log) => {
    const activityLog = document.getElementById('activity-log');
    if (activityLog) {
        const logHtml = `
            <div class="log-entry d-flex align-items-start gap-2 py-1 border-bottom border-secondary">
                <small class="text-muted flex-shrink-0">${log.timestamp.split(' ')[1]}</small>
                <span class="badge bg-${log.level} flex-shrink-0">${log.level.toUpperCase()}</span>
                <span class="small">${log.message}</span>
            </div>
        `;
        
        // Remove "no activity" message if present
        const noActivity = activityLog.querySelector('.text-muted.text-center');
        if (noActivity) {
            noActivity.remove();
        }
        
        // Add new log at the top
        activityLog.insertAdjacentHTML('afterbegin', logHtml);
        
        // Keep only last 10 entries
        const entries = activityLog.querySelectorAll('.log-entry');
        if (entries.length > 10) {
            entries[entries.length - 1].remove();
        }
    }
});

socket.on('status', (status) => {
    updateCopierStatus();
});

socket.on('positions_update', (data) => {
    // Update positions table if on dashboard
    const posTable = document.getElementById('positions-table');
    if (posTable && data.positions) {
        // Trigger position refresh
        if (typeof loadPositions === 'function') {
            loadPositions();
        }
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateMT5Status();
    updateCopierStatus();
    
    // Refresh status every 5 seconds
    setInterval(() => {
        updateMT5Status();
        updateCopierStatus();
    }, 5000);
});

// Utility functions
function formatNumber(num, decimals = 2) {
    return parseFloat(num).toFixed(decimals);
}

function formatDateTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString();
}

// Confirmation dialog
function confirmAction(message) {
    return confirm(message);
}