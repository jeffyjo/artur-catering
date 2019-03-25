import React from 'react'
import PropTypes from 'prop-types'

import Partner from './Partner/Partner'

import './Partners.scss'

// TODO: Should be using dynamic content
const Partners = ({ partners }) => {
    return (
        <div className="o-partners">
            {/* Should dynamically loop and ouput content */}
            <Partner className="o-partners__partner" />
            <Partner className="o-partners__partner" />
            <Partner className="o-partners__partner" />
            <Partner className="o-partners__partner" />
            <Partner className="o-partners__partner" />
        </div>
    )
}

Partners.propTypes = {
    partners: PropTypes.shape({
        src: PropTypes.string,
        imageTitle: PropTypes.string,
        partnerName: PropTypes.string
    })
}

export default Partners