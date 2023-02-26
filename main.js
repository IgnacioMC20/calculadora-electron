const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const ventana = new BrowserWindow({
    width: 600,
    height: 600
  })
  ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)