import { NavLink } from 'react-router-dom'
import logo from '../../assets/logos/logo-original.svg'
import './style.css'

/**
 * Display web app header with its navigation links.
 *
 * @returns {JSX.Element} The Header component.
 */
export default function Header() {
  let navbarItemClassName = 'Header__navbar__item'

  return (
    <header className="Header">
      <img className="Header__logo" src={logo} alt="Logo de Kasa" />
      <nav className="Header__navbar">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${navbarItemClassName} ${navbarItemClassName}--current-page`
                : `${navbarItemClassName}`
            }
            end
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${navbarItemClassName} ${navbarItemClassName}--current-page`
                : `${navbarItemClassName}`
            }
          >
            À propos
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
