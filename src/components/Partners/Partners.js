import React from 'react'
import PropTypes from 'prop-types'

import Partner from './Partner/Partner'

import './Partners.scss'

// TODO: Should be using dynamic content
const Partners = ({ partners }) => {
    return (
        <div className="o-partners">
            {/* Should dynamically loop and ouput content */}
            {partners.map((partner, index) => {
                console.log(partner.partner + "___:partner")
                return <Partner className="o-partners__partner" image={partner.partner.image.src} imageTitle={partner.imageTitle} partnerName={partner.partnerName} key={index}/>
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