import PropTypes from 'prop-types'
import './style.css'

/**
 * Display a banner with a background image and optional caption
 *
 * @param {Object} [Props] - The function component Props
 * @param {string} [Props.bannerBackgroundImage=''] - The image background of the banner.
 * @param {string} [Props.bannerText=''] - The caption of the banner.
 *
 * @param {Object} [Props.styleModifier=null] - Allows you to add one or more
 * BEM-type modifier CSS classes to customize the style of the elements
 * making up the dropdown.
 *
 * @param {String} [Props.styleModifier.bannerContainer] - Allows to modify the banner wrapper style.
 *
 * @param {String} [Props.styleModifier.backgroundImageContainer] - Allows to modify the banner
 * background image style.
 *
 * @returns {JSX.Element} the Banner component.
 */
function Banner({ bannerBackgroundImage, bannerText, styleModifier }) {
  const blankString = ''

  return (
    <div
      className={`Banner${
        styleModifier ? ` ${styleModifier.bannerContainer}` : blankString
      }`}
    >
      <div
        className={`Banner__background-image${
          styleModifier
            ? ` ${styleModifier.backgroundImageContainer}`
            : blankString
        }`}
      >
        <img src={bannerBackgroundImage} alt={bannerText} />
      </div>
      {bannerText !== '' && <h1 className="Banner__caption">{bannerText}</h1>}
    </div>
  )
}

Banner.propTypes = {
  bannerBackgroundImage: PropTypes.string.isRequired,
  bannerText: PropTypes.string.isRequired,
  styleModifier: PropTypes.object,
}

Banner.defaultProps = {
  bannerBackgroundImage: '',
  bannerText: '',
  styleModifier: null,
}

export default Banner
