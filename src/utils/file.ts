const fs = window.require('fs')

export const readFile = (path: string) => {
  return fs.readFile(path, 'utf-8')
}

export const writeFile = (path: string, ctx: string) => {
  return fs.writeFile(path, ctx, 'utf-8')
}

export const renameFile = (path: string, newPath: string) => {
  return fs.rename(path, newPath)
}

export const deleteFile = (path: string) => {
  return fs.unlink(path)
}
