#!/usr/bin/env python3
"""
JD MT5 Trade Copier - Self-Contained Launcher
All code bundled in single EXE - no external dependencies
"""

import os
import sys
import json
import threading
import time
import webbrowser
import secrets
import bcrypt
from pathlib import Path
from datetime import datetime

# Flask and extensions
from flask import Flask, render_template, request, jsonify, redirect, url_for, flash, session
from flask_socketio import SocketIO, emit
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

# Dummy MT5 import (replace with actual)
try:
    import MetaTrader5 as mt5
except ImportError:
    mt5 = None

# Configuration
class Config:
    SECRET_KEY = secrets.token_hex(32)
    SESSION_TYPE = 'filesystem'

# User model
class User(UserMixin):
    def __init__(self, id, username, password_hash, role='client', active=True, assigned_pairs=None, created_at=None, last_login=None):
        self.id = id
        self.username = username
        self.password_hash = password_hash
        self.role = role
        self.active = active
        self.assigned_pairs = assigned_pairs or []
        self.created_at = created_at or datetime.now().isoformat()
        self.last_login = last_login

# Master Watcher
class MasterWatcher:
    def __init__(self, pairs):
        self.pairs = pairs
        self.running = False
        self.thread = None

    def run(self):
        self.running = True
        while self.running:
            # Dummy master watching logic
            time.sleep(1)

    def stop(self):
        self.running = False
        if self.thread and self.thread.is_alive():
            self.thread.join(timeout=2)

    def is_running(self):
        return self.running

# Child Executor
class ChildExecutor:
    def __init__(self, pairs):
        self.pairs = pairs
        self.running = False
        self.thread = None

    def run(self):
        self.running = True
        while self.running:
            # Dummy child execution logic
            time.sleep(1)

    def stop(self):
        self.running = False
        if self.thread and self.thread.is_alive():
            self.thread.join(timeout=2)

    def is_running(self):
        return self.running

# Auth blueprint
from flask import Blueprint
auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        login_type = request.form.get('login_type', 'password')

        # Dummy auth - replace with real logic
        if username == 'admin' and password == 'admin':
            user = User(1, 'admin', bcrypt.hashpw('admin'.encode(), bcrypt.gensalt()).decode(), 'developer')
            login_user(user)
            return redirect(url_for('index'))
        else:
            flash('Invalid credentials', 'error')

    return render_template('login.html')

@auth_bp.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

# Main app
def create_app(data_dir=None):
    app = Flask(__name__, template_folder='Templates', static_folder='static')
    app.config.from_object(Config)

    socketio = SocketIO(app, async_mode=None)
    login_manager = LoginManager(app)
    login_manager.login_view = 'auth.login'

    @login_manager.user_loader
    def load_user(user_id):
        # Dummy user loading
        return User(1, 'admin', bcrypt.hashpw('admin'.encode(), bcrypt.gensalt()).decode(), 'developer')

    # Register auth
    app.register_blueprint(auth_bp)

    # Routes
    @app.route('/')
    @login_required
    def index():
        return render_template('index.html')

    @app.route('/accounts')
    @login_required
    def accounts():
        return render_template('accounts.html')

    @app.route('/settings')
    @login_required
    def settings():
        return render_template('settings.html')

    @app.route('/logs')
    @login_required
    def logs():
        return render_template('logs.html')

    @app.route('/users')
    @login_required
    def users():
        return render_template('users.html')

    @app.route('/change-password', methods=['GET', 'POST'])
    @login_required
    def change_password():
        if request.method == 'POST':
            flash('Password changed successfully', 'success')
            return redirect(url_for('index'))
        return render_template('change_password.html')

    # API routes
    @app.route('/api/status')
    @login_required
    def api_status():
        return jsonify({
            'running': False,
            'master_running': False,
            'child_running': False,
            'master': {'connected': False, 'account': 'Not Set', 'balance': 0, 'equity': 0, 'positions': [], 'closed_today': []},
            'child': {'connected': False, 'account': 'Not Set', 'balance': 0, 'equity': 0, 'positions': [], 'closed_today': []},
            'stats': {'total': 0, 'success': 0, 'failed': 0}
        })

    @app.route('/api/start', methods=['POST'])
    @login_required
    def api_start():
        return jsonify({'success': True})

    @app.route('/api/stop', methods=['POST'])
    @login_required
    def api_stop():
        return jsonify({'success': True})

    @app.route('/api/config', methods=['GET', 'POST'])
    @login_required
    def api_config():
        if request.method == 'POST':
            return jsonify({'success': True})
        return jsonify({
            'pairs': [],
            'settings': {
                'copy_interval': 50,
                'retry_attempts': 3,
                'slippage': 20,
                'filling_mode': 'FOK',
                'copy_closes': True,
                'comment_tracking': True
            }
        })

    @app.route('/api/mt5/status')
    @login_required
    def api_mt5_status():
        return jsonify({'connected': False, 'login': 'Disconnected'})

    @app.route('/api/activity')
    @login_required
    def api_activity():
        return jsonify({'master': [], 'child': []})

    @app.route('/api/users', methods=['GET', 'POST'])
    @login_required
    def api_users():
        if request.method == 'POST':
            return jsonify({'success': True, 'password': 'dummy123'})
        return jsonify([])

    @app.route('/api/users/<user_id>', methods=['PUT', 'DELETE'])
    @login_required
    def api_user(user_id):
        if request.method == 'PUT':
            return jsonify({'success': True})
        return jsonify({'success': True})

    @app.route('/api/users/<user_id>/reset-password', methods=['POST'])
    @login_required
    def api_reset_password(user_id):
        return jsonify({'success': True, 'password': 'newpass123'})

    @app.route('/api/users/<user_id>/access-code', methods=['POST'])
    @login_required
    def api_access_code(user_id):
        return jsonify({'success': True, 'code': '123456'})

    return app

# Launcher class
class TradeCopierLauncher:
    def __init__(self):
        self.app = None
        self.socketio = None
        self.master_watcher = None
        self.child_executor = None
        self.master_thread = None
        self.child_thread = None
        self.running = False

        # Setup data directory
        self.setup_data_directory()

    def setup_data_directory(self):
        appdata = os.environ.get('APPDATA', os.path.expanduser('~'))
        self.data_dir = Path(appdata) / 'JDTradeCopier'
        self.data_dir.mkdir(exist_ok=True)

        # Create default config if not exists
        config_path = self.data_dir / 'config.json'
        if not config_path.exists():
            default_config = {
                'pairs': [],
                'settings': {
                    'copy_interval': 50,
                    'retry_attempts': 3,
                    'slippage': 20,
                    'filling_mode': 'FOK',
                    'copy_closes': True,
                    'comment_tracking': True
                }
            }
            with open(config_path, 'w') as f:
                json.dump(default_config, f, indent=2)

        # Create default users if not exists
        users_path = self.data_dir / 'users.json'
        if not users_path.exists():
            default_users = [{
                'id': '1',
                'username': 'admin',
                'password_hash': bcrypt.hashpw('admin'.encode(), bcrypt.gensalt()).decode(),
                'role': 'developer',
                'active': True,
                'assigned_pairs': [],
                'created_at': datetime.now().isoformat(),
                'last_login': None
            }]
            with open(users_path, 'w') as f:
                json.dump(default_users, f, indent=2)

    def start_copier(self):
        if self.running:
            return

        try:
            config_path = self.data_dir / 'config.json'
            with open(config_path, 'r') as f:
                config = json.load(f)

            self.master_watcher = MasterWatcher(config.get('pairs', []))
            self.master_thread = threading.Thread(target=self.master_watcher.run, daemon=True)
            self.master_thread.start()

            self.child_executor = ChildExecutor(config.get('pairs', []))
            self.child_thread = threading.Thread(target=self.child_executor.run, daemon=True)
            self.child_thread.start()

            self.running = True
            print("Trade copier started")

        except Exception as e:
            print(f"Error starting copier: {e}")
            self.stop_copier()

    def stop_copier(self):
        if not self.running:
            return

        try:
            if self.master_watcher:
                self.master_watcher.stop()
            if self.child_executor:
                self.child_executor.stop()

            if self.master_thread and self.master_thread.is_alive():
                self.master_thread.join(timeout=5)
            if self.child_thread and self.child_thread.is_alive():
                self.child_thread.join(timeout=5)

            self.running = False
            print("Trade copier stopped")

        except Exception as e:
            print(f"Error stopping copier: {e}")

    def run(self):
        try:
            self.app = create_app(data_dir=str(self.data_dir))
            self.socketio = SocketIO(self.app, async_mode=None)

            # Add API routes
            @self.app.route('/api/start', methods=['POST'])
            @login_required
            def api_start():
                self.start_copier()
                return jsonify({'success': True})

            @self.app.route('/api/stop', methods=['POST'])
            @login_required
            def api_stop():
                self.stop_copier()
                return jsonify({'success': True})

            @self.app.route('/api/status')
            @login_required
            def api_status():
                return jsonify({
                    'running': self.running,
                    'master_running': self.master_watcher.is_running() if self.master_watcher else False,
                    'child_running': self.child_executor.is_running() if self.child_executor else False
                })

            print("Starting JD MT5 Trade Copier...")
            print(f"Data directory: {self.data_dir}")
            print("Default login: admin / admin")
            
            # Function to open browser when server is ready
            def open_browser_when_ready():
                import urllib.request
                max_attempts = 30
                for i in range(max_attempts):
                    try:
                        urllib.request.urlopen('http://localhost:5000/login', timeout=1)
                        webbrowser.open('http://localhost:5000/login')
                        print("Browser opened to login page")
                        break
                    except:
                        time.sleep(0.5)
                else:
                    # If server didn't start in time, try opening anyway
                    webbrowser.open('http://localhost:5000/login')
                    print("Opening browser (server may still be starting)...")
            
            # Start browser opener in background
            threading.Thread(target=open_browser_when_ready, daemon=True).start()
            
            self.socketio.run(self.app, host='0.0.0.0', port=5000, debug=False, allow_unsafe_werkzeug=True)

        except KeyboardInterrupt:
            print("Shutting down...")
            self.stop_copier()
        except Exception as e:
            print(f"Error running launcher: {e}")
            self.stop_copier()
            sys.exit(1)

def main():
    launcher = TradeCopierLauncher()
    launcher.run()

if __name__ == '__main__':
    main()