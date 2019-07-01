import React from 'react'
import PropTypes from 'prop-types'

import './Image.scss'

const Image = ({ src, alt, className }) => (
  <img className={`
      a-image
      ${className ? className : ''}
    `}
    src={src ? src : 'https://via.placeholder.com/400'}
    alt={alt}
    title={alt}
  />
)

Image.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string
}

export default Image
