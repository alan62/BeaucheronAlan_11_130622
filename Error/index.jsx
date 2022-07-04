import PropTypes from 'prop-types'
import './style.css'

/**
 * Display an error message.
 *
 * @param {Object} [Props] - The function component Props.
 * @param {String} [Props.message="Une erreur est survenue lorsque nous avons tenté d'afficher les informations que vous voulez consulter. Recharger la page pourrait vous permettre de voir de nouveau ces informations."] - Error message displayed.
 * @returns {JSX.Element} The Error component.
 */
function Error({ message }) {
  return (
    <div className="Error">
      <p className="Error__explanation">{message}</p>
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}

Error.defaultProps = {
  message:
    "Une erreur est survenue lorsque nous avons tenté d'afficher les informations que vous voulez consulter. Recharger la page pourrait vous permettre de voir de nouveau ces informations.",
}

export default Error
