import PropTypes from 'prop-types'
import './style.css'

/**
 * Display the title of an accommodation and its location.
 *
 * @param {Object} [Props] - The function component Props.
 * @param {String} [Props.currentAccommodationTitle='Localisation du logement'] - The accommodation title.
 * @param {String} [Props.currentAccommodationLocation='Titre du logement'] - The location of the accommodation.
 * @returns {JSX.Element} The Title component.
 */
function Title({ currentAccommodationTitle, currentAccommodationLocation }) {
  return (
    <div className="Title">
      <h1 className="Title__housing-title">{currentAccommodationTitle}</h1>
      <p className="Title__location-of-accommodation">
        {currentAccommodationLocation}
      </p>
    </div>
  )
}

Title.propTypes = {
  currentAccommodationLocation: PropTypes.string.isRequired,
  currentAccommodationTitle: PropTypes.string.isRequired,
}

Title.defaultProps = {
  currentAccommodationLocation: 'Localisation du logement',
  currentAccommodationTitle: 'Titre du logement',
}

export default Title
