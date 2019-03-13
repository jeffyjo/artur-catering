import React from 'react'
import PropTypes from 'prop-types'

import './Avatar.scss'

// TODO: Should be using dynamic content
const Avatar = ({ src, imageTitle, header, decsription }) => {
    return (
        <div className="o-avatar">
            <img className="o-avatar__image" src="https://via.placeholder.com/150" title="avatar" />
            <h3 className="o-avatar__header">Artur Baracz</h3>
            <p className="o-avatar__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia urna a lorem suscipit, non vestibulum ipsum porta. Aliquam quis urna sed arcu euismod venenatis a ac metus.</p>
        </div>
    )
}

Avatar.propTypes = {
    src: PropTypes.string,
    imageTitle: PropTypes.string,
    header: PropTypes.string,
    decsription: PropTypes.string
}

export default Avatar