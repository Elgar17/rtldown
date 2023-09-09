import { Tree } from 'antd'
import type { DirectoryTreeProps } from 'antd/es/tree'
import { FileNode } from '@/components/sidbar'
import FileOperation from './FileOperation'
import './index.less'

const { DirectoryTree } = Tree

interface FileProps {
  fileNode: FileNode
}
const fieldNames = {
  key: 'path',
  title: 'name',
}

const File: React.FC<FileProps> = ({ fileNode }) => {
  const { ipcRenderer } = window.require('electron')
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info)
    if (info.node.isLeaf) {
      // 如果是叶子节点，则打开文件
      ipcRenderer.send('read:file', keys[0])
    }
  }

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info)
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
