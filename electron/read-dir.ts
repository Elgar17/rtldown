import { ipcMain } from 'electron'
import fs from 'fs'
import path from 'path'

interface FileNode {
  name: string
  path: string
  type: 'directory' | 'file'
  isLeaf: boolean
  children?: FileNode[]
}

function handleDirectorySelection(event: any, args: any) {
  const { dirPath } = args

  readDirectory(dirPath).then((fileTree) => {
    event.sender.send('directory:tree', fileTree)
  })
}

/**
 * Recursively reads a directory and returns a file tree object.
 * @param directoryPath The path of the directory to read.
 * @returns The file tree object representing the directory structure.
 */
async function readDirectory(directoryPath: string): Promise<FileNode> {
  const files = await fs.readdirSync(directoryPath)

  const tree: FileNode = {
    name: path.basename(directoryPath),
    path: directoryPath,
    type: 'directory',
    isLeaf: false,
    children: [],
  }

  for (const file of files) {
    const filePath = path.join(directoryPath, file)
    const stats = await fs.statSync(filePath)

    if (stats.isDirectory()) {
      const childNode = await readDirectory(filePath)
      if (tree.children) tree.children.push(childNode)
    } else if (stats.isFile() && path.extname(file) === '.md') {
      if (tree.children) {
        tree.children.push({
          name: file,
          path: filePath,
          type: 'file',
          isLeaf: true,
        })
      }
    }
  }

  return tree
}

ipcMain.on('getDirTree', handleDirectorySelection)
