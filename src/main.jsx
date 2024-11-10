import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGa from "react-ga4";
import App from './App.jsx'
import './index.css'

ReactGa.initialize("G-ZFGDPPJDXE");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
