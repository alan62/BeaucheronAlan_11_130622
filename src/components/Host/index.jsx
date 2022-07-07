import PropTypes from 'prop-types'
import './style.css'

/**
 * Display host information.
 *
 * @param {Object} [Props] - The function component Props.
 * @param {string} [Props.hostName] - The host name.
 * @param {string} [Props.hostPictureURLs] - Host photo URLs.
 * @returns {JSX.Element} The Host component.
 */
function Host({ hostName, hostPictureURLs }) {
  return (
    <div className="Host">
      <p className="Host__name">{hostName}</p>
      <div className="Host__profil-picture">
        {hostPictureURLs && <img src={hostPictureURLs} alt="" />}
      </div>
    </div>
  )
}

Host.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPictureURLs: PropTypes.string.isRequired,
}

Host.defaultProps = {
  hostName: "Nom de l'hôte",
  hostPictureURLs: '',
}

export default Host
