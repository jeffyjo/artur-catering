import React, { Component } from "react";

import { getStorage } from "../Util/util";

class CartContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: "",
    };

    this.handleItemChange = this.handleItemChange.bind(this);
  }

  componentWillMount() {
    this.setState({ cart: "" });
  }

  componentDidMount() {
    this.setState({ cart: getStorage() });
  }

  handleItemChange(e) {
    const val = e.target.value;

    if (val > 0) {
    }
  }

  render() {
    const { cart } = this.state;
    if (cart === "") return <div />;
    if (Array.isArray(this.state.cart)) {
      return (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.plan.name}</h3>
              <p>
                {item.plan.price} DKK x {item.amount}
              </p>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h3>{cart.plan.name}</h3>
          <p>
            {cart.plan.price} DKK x {cart.amount}
          </p>
        </div>
      );
    }
  }
}

export default CartContent;
