import React from "react";
import PropTypes from "prop-types";

const Cart = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Hello Cart</h1>
        {this.props.cart.map((item, index) => (
          <div key={index}>
            <h1>{item.price}</h1>
          </div>
        ))}
        <div>
          <h1>Total: {this.props.total} </h1>
        </div>

        {JSON.stringify(this.props.cart)}
      </div>
    );
  }
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number
};

export default Cart;
