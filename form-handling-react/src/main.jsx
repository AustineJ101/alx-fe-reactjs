import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RegistrationForm from './components/formikForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationForm />
  </StrictMode>,
)
