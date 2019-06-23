import React from "react";
import PropTypes from "prop-types";

import Image from "../Image/Image";

import "./Spot.scss";

const Spot = ({ src, title, contentComponent, className }) => {
  const PageContent = contentComponent;

  return (
    <section className={`o-spot ${className ? className : ""}`}>
      {/* <PageContent /> */}
      <div className="o-spot__content">{PageContent}</div>

      <div className="o-spot__image-wrapper">
        <Image src={src} title={title} />
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
