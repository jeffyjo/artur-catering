import React, { Component } from "react";
import Layout from "../../components/Util/Layout";

import CartForm from "../../components/Cart/CartForm/CartForm";
import Cart from "../../components/Cart/Cart";
import { getStorage } from "../../components/Util/util";

class Form extends Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Your details</h1>
              <Cart cart={getStorage()} />
              <CartForm />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Form;
