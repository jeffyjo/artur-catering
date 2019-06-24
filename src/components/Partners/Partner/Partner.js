import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../Image/Image'

import './Partner.scss'

// TODO: Should be using dynamic content
const Partner = ({ image, partnerName, className }) => {
  return (
    <div className={`m-partner ${className}`}>
        <Image className="m-partner__image" src={image.src} title={image.alt} />
        <h4 className="m-partner__title">{partnerName && partnerName}</h4>
    </div>
  )
}

Partner.propTypes = {
    image: PropTypes.object,
    partnerName: PropTypes.string,
    className: PropTypes.string
}

export default Partner
