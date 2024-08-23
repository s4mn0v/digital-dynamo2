const { app, BrowserWindow, ipcMain, Menu } = require('electron')
const path = require('node:path')

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        titleBarStyle: 'hidden',
        icon: path.join(__dirname, './assets/icons/dd-icon.png'),
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            enableRemoteModule: false,
            webviewTag: true, // Habilita el uso de <webview>
            devTools: true,
            preload: path.join(__dirname, 'preload.js'),
            // partition: 'persist:wordpress'
        }
    })

    mainWindow.loadFile('./public/index.html')

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    // IPC event handlers
    ipcMain.handle('minimize', () => {
        mainWindow.minimize();
    });

    ipcMain.handle('maximize', () => {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
        } else {
            mainWindow.maximize();
        }
    });

    ipcMain.handle('close', () => {
        mainWindow.close();
    });

    ipcMain.handle('toggle-sidebar', () => {
        const win = BrowserWindow.getFocusedWindow();
        win.webContents.send('toggle-sidebar');
    });
}

const createMenu = () => {
    const template = [
        {
            label: 'Ocultar panel izdo.',
            click: () => {
                const win = BrowserWindow.getFocusedWindow();
                win.webContents.send('toggle-sidebar');
            }
        },
        {
            label: 'Recargar',
            role: 'reload'
        },
        {
            label: 'Salir',
            role: 'quit'
        },
        // {label: 'Tools', role: 'toggleDevTools'}
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow()
    // Custom Menu
    createMenu()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
