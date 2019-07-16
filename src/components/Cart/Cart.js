import React from "react";
import PropTypes from "prop-types";
import CartContent from "./CartContent";
// import * as jspdf from "jspdf";

const Cart = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };

    // this.printDocument = this.printDocument.bind(this);
    this.addTotal = this.addTotal.bind(this);
  }

  addTotal(val) {
    this.setState({ total: val });
  }

  render() {
    const { total, cart } = this.props;
    console.log('cart', cart)
    console.log('total', total)

    return (
      <section>
        {total && cart &&
          <div>
            <div id="cartdownload">
              <CartContent addTotal={this.addTotal} />
              <div>
                <h3>
                  Total <br />
                  {total} DKK
                </h3>
              </div>

              {/* {JSON.stringify(cart)} */}
            </div>
            <div>
              <button className='button'>Print</button>
            </div>
          </div>
        }
        {!total && !cart &&
          <p>The cart is empty</p>
        }
      </section>
    );
  }
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
};

export default Cart;
