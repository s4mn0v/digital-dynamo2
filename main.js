// 0------------------------------------------0
// |  Authors:                                |
// |                                          |
// |  1. S4M-N0V                              |
// |     Git: https://github.com/s4mn0v       |
// |                                          |
// |  2. JuanesB2f                            |
// |     Git: https://github.com/JuanesB2f    |
// |                                          |
// |  3. DnovoaB                              |
// |     Git: https://github.com/DnovoaB      |
// 0------------------------------------------0

const { app, BrowserWindow, ipcMain, Menu, session } = require('electron')
const path = require('node:path');

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        titleBarStyle: 'hidden',
        icon: path.join(__dirname, './assets/icons/dd-icon.png'),
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            enableRemoteModule: true,
            sandbox: false,
            webviewTag: true, // Habilita el uso de <webview>
            devTools: true,
            preload: path.join(__dirname, 'preload.js'),
            // partition: 'persist:wordpress'
        }
    })

    mainWindow.maximize();

    // mainWindow.openDevTools();

    // Configurar la Política de Seguridad de Contenido (CSP)
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Content-Security-Policy': [
                    "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; " +
                    "script-src * 'unsafe-inline' 'unsafe-eval'; " +
                    "style-src * 'unsafe-inline'; " +
                    "font-src * data:; " +
                    "frame-src *; " +
                    "img-src * data: blob:; " +
                    "connect-src *;"
                ]
            }
        });
    });

    // Cargar la página principal directamente
    mainWindow.loadFile('./public/index.html')

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
        mainWindow.webContents.send('toggle-sidebar');
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
    createMenu()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})