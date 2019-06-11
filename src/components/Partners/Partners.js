import React from 'react'
import PropTypes from 'prop-types'

import Partner from './Partner/Partner'

import './Partners.scss'

// TODO: Should be using dynamic content
const Partners = ({ partners }) => {
    return (
        <div className="o-partners">
            {/* Should dynamically loop and ouput content */}
            {partners.map((partner, index) => (
                <Partner className="o-partners__partner" image={partner.image} imageTitle={partner.imageTitle} partnerName={partner.partnerName} key={index}/>
            ))}
        </div>
    )
}

Partners.propTypes = {
    partners: PropTypes.shape({
        image: PropTypes.object,
        imageTitle: PropTypes.string,
        partnerName: PropTypes.string
    })
}

export default Partners