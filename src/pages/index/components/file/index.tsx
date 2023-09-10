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

  const { ipcRenderer } = window.require('electron')
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    
    onSelected(info.node)
    if (info.node.isLeaf) {
      // 如果是叶子节点，则打开文件
      ipcRenderer.send('read:file', keys[0])
    }
  }

  return (
    <div className="file-container">
      <FileOperation />
      <DirectoryTree
        multiple
        defaultExpandAll
        onSelect={onSelect}
        fieldNames={fieldNames}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        treeData={[fileNode]}
      />
    </div>
  )
}

export default File
