const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, './assets/icons/dd-icon.png'),
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            webviewTag: true, // Habilita el uso de <webview>
            preload: path.join(__dirname, 'preload.js'),
            // partition: 'persist:wordpress'
        }
    })

    mainWindow.loadFile('./public/index.html')

    // Open the DevTools.
    mainWindow.webContents.openDevTools()
}

const createMenu = () => {
    const template = [
        // {
        //     label: 'Ver',
        //     submenu: [
        //         {
        //             label: 'Alternar Panel Lateral',
        //             click: () => {
        //                 const win = BrowserWindow.getFocusedWindow();
        //                 win.webContents.send('toggle-sidebar');
        //             }
        //         },
                
        //     ]
        // },
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
