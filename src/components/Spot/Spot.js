import React, { Component } from "react";
import PropTypes from "prop-types";

import PreviewCompatibleImage from "../PreviewCompatibleImage";

const Spot = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, text, image } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        {/* <PreviewCompatibleImage imageInfo={image} /> */}
      </div>
    );
  }
};

Spot.propType = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object
};

export default Spot;
