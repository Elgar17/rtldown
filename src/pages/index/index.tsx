import Sidebar, { FileNode } from './components/sidbar'
import Main from './components/main'
import { useLocation } from 'react-router-dom'
import './index.less'
import { useEffect, useState } from 'react'

const Index = () => {
  const [cuNode, setCuNode] = useState<FileNode | null>(null)
  const location = useLocation()
  const { ipcRenderer } = window.require('electron')
  const [fileTree, setFileTree] = useState<FileNode>({
    name: 'root',
    path: '/',
    type: 'directory',
    isLeaf: false,
    children: [],
  })

  useEffect(() => {
    // 获取路由参数
    ipcRenderer.send('getDirTree', { dirPath: location.state.dirPath })
    ipcRenderer.on('directory:tree', (_, fileTree) => {
      setFileTree(fileTree)
    })

    return () => {
      ipcRenderer.removeAllListeners('directory:tree')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const onSelected = (fileNode: any) => {
    setCuNode(fileNode)
  }

  return (
    <div className="index-continer">
      <Main node={cuNode} />
      <Sidebar fileTree={fileTree} onSelected={onSelected} />
    </div>
  )
}

export default Index
