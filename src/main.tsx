import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Easter egg for developers who open DevTools
console.log(
  '%cHey, you\'re inspecting my code 👀',
  'font-size: 18px; font-weight: 700; color: #2D4A3A;',
)
console.log(
  '%cLike what you see? Let\'s talk: npangheben@outlook.com\n%cgithub.com/tachax · linkedin.com/in/natachapangheben',
  'font-size: 13px; color: #C9963A; font-weight: 600;',
  'font-size: 12px; color: #6B6B5F;',
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
