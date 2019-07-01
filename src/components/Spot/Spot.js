import React from "react";
import PropTypes from "prop-types";

import Image from "../Image/Image";

import "./Spot.scss";

const Spot = ({ src, alt, contentComponent, className }) => {
  const PageContent = contentComponent;

  return (
    <section className={`o-spot section ${className ? className : ""}`}>
      {/* <PageContent /> */}
      <div className="o-spot__content">{PageContent}</div>

      <div className="o-spot__image-wrapper">
        <Image src={src} alt={alt} className="a-image--rounded" />
      </div>
    </section>
  );
};

Spot.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  contentComponent: PropTypes.any,
  className: PropTypes.string
};

export default Spot;
