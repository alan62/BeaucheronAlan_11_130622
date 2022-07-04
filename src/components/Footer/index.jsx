import logo from '../../assets/logos/logo-black-and-white.svg'
import './style.css'

/**
 * Display web app footer with Kasa copyright and logo.
 *
 * @returns {JSX.Element} The Footer component.
 */
export default function Footer() {
  return (
    <footer className="Footer">
      <img className="Footer__logo" src={logo} alt="Logo de Kasa" />
      <p className="Footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
