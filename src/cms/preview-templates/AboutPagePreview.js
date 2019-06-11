import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry}) => {
  const entryAvatars = entry.getIn(['data','avatars']);
  const avatars = entryAvatars ? entryAvatars.toJS() : []

  const entryPartners = entry.getIn(['data','partners']);
  const partners = entryPartners ? entryPartners.toJS() : []

  return ( 
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      avatars={avatars}
      partners={partners}
      content={entry.getIn(['body'])}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default AboutPagePreview
