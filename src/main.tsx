import React from 'react'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { themeToken } from '@/constants'
import 'reset-css'
import '@/styles/global.less'
import 'simplebar-react/dist/simplebar.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={themeToken} direction="rtl">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
