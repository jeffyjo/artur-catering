import React from "react";
import PropTypes from "prop-types";

import Content, { HTMLContent } from "../Util/Content";
import Image from "../Image/Image";

import "./Spot.scss";

const Spot = ({ src, title, contentComponent, className }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className={`o-spot ${className ? className : ""}`}>
      {/* <PageContent /> */}
      <div className="o-spot__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
        massa dolor. Nullam in orci magna. Proin non sapien sed felis posuere
        ultricies sit amet sed diam. Cras vestibulum, urna lacinia feugiat
        congue, diam tellus elementum nulla, eget euismod lectus arcu vitae
        odio. Cras ac euismod nunc. Aenean pellentesque, nisl ut rhoncus
        convallis, velit sem ullamcorper sem, eu facilisis neque ante vitae
        diam. Fusce et ipsum non turpis varius pretium vitae quis purus.
      </div>

      <div className="o-spot__image-wrapper">
        <Image src={src} title={title} />
      </div>
    </div>
  );
};

Spot.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  contentComponent: PropTypes.any,
  className: PropTypes.string
};

export default Spot;
