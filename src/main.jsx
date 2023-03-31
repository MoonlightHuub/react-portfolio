import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './Css/fonts.css'
import { ContextProvider } from './components/context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
)
