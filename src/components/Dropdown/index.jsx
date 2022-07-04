import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.css'

/**
 * Display a dropdown whose content is added with the children prop.
 *
 * @param {Object} [Props] The function component Props.
 * @param {String} [Props.label='Nom du menu déroulant'] - The dropdown label.
 * @param {JSX.Element} [Props.children={<p className='Dropdown__content--empty'>Contenu du menu déroulant</p>}] - The contents of the dropdown.
 *
 * @param {Object} [Props.styleModifier=null] - Allows you to add one or more
 * BEM-type modifier CSS classes to customize the style of the elements
 * making up the dropdown.
 *
 * @param {String} [Props.styleModifier.dropdownContainer=undefined] - Allows you to
 * change the style of the dropdown container.
 *
 * @param {String} [Props.styleModifier.triggerAndLabelContainer=undefined] - Allows
 * to change the style of the label container and trigger button.
 *
 * @param {String} [Props.styleModifier.label=undefined] -  Allows you to change the
 * style of the label.
 *
 * @param {String} [Props.styleModifier.trigger=undefined] - Allows you to change
 * the style of the trigger button.
 *
 * @param {String} [Props.styleModifier.triggerIcon=undefined] - Allows you to change
 * the icon style of the trigger button.
 *
 * @returns {JSX.Element} The Dropdown component.
 */
function Dropdown({ label, children, styleModifier }) {
  const [isOpen, setIsOpen] = useState(false)
  const blankString = ''
  const whiteSpace = ' '

  return (
    <div
      className={`Dropdown${
        styleModifier
          ? whiteSpace + styleModifier.dropdownContainer
          : blankString
      }${isOpen ? ` Dropdown--open` : blankString}`}
    >
      <div
        className={`Dropdown-trigger-and-label-container${
          styleModifier
            ? whiteSpace + styleModifier.triggerAndLabelContainer
            : blankString
        }`}
      >
        <h3
          className={`Dropdown__label${
            styleModifier ? whiteSpace + styleModifier.label : blankString
          }`}
        >
          {label}
        </h3>
        <button
          className={`Dropdown__trigger${
            styleModifier ? whiteSpace + styleModifier.trigger : blankString
          }`}
          onClick={() => {
            !isOpen ? setIsOpen(true) : setIsOpen(false)
          }}
        >
          <svg
            className={`Dropdown__trigger__icon${
              styleModifier
                ? whiteSpace + styleModifier.triggerIcon
                : blankString
            }`}
            width="15"
            height="13"
            viewBox="0 0 25 15"
            fill="none"
          >
            <path
              d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      {children}
    </div>
  )
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  styleModifier: PropTypes.object,
}

Dropdown.defaultProps = {
  label: 'Nom du menu déroulant',
  children: (
    <p className="Dropdown__content--empty">Contenu du menu déroulant</p>
  ),
  styleModifier: null,
}

export default Dropdown
