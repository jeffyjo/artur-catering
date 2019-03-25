import React from 'react'
import PropTypes from 'prop-types'

import './Image.scss'

const Image = ({ src, title, className }) => (
    // <img className="a-image" src={src} title={title} />
    <img className={`a-image ${className}`} src="https://via.placeholder.com/400" title="title" />
)

Image.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string
}

export default Image
