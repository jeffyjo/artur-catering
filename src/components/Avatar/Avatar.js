import React from 'react'
import PropTypes from 'prop-types'


import './Avatar.scss'
import Image from './../Image/Image'

// TODO: Should be using dynamic content
const Avatar = ({ image, header, description }) => {
    return (
      <div className="o-avatar">
        <Image className="o-avatar__image" src={image.src} title={image.alt} />
        <h3 className="o-avatar__header">{header && header}</h3>
        <p className="o-avatar__description">{description && description}</p>
      </div>
    )
}

Avatar.propTypes = {
    image: PropTypes.object,
    imageTitle: PropTypes.string,
    header: PropTypes.string,
    decsription: PropTypes.string
}

export default Avatar
