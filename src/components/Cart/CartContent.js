import React, { Component } from "react";

import { getStorage } from "../Util/util";

class CartContent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: ""
    };
  }

  componentWillMount() {
    this.setState({ cart: "" });
  }

  componentDidMount() {
    this.setState({ cart: getStorage() });
  }

  render() {
    const { cart } = this.state;
    if (cart === "") return <div />;
    if (Array.isArray(this.state.cart)) {
      return (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <h1>{item.plan.name}</h1>
              <h2>
                {item.plan.price} DKK x {item.amount}
              </h2>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h1>{cart.plan.name}</h1>
          <h2>
            {cart.plan.price} DKK x {cart.amount}
          </h2>
        </div>
      );
    }
  }
}

export default CartContent;
