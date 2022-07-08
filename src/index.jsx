import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'

/**
 * The React application entry point. Using createRoot() allows using React 18 features, including batching.
 */
const root = ReactDOM.createRoot(document.body.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
