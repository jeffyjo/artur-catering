import React, { Component } from "react";

import { getStorage, updateStorage, removeFromCartByName } from "../Util/util";

class CartContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: ""
    };

    this.handleItemChange = this.handleItemChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentWillMount() {
    this.setState({ cart: "" });
  }

  componentDidMount() {
    this.setState({ cart: getStorage() });
  }

  handleItemChange(e) {
    const val = e.target.value;
    if (val == undefined || val < e.target.min || val > e.target.max) return;
    const { cart } = this.state;
    const newCart = (cart.amount = val);
    const name = e.target.id;
    //update local storage
    this.setState({ state: newCart });
    updateStorage(name, val);

    this.props.updateTotal();
  }
  removeItem(name) {
    removeFromCartByName(name);
    this.props.updateTotal();
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
            {console.log(cart.amount)}
            {cart.plan.price} DKK x{" "}
            <input
              type="number"
              id={cart.plan.name}
              value={parseInt(cart.amount)}
              min={1}
              max={300}
              onChange={this.handleItemChange}
            />
          </p>
          {/* <button type="button" onClick={this.removeItem(cart.plan.name)}>
            &times
          </button> */}
        </div>
      );
    }
  }
}

export default CartContent;
