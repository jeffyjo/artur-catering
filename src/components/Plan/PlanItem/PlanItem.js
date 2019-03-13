import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../Image/Image'
import PlanContent from './Plancontent/PlanContent'

import './PlanItem.scss'

// TODO: Should be using dynamic content
const PlanItem = ({ src, imageTitle, header, description, allergens }) => (
    <li className="o-plan-item">
        <div className="o-plan-item__inner">
            <Image className="o-plan-item__inner-image" src={src} title={imageTitle} />
            <PlanContent className="o-plan-item__inner-content" header={header} description={description} allergens={allergens} />
        </div>
    </li>
)

PlanItem.propTypes = {
    src: PropTypes.string,
    imageTitle: PropTypes.string,
    header: PropTypes.string,
    description: PropTypes.string,
    allergens: PropTypes.array
}

export default PlanItem