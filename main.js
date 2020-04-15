const { app, BrowserWindow } = require('electron')

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Udemy',
        icon: __dirname + '/favicon.png',
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setMenu(null);
    win.loadURL('https://www.udemy.com/')
    win.webContents.on('ready-to-show', function () {
        win.show();
    });
}

app.whenReady().then(createWindow)