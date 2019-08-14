import React from "react";
import PropTypes from "prop-types";
import CartContent from "./CartContent";
import { getStorage } from "../Util/util";
// import * as jspdf from "jspdf";

const Cart = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cart: ""
    };

    // this.printDocument = this.printDocument.bind(this);
    this.addTotal = this.addTotal.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  componentDidMount() {
    const cart = getStorage();
    this.setState({ cart: cart });
  }

  addTotal(val) {
    this.setState({ total: val });
  }

  getTotal() {
    const preCart = this.state.cart;
    if (preCart == undefined) return;
    const cart = JSON.parse(preCart);
    if (Array.isArray(cart)) {
      cart.forEach(element => {
        const amount = element["amount"];
        console.log(amount);
      });
    } else {
      const amount = cart["amount"];
      const price = cart["plan"].price;
      const total = amount * price;
      this.setState(state => {
        return { total: total };
      });
    }
  }
  componentDidMount() {
    this.getTotal();
  }

  updateTotal() {
    this.getTotal();
    this.render();
  }

  render() {
    const cart = this.state.cart;
    const total = this.state.total;
    if (total >= 0 && (cart != undefined || cart === "")) {
      return (
        <section>
          <div>
            <div id="cartdownload">
              <CartContent
                addTotal={this.addTotal}
                updateTotal={this.updateTotal}
              />
              <div>
                <h3>
                  Total <br />
                  {total} DKK
                </h3>
              </div>
            </div>
            <div>
              <button className="button">Print</button>
            </div>
          </div>
        </section>
      );
    } else {
      return <p>The cart is empty</p>;
    }
  }
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number
};

export default Cart;
