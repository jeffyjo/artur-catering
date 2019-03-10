import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const Cart = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello Cart</h1>
        {JSON.stringify(this.props.cart)}
      </div>
    );
  }
};

Cart.propTypes = {
  cart: PropTypes.array
};
export default Cart;
