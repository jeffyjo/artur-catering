import React from "react";
import PropTypes from "prop-types";
import * as jspdf from "jspdf";

const Cart = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    this.printDocument = this.printDocument.bind(this);
  }

  printDocument() {
    const pdf = new jspdf();
    pdf.text("Hello world", 1, 1);
    pdf.save("download.pdf");
  }

  render() {
    const { total, cart } = this.props;

    return (
      <div>
        <div id="cartdownload">
          <h1>Hello Cart</h1>
          {cart.map((item, index) => (
            <div key={index}>
              <h1>{item.name}</h1>
              <h2>DKK {item.price}</h2>
            </div>
          ))}
          <div>
            <h1>Total DKK: {total} </h1>
          </div>

          {/* {JSON.stringify(cart)} */}
        </div>
        <div>
          <button onClick={this.printDocument}>Print</button>
        </div>
      </div>
    );
  }
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number
};

export default Cart;
