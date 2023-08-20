import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import './index.less'
import { useEffect } from 'react'

const Open = () => {
  const navigate = useNavigate()
  const { ipcRenderer } = window.require('electron')

  useEffect(() => {
    // TODO: 打开是时，防止触发两次
    ipcRenderer.on('directory:selected', (_, selectedDirectory) => {
      // 使用选择的目录路径进行默认保存路径的逻辑
      // TODO：触发两次，待优化
      navigate('/', { state: { dirPath: selectedDirectory } })
    })
  }, [])

  const openFile = () => {
    // 选择一个目录
    ipcRenderer.send('selectDirectory')
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
