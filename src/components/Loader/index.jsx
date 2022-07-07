import kasaHouse from '../../assets/logos/kasa-house.svg'
import './style.css'

/**
 * Display a loading spinner represented by the Kasa logo.
 *
 * @returns {JSX.Element} - The Loader component
 */
export default function Loader() {
  return (
    <div className="Loader">
      <div className="Loader__border"></div>
      <img
        className="Loader__icon"
        src={kasaHouse}
        alt="Chargement des données du site"
      />
    </div>
  )
}
