import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../Image/Image'

import './Partner.scss'

const Partner = ({ src, imageTitle, partnerName, className }) => (
    <div className={`m-partner ${className}`}>
        <Image className="m-partner__image" src={src} title={imageTitle} />
        {/* <h4 className="m-partner__title">{partnerName}</h4> */}
        <h4 className="m-partner__title">Partner</h4>
    </div>
)

Partner.propTypes = {
    src: PropTypes.string,
    imageTitle: PropTypes.string,
    partnerName: PropTypes.string
}

export default Partner