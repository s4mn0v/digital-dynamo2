const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    // Title bar functions
    minimize: () => ipcRenderer.invoke('minimize'),
    maximize: () => ipcRenderer.invoke('maximize'),
    close: () => ipcRenderer.invoke('close'),
   
    // Toggle sidebar function
    toggleSidebar: () => ipcRenderer.invoke('toggle-sidebar'),
    onToggleSidebar: (callback) => ipcRenderer.on('toggle-sidebar', callback),
    
    replaceText: (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    }
});

// Mantén el evento DOMContentLoaded si lo necesitas para otras funcionalidades
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }
    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
});