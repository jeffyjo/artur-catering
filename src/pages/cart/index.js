import React, { Component } from 'react'
import Layout from '../../components/Util/Layout'

import CartForm from '../../components/Cart/CartForm/CartForm'

class Form extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Layout>
				<section className="section">
					<div className="container">
						<div className="content">
              <h1>Your details</h1>
              <CartForm />
						</div>
					</div>
				</section>
			</Layout>
		)
	}
}

export default Form
