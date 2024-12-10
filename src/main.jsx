import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import Estore from './Redux/Estore.js'








createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={Estore}>
        <BrowserRouter>
      <App />
      </BrowserRouter>
   </Provider>
  </StrictMode>,
)
