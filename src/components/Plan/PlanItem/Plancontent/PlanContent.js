import React from 'react'
import PropTypes from 'prop-types'

import './Plancontent.scss'

const PlanContent = ({ className }) => (
    <div className={`m-plan-content ${className}`}>
        <h3 className="m-plan-content__heading is-size-4">Title</h3>
        <p className="m-plan-content__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia urna a lorem suscipit, non vestibulum ipsum porta. Aliquam quis urna sed arcu euismod venenatis a ac metus.</p>
        <ul className="m-plan-content__list">
            <li className="m-plan-content__list-item">Allergens:</li>
            
            {/* Should be loopen and dynamically added */}
            <li className="m-plan-content__list-item">Allergen</li>
            <li className="m-plan-content__list-item">Allergen</li>
        </ul>
    </div>
)

PlanContent.propTypes = {

}

export default PlanContent