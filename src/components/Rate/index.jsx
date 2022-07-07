import PropTypes from 'prop-types'
import RateButton from '../RateButton'
import './style.css'

/**
 * A positive or negative whole number.
 * @typedef {Number} Integer
 */

/**
 * Display the rating of an accommodation.
 *
 * @param {Object} [Props] - the function component Props.
 * @param {Integer} [Props.currentAccommodationRating=0] - Accommodation rating.
 *
 * @see https://www.geeksforgeeks.org/how-to-create-a-rating-component-in-reactjs/ - I was partly inspired by this tutorial to set up the rendering of the accommodation rating.
 *
 * @returns {JSX.Element} The Rate component
 */
function Rate({ currentAccommodationRating }) {
  return (
    <ul className="Rate">
      {[...Array(5)].map((item, index) => {
        return (
          <RateButton
            key={`rate-button-${index}`}
            isChecked={currentAccommodationRating >= index}
          />
        )
      })}
    </ul>
  )
}

Rate.propTypes = {
  currentAccommodationRating: PropTypes.number.isRequired,
}

Rate.defaultProps = {
  currentAccommodationRating: 0,
}

export default Rate
