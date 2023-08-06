import { dialog, ipcMain } from 'electron'

function handleDirectorySelection(event: any) {
  dialog
    .showOpenDialog({
      properties: ['openDirectory'],
    })
    .then((result) => {
      if (!result.canceled) {
        const selectedDirectory = result.filePaths[0]
        event.sender.send('directory:selected', selectedDirectory)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

ipcMain.on('selectDirectory', handleDirectorySelection)
