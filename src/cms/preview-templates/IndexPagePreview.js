import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'blurps'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <IndexPageTemplate
      hero={entry.getIn(['data', 'hero'])}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      blurbs={{ blurbs }}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
