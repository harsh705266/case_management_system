import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CaseProvider } from './context/CaseContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaseProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CaseProvider>
  </StrictMode>
)
