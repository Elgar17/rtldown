import { ConfigProvider, Button } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

const config: ConfigProviderProps = {
  direction: 'rtl',
}

function App() {
  return (
    <>
      <ConfigProvider direction="rtl">
        <div style={{ width: 400, margin: '100px auto' }}>
          <div>
            Vite + React
            <Button>12</Button>
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>
      </ConfigProvider>
    </>
  )
}

export default App
