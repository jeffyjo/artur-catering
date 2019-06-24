import React from 'react'
import PropTypes from 'prop-types'

import Partner from './Partner/Partner'

import './Partners.scss'

const Partners = ({ partners }) => {
    return (
        <div className="o-partners">
          {partners && partners.map(({ image, partnerName }, i) => (
            <Partner
              image={image}
              partnerName={partnerName}
              key={`${partnerName}${i}`}
            />
          ))}
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
