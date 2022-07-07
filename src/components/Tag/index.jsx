import PropTypes from 'prop-types'
import './style.css'

/**
 * Display one of the tags of an accommodation.
 *
 * @param {Object} [Props] - The function component Props.
 * @param {String} [Props.name='Nom du tag'] - The name of the tag.
 * @returns {JSX.Element} The Tag component.
 */
function Tag({ name }) {
  return <li className="Tag">{name}</li>
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  name: 'tag du logement',
}

export default Tag
