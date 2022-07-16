import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import App from './pages/App'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Navigate to="/home" />}></Route>

      <Route path="/home" element={<App></App>}></Route>
    </Routes>
  </BrowserRouter>
)
