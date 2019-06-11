import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Layout from '../../components/Util/Layout'
import Plan from '../../components/Plan/Plan';

class PlansIndex extends Component {
	render() {
		return (
			<Layout>
				<section className="section">
					<div className="is-desktop">
						<div className="container">
							<h1 className="title u-align--center">Plans</h1>

							{/* subnav */}

							<Plan />
							<Plan />
							<Plan />

						
						</div>
					</div>
				</section>
			</Layout>
		)
	}
}

// PlansIndex.propTypes = {

// }

export default PlansIndex