import { Button } from 'antd'
// import { Link } from 'react-router-dom'
import './index.less'

const Open = () => {

  const openFile = () => {
    // 选择一个目录
    const { ipcRenderer } = window.require('electron')
    ipcRenderer.send('selectDirectory')
    ipcRenderer.on('directory:selected', (_, selectedDirectory) => {
      // 使用选择的目录路径进行默认保存路径的逻辑
      console.log(selectedDirectory)
    })
  }
  return (
    <div className="open-continer">
      <Button onClick={openFile}>
        {/* <Link to="/">Open New File</Link> */}
        <div>Open Directory</div>
      </Button>
    </div>
  )
}

export default Open
