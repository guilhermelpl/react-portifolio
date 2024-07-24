import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './router.jsx'
import './lib/i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
