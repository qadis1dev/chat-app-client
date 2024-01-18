import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import colors from './config/colors.ts';

document.body.style.setProperty("--primary", colors.primary);
document.body.style.setProperty("--secondary", colors.secondary);
document.body.style.setProperty("--accent", colors.accent);
document.body.style.backgroundColor = "#F5F5F5";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
