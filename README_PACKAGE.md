# JD MT5 Trade Copier - Single EXE Package

## ✅ READY-TO-SELL PACKAGE

Your trade copier is now packaged as a single EXE: `JD_MT5_TradeCopier.exe`

**What clients receive:**
- `JD_MT5_TradeCopier.exe` (single file)

**What happens at runtime:**
- EXE creates `C:\Users\<username>\AppData\Local\JDTradeCopier\` directory
- Moves/copies config files to hidden location
- Starts web server on port 5000
- Web UI controls starting/stopping the copier

## 🔧 Setup Instructions

### 1. Move Source Files
Copy your Python source files to this directory:
- `mt5_trade_copier.py` (Flask app with auth)
- `mt5_master_watcher.py` (MasterWatcher class)
- `mt5_child_executor.py` (ChildExecutor class)

### 2. Update Imports (if needed)
Ensure your modules can be imported as:
```python
from mt5_trade_copier import create_app, socketio, auth_bp, login_required
from mt5_master_watcher import MasterWatcher
from mt5_child_executor import ChildExecutor
```

### 3. Rebuild EXE (if source changed)
```bash
pyinstaller --clean launcher.spec
```

### 4. Test the EXE
- Double-click `dist/JD_MT5_TradeCopier.exe`
- Open browser to `http://localhost:5000`
- Login and test start/stop functionality

## 🔒 Security & Data Handling

- **No exposed JSON files** - moved to AppData
- **Single EXE** - professional appearance
- **Runtime file generation** - configs created as needed
- **Hidden data directory** - `C:\Users\<user>\AppData\Local\JDTradeCopier\`

## 📦 Distribution

**Ship only:**
- `JD_MT5_TradeCopier.exe`

**Do NOT ship:**
- Any JSON files
- Multiple EXE files
- Source code
- .spec files
- build/ directory

## 🚀 Client Experience

1. Client downloads `JD_MT5_TradeCopier.exe`
2. Double-clicks to run
3. Opens browser automatically (or manually to localhost:5000)
4. Logs in with provided credentials
5. Configures pairs in web UI
6. Starts copier with one click

**No setup, no confusion, no multiple files to manage!**

## 🛠️ Customization

- Edit `launcher.py` for custom startup logic
- Modify `launcher.spec` for additional dependencies
- Update data directory path if needed

## 📋 Checklist

- [ ] Source files copied to directory
- [ ] Imports working correctly
- [ ] EXE builds without errors
- [ ] Web UI loads and functions
- [ ] Start/Stop controls work
- [ ] Data stored in AppData
- [ ] No exposed sensitive files

Your product is now ready for commercial distribution! 🎉