import React from 'react'
import PropTypes from 'prop-types'

import Partner from './Partner/Partner'

import './Partners.scss'

// TODO: Should be using dynamic content
const Partners = ({ partners }) => {
    return (
        <div className="o-partners">
           {partners.map((partner, index) => {
        console.log(partner.partner + "___:partner")
        const {image, imageTitle,partnerName} = partner.partner;
        if(image.src === null) return "";
        return <Partner className="o-partners__partner" image={image.src} imageTitle={imageTitle} partnerName={partnerName} key={index}/>
        })}
        </div>
    )
}
 
Partners.propTypes = {
    partners: PropTypes.any
}

// Partners.propTypes = {
//     partners: PropTypes.shape({
//         image: PropTypes.object,
//         imageTitle: PropTypes.string,
//         partnerName: PropTypes.string
//     })
// }

export default Partners