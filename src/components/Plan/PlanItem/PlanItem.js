import React from "react";
import PropTypes from "prop-types";

import Image from "../../Image/Image";
import PlanContent from "./Plancontent/PlanContent";

import "./PlanItem.scss";

// TODO: Should be using dynamic content
const PlanItem = ({ src, alt, name, description, allergens }) => (
  <li className="o-plan-item">
    <div className="o-plan-item__inner">
      <Image className="o-plan-item__inner-image" src={src} title={alt} />
      <PlanContent
        className="o-plan-item__inner-content"
        header={name}
        description={description}
        allergens={allergens}
      />
    </div>
  </li>
);

PlanItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  allergens: PropTypes.array
};

export default PlanItem;
