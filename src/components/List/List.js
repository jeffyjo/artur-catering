import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './List.scss'

const list = [1,2,3,4,5,6,7,8,9,10]

const List = ({ id }) => {
    return (
        <ul className="m-list">
            <input className="m-list__input" type="checkbox" id={id} />
            <label htmlFor={id} className="m-list__label">
                <h3 className="m-list__title">List</h3>
                <i className="fas fa-chevron-right m-list__icon"></i>
            </label>
            <div className="m-list__content">
                {list.map( (el, i) => (
                    <li key={i} className="m-list__item">
                        <Link className="m-list__item-link" to="">Link</Link>
                    </li>
                ))}
            </div>
        </ul>
    )
}

List.propTypes = {

}

export default List