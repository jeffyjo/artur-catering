import React from 'react'
import PropTypes from 'prop-types'

import PlanItem from './PlanItem/PlanItem'

import './Plan.scss'

// TODO: Should be using dynamic content
const Plan = ({ title, plans }) => (
    <div className="o-plan">
        <h2 className="is-size-3 u-align--center">Menu</h2>
        <hr	/>

        {/* Should be looped and dynamic  */}
        <ul>
            <PlanItem />
            <PlanItem />
            <PlanItem />
        </ul>
    </div>
)

Plan.propTypes = {

}

export default Plan