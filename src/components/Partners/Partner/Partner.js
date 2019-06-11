import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../Image/Image'

import './Partner.scss'

// TODO: Should be using dynamic content
const Partner = ({ image, imageTitle, partnerName, className }) => (
    <div className={`m-partner ${className}`}>
        {console.log(image)}
        {/* <Image className="m-partner__image" src={image.childImageSharp.fixed.src} title={imageTitle} /> */}
        <Image className="m-partner__image" src={image} title={imageTitle} />
        {/* <h4 className="m-partner__title">{partnerName}</h4> */}
        <h4 className="m-partner__title">{partnerName}</h4>
    </div>
)

Partner.propTypes = {
    image: PropTypes.object,
    imageTitle: PropTypes.string,
    partnerName: PropTypes.string
}

export default Partner