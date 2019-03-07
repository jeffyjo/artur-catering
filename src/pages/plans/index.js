import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../../components/Sidebar/Sidebar'
import Layout from '../../components/Util/Layout'

class PlansIndex extends Component {
	render() {
		return (
			<Layout>
				<section className="u-section">
					<div className="columns is-desktop">
						<Sidebar className="column is-one-quarter" />
						<div className="container column is-three-quarters">Plans</div>
					</div>
				</section>
			</Layout>
		)
	}
}

PlansIndex.propTypes = {

}

export default PlansIndex