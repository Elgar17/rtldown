import { Tree } from 'antd'
import type { DirectoryTreeProps } from 'antd/es/tree'
import { FileNode } from '../sidbar'
import FileOperation from './FileOperation'
import './index.less'
import React from 'react'

const { DirectoryTree } = Tree

interface FileProps {
  fileNode: FileNode,
  onSelected: (node: any) => void
}
const fieldNames = {
  key: 'path',
  title: 'name',
}

const File: React.FC<FileProps> = ({ fileNode, onSelected }) => {
  // 创建一个 state 存放当前文件
  const [currentFile, setCurrentFile] = React.useState<FileNode>(fileNode)

  const { ipcRenderer } = window.require('electron')
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    
    if (info.node.isLeaf) {
      // 如果是叶子节点，则打开文件
      onSelected(info.node)
      ipcRenderer.send('read:file', keys[0])
    }
  }

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    // console.log(info.node)
    // console.log(keys)
    // setCurrentFile(info.node.props.fileNode)
  }
  return (
    <div className="file-container">
      <FileOperation />
      <DirectoryTree
        multiple
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        fieldNames={fieldNames}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        treeData={[fileNode]}
      />
    </div>
  )
}

export default File
