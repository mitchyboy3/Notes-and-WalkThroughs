
## Electron App ## 




```javascript
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 1920, height: 1080})

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`)

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
```

```javascript
{
  "name": "benbot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "electron .",
    "buildwindows": "electron-packager . benbot --platform=win32 --arch=x64 --icon=icons/logo.ico",
    "build": "electron-packager . && cp Icons/logo.icns benbot-darwin-x64/benbot.app/Contents/Resources/electron.icns",
    "pack": "asar pack benbot-darwin-x64/benbot.app/Contents/Resources/app benbot-darwin-x64/benbot.app/Contents/Resources/app.asar "
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "asar": "^0.12.3", //This is for building .exe apps. 
    "babel": "^6.5.2",
    "babel-core": "^6.17.0",
    "chart.js": "*",
    "electron-open-link-in-browser": "^1.0.2",
    "electron-packager": "^8.0.0",
    "electron-prebuilt": "^1.4.0",
    "gulp": "^3.9.1",
    "gulp-concat": "^2.6.0",
    "gulp-order": "^1.1.1",
    "gulp-plumber": "^1.1.0",
    "gulp-sass": "^2.3.2",
    "open": "0.0.5"
  }
}
```