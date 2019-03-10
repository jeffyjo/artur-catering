import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Util/Layout";
import Sidebar from "../components/Sidebar/Sidebar";
import DishList from "../components/Dish/DishList";

import { graphql } from "gatsby";
import Cart from "../components/Cart/Cart";

class DishesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      cartTotal: 0
    };

    this.UpdateCart = this.UpdateCart.bind(this);
  }

  UpdateCart(item) {
    const prevState = this.state.cart;
    let empty = prevState.filter(dish => dish.name === item[0].name);
    // let cartTotal = this.state.cartTotal;

    if (empty === undefined || empty.length === 0) {
      this.setState({
        cart: [...prevState, ...item],
        cartTotal: this.state.cartTotal + parseFloat(item[0].price)
      });
    } else {
      const cart = this.state.cart.filter(dish => dish.name !== item[0].name);
      this.setState({
        cart,
        cartTotal: this.state.cartTotal - parseFloat(item[0].price)
      });
    }
    console.log(this.state.cart);
    console.log(this.state.cartTotal);
  }

  render() {
    const { dishes } = this.props;

    return (
      // <Layout>
      <section className="u-section">
        <div className="columns is-desktop">
          <Sidebar className="column is-one-quarter" />
          <DishList
            dishes={dishes}
            updateCart={this.UpdateCart}
            cart={this.state.cart}
          />
          <Cart cart={this.state.cart} total={this.state.cartTotal} />
        </div>
      </section>
      // </Layout>
    );
  }
}

DishesIndex.propTypes = {
  dishes: PropTypes.array
};

const DishPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DishesIndex dishes={post.frontmatter.dishes} />
    </Layout>
  );
};

export default DishPage;

// eslint-disable-next-line no-undef
export const dishesPageQuery = graphql`
  query DishPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        dishes {
          name
          price
          active
          type
        }
      }
    }
  }
`;
