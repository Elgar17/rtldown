import React, { useState } from 'react'
import './index.less'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import File from '@/components/file'

export interface FileNode {
  name: string
  path: string
  type: 'directory' | 'file'
  isLeaf: boolean
  children: FileNode[]
}

interface SidebarProps {
  fileTree: FileNode
}

const Sidebar: React.FC<SidebarProps> = ({ fileTree }) => {

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `قۇجات`,
      children: <File fileNode={fileTree} />,
    },
    {
      key: '2',
      label: `مازمۇن`,
      children: `Content of Tab Pane 2`,
    },
  ]

  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <div className="sidebar-container">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default Sidebar
