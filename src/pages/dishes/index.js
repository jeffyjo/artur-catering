import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Layout from '../../components/Util/Layout'
import Sidebar from '../../components/Sidebar/Sidebar';

class DishesIndex extends Component {
	render() {
		return (
			<Layout>
				<section className="u-section">
					<div className="columns is-desktop">
						<Sidebar className="column is-one-quarter" />
						<div className="container column is-three-quarters">Dishes</div>
					</div>
				</section>
			</Layout>
		)
	}
}

DishesIndex.propTypes = {

}

export default DishesIndex