import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Router from '../utils/router'
import './style.css'

/**
 * This component represents the Kasa application. This takes care of rendering the header, the footer and activating the routing of the application.
 *
 * @returns {JSX.Element} The App component.
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
