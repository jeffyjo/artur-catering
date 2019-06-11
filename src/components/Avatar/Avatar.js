import React from 'react'
import PropTypes from 'prop-types'


import './Avatar.scss'
import Image from './../Image/Image'

// TODO: Should be using dynamic content
const Avatar = ({ image, imageTitle, header, decsription }) => {
    return (
        <div className="o-avatar">
            <Image src={image.childImageSharp.fixed.src} title={imageTitle} />
            {/* <img className="o-avatar__image" src={src} title={imageTitle} /> */}
            <h3 className="o-avatar__header">{header}</h3>
            <p className="o-avatar__description">{decsription}</p>
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