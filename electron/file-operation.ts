import { ipcMain } from 'electron'
import fs from 'fs'
import path from 'path'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleReadFile(event: any, filePath: any) {
  const file = fs.readFileSync(filePath, 'utf8')
  event.sender.send('read-file-reply', file)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleWriteFile(event: any, filePath: any, data: any) {
  fs.writeFileSync(path.join(__dirname, filePath), data)
  event.sender.send('write-file-reply')
}

ipcMain.on('read:file', handleReadFile)
ipcMain.on('write:file', handleWriteFile)
