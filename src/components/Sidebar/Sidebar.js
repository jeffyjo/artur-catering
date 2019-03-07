import React from 'react'
import PropTypes from 'prop-types'

import List from '../List/List'

import './Sidebar.scss'

const Sidebar = ({ className }) => {
	return (
		<aside className={`${className}`}>
			<div className="o-sidebar">
				<input className="o-sidebar__input" id="c1" type="checkbox"/>
				<label className="o-sidebar__label" htmlFor="c1">
					<h2 className="o-sidebar__title">
						Plans
						<i className="fas fa-chevron-right o-sidebar__icon"></i>
					</h2>
				</label>
				<ul className="o-sidebar__list">
					<List id="list1" />
					<List id="list2" />
					<List id="list3" />
				</ul>
			</div>
		</aside>
	)
}

Sidebar.propTypes = {}

export default Sidebar