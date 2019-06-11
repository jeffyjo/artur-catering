import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    avatars={entry.getIn(['data', 'avatars'])}
    partners={entry.getIn(['data', 'partners'])}
    content={entry.getIn(['html'])}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default AboutPagePreview
