import React, { Component } from "react";
import PropTypes from "prop-types";

import PlanItem from "./PlanItem/PlanItem";

import "./Plan.scss";
import { setStorage, findInStorage, removeFromStorage } from "../Util/util";

class Plan extends Component {
  super(props) {
    this.super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(plan) {
    const cartItem = { amount: 1, plan: plan };
    // console.log(findInStorage(plan.name));
    var res = findInStorage(plan.name);
    if (res) {
      removeFromStorage(cartItem);
    } else {
      setStorage(cartItem);
    }
  }

  render() {
    const { dishes, name, price } = this.props;
    return (
      <div className="o-plan">
        <h2 className="is-size-3 u-align--center">{name}</h2>
        <hr />

        {/* Should be looped and dynamic  */}
        <ul>
          {dishes.map((dish, index) => (
            <PlanItem
              src={dish.image.src}
              alt={dish.image.alt}
              header={dish.name}
              description={dish.description}
              allergens={dish.allergens}
              key={index}
            />
          ))}
        </ul>
        <h3>{price} DKK</h3>
        <button onClick={() => this.addToCart(this.props)}>
          {findInStorage(name) ? "Remove From Cart" : "Add to Cart"}
        </button>
      </div>
    );
  }
}

// const Plan = ({ name, price, dishes }) => (
//   <div className="o-plan">
//     <h2 className="is-size-3 u-align--center">{name}</h2>
//     <hr />

//     {/* Should be looped and dynamic  */}
//     <ul>
//       {dishes.map((dish, index) => (
//         <PlanItem
//           src={dish.image.src}
//           alt={dish.image.alt}
//           header={dish.name}
//           description={dish.description}
//           allergens={dish.allergens}
//           key={index}
//         />
//       ))}
//     </ul>
//     <h3>{price} DKK</h3>
//     <button>Add to Cart</button>
//   </div>
// );

Plan.propTypes = {
  name: PropTypes.string,
  dishes: PropTypes.array,
  price: PropTypes.number
};

export default Plan;
