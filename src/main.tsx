// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { ConfigProvider } from "antd-mobile";
import zhCN from 'antd-mobile/es/locales/en-US'

import 'lib-flexible'
import './index.scss'

// REDUX
import { Provider } from 'react-redux'
import store from '@/store'

createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
)
