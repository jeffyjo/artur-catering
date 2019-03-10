import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Util/Layout";
import Sidebar from "../components/Sidebar/Sidebar";
import DishList from "../components/Dish/DishList";

import { createGroupedArray } from "../utils/createGroupedArray";
import { graphql } from "gatsby";
import Cart from "../components/Cart/Cart";

class DishesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };

    this.UpdateCart = this.UpdateCart.bind(this);
  }

  UpdateCart(item) {
    const prevState = this.state.cart;
    console.log(item);
    console.log("before" + JSON.stringify(prevState));
    let newState;
    if (!prevState.includes(item)) {
      this.setState({ cart: [...prevState, item] });
    } else {
      this.setState(state => {
        const cart = state.cart.filter(dish => dish !== item);
        console.log(cart);
        return {
          cart
        };
      });
    }
    console.log(this.state.cart);
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
          <Cart cart={this.state.cart} />
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
