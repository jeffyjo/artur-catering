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
    this.setState(s => {
      return { cart: cart };
    });
    this.getTotal();
  }

  addTotal(val) {
    this.setState({ total: val });
  }

  getTotal() {
    const cart = getStorage();
    if (Array.isArray(cart)) {
      cart.forEach(element => {
        const amount = element["amount"];
        console.log(amount);
      });
    } else {
      // const carte = JSON.parse(cart);
      const amount = cart.amount;
      if (!cart.plan) {
        console.log(cart);
        return;
      }
      if (!cart.plan.price || !cart.plan) return;
      const price = cart.plan.price;
      const total = amount * price;
      this.setState(state => {
        return { total: total };
      });
    }
  }

  updateTotal() {
    this.getTotal();
    this.render();
  }

  render() {
    // this.getTotal();
    const cart = this.state.cart;
    const total = this.state.total;
    if (total >= 0 && (cart != undefined || cart === "")) {
      return (
        <section>
          {console.log(total)}
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
