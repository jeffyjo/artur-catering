import React, { Component } from "react";
import PropTypes from "prop-types";

const Plan = class extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllDishes = this.displayAllDishes.bind(this);
    this.displayFirstDish = this.displayFirstDish.bind(this);
  }

  displayFirstDish(arr) {
    console.log(arr);
    const firstElement = arr[0];
    if (firstElement === undefined) return;

    if (firstElement.some()) {
      console.log(firstElement.name);
      return (
        <div onClick={() => this.displayAllDishes(arr)}>
          <p>{firstElement.name}</p>
        </div>
      );
    }
  }

  displayAllDishes(arr) {
    if (arr === undefined) return;

    if (arr.some()) {
      return (
        <div>
          {arr.map((item, index) => (
            <div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    const {
      name,
      price,
      appetizers,
      mains,
      desserts,
      drinks,
      addToCart
    } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <div id="appetizers">
          <h3>Appetizers</h3>
          {this.displayFirstDish(appetizers)}
        </div>
        <div id="mains">
          <h3>Mains</h3>
          {this.displayFirstDish(mains)}
        </div>
        <div id="desserts">
          <h3>Desserts</h3>
          {this.displayFirstDish(desserts)}
        </div>
      </div>
    );
  }
};

Plan.propType = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  appetizers: PropTypes.arrayOf(PropTypes.object),
  mains: PropTypes.arrayOf(PropTypes.object),
  desserts: PropTypes.arrayOf(PropTypes.object),
  drinks: PropTypes.array,
  addToCart: PropTypes.func
};

export default Plan;
