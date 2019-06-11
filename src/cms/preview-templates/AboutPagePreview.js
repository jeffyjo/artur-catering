import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default AboutPagePreview
