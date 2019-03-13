import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../Image/Image'
import PlanContent from './Plancontent/PlanContent'

import './PlanItem.scss'

const PlanItem = ({}) => (
    <li className="o-plan-item">
        <div className="o-plan-item__inner">
            <Image className="o-plan-item__inner-image" />
            <PlanContent className="o-plan-item__inner-content" />
        </div>
    </li>
)

PlanItem.propTypes = {

}

export default PlanItem