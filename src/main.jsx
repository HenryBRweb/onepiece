import React from 'react'
import ReactDOM from 'react-dom/client'
import Pagina from './Pagina.jsx'
import Contador from './Contador.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pagina />
    <Contador />
  </React.StrictMode> 
)
