import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../Image/Image'

import './Partner.scss'

// TODO: Should be using dynamic content
const Partner = ({ image, partnerName, className }) => {
  return (
    <div className={`m-partner ${className}`}>
        <Image className="m-partner__image a-image--rounded" src={image} alt={partnerName} />
        <h3 className="m-partner__title">{partnerName && partnerName}</h3>
    </div>
  )
}

Partner.propTypes = {
    image: PropTypes.string,
    partnerName: PropTypes.string,
    className: PropTypes.string
}

export default Partner
