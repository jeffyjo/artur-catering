import React, { Component } from "react";
import PropTypes from "prop-types";

const Plan = class extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllDishes = this.displayAllDishes.bind(this);
    this.displayFirstDish = this.displayFirstDish.bind(this);
    this.goToCart = this.goToCart.bind(this);
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
    console.log(arr);
    if (arr === "undefined") return;

    if (arr) {
      return (
        <div>
          {arr.map((item, index) => (
            <div key={index}>
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      );
    }
  }

  goToCart() {
    this.props.addToCart(this.props);
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

        <div id="appetizers">
          <h3>Appetizers</h3>
          {this.displayAllDishes(appetizers)}
        </div>
        <div id="mains">
          <h3>Mains</h3>
          {this.displayAllDishes(mains)}
        </div>
        <div id="desserts">
          <h3>Desserts</h3>
          {this.displayAllDishes(desserts)}
        </div>
        <h2>{price} DKK</h2>
        <button onClick={this.goToCart}>Add to cart</button>
      </div>
    );
  }
};

Plan.propType = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  appetizers: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string
    })
  ),
  mains: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string
    })
  ),
  desserts: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string
    })
  ),
  drinks: PropTypes.array,
  addToCart: PropTypes.func.isRequired
};

export default Plan;
