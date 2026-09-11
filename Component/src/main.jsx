import { useContext } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mamtesh from './card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mamtesh />
  </StrictMode>,
)