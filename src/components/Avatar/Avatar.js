import React from 'react'
import PropTypes from 'prop-types'


import './Avatar.scss'
import Image from './../Image/Image'

const Avatar = ({ image, header, description }) => {
    return (
      <div className="o-avatar">
        <Image className="o-avatar__image" src={image} alt={header} />
        <h2 className="o-avatar__header is-size-4">{header && header}</h2>
        <p className="o-avatar__description">{description && description}</p>
      </div>
    )
}

Avatar.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    decsription: PropTypes.string
}

export default Avatar
