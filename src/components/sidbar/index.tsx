import React from 'react'
import './index.less'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'

const onChange = (key: string) => {
  console.log(key)
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `قۇجات`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `مازمۇن`,
    children: `Content of Tab Pane 2`,
  },
]

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default Sidebar
