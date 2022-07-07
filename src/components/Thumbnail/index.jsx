import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.css'

/**
 * Display the thumbnail of an accommodation with its title and its cover included in a link that returns to the page of its accommodation sheet.
 *
 * @param {Object} [Props] The function component Props.
 * @param {String} [Props.id=''] - The accommodation id.
 * @param {String} [Props.title='Titre du logement'] - The accommodation title.
 * @param {String} [Props.coverURL=''] - The accommodation preview image URL.
 * @returns {JSX.Element} The Thumbnail component.
 */
function Thumbnail({ id, title, coverURL }) {
  return (
    <article className="Thumbnail">
      <Link className="Thumbnail__link" to={`/accommodation-sheet/${id}`}>
        <img className="Thumbnail__link-image" src={coverURL} alt="" />
        <h2 className="Thumbnail__link-title">{title}</h2>
      </Link>
    </article>
  )
}

Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverURL: PropTypes.string.isRequired,
}

Thumbnail.defaultProps = {
  id: '',
  title: 'Titre de la location',
  coverURL: '',
}

export default Thumbnail
