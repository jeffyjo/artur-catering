import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Util/Layout'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>We will contact you soon.</p>
          <Link to="/">Home</Link>
        </div>
      </div>
    </section>
  </Layout>
)
