import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Toaster 
        richColors position="top-right"
        toastOptions={{
          style: {
            background: "#00f8e2",
            color: "#0a101f",
            border:"2px solid #02a194",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "16px",
          },
        }}
        />
    <App />
  </BrowserRouter>
)