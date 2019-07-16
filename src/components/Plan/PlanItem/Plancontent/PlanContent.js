import React from "react";
import PropTypes from "prop-types";

import "./Plancontent.scss";

// TODO: Should be dynamic content
const PlanContent = ({ header, description, allergens, className }) => (
  <div className={`m-plan-content ${className ? className : ""}`}>
    <h3 className="m-plan-content__heading is-size-4">{header}</h3>
    <p className="m-plan-content__description">{description}</p>
    <ul className="m-plan-content__list">
      <li className="m-plan-content__list-item">{allergens}</li>
      {/* {allergens.map((allergen, index) => (
        <li className="m-plan-content__list-item" key={index}>
          {allergen}
        </li>
      ))} */}
    </ul>
  </div>
);

PlanContent.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  allergens: PropTypes.string,
  className: PropTypes.string
};

export default PlanContent;
