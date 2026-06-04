import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import './styles/globals.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import CollectionItemPage from './pages/CollectionItemPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/collections/:slug" element={<CollectionItemPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
