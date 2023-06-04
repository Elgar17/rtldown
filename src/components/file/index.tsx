import { Tree } from 'antd'
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree'
import FileOperation from './FileOperation'
import './index.less'

const { DirectoryTree } = Tree

const treeData: DataNode[] = [
  {
    title: 'ەستەلىك',
    key: '0-0',
    children: [
      { title: 'test', key: '0-0-0', isLeaf: true },
      { title: 'hello', key: '0-0-1', isLeaf: true },
    ],
  },
  {
    title: 'note',
    key: '0-1',
    children: [
      { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
    ],
  },
]

const File = () => {
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info)
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
        treeData={treeData}
      />
    </div>
  )
}

export default File
