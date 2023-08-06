import { app, BrowserWindow } from 'electron'
import path from 'node:path'
import './open-directory'

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public')

let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
  win = new BrowserWindow({
    // frame: false,
    minHeight: 200,
    minWidth: 400,
    show: false,
    autoHideMenuBar: true,
    icon: path.join(process.env.PUBLIC, 'editor.jpg'),
    darkTheme: true,
    webPreferences: {
      // The renderer process is allowed to access the Node.js API.
      contextIsolation: false,
      // The renderer process is allowed to access the Node.js API.
      nodeIntegration: true,
      spellcheck: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL + 'open')
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }

  // 防止打开时白屏
  win.on('ready-to-show', () => {
    win?.show()
  })
}

app.on('window-all-closed', () => {
  win = null
})

app.whenReady().then(createWindow)
