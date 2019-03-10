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
      cart: []
    };

    this.UpdateCart = this.UpdateCart.bind(this);
  }

  UpdateCart(item) {
    const prevState = this.state.cart;
    console.log(item);
    let empty = prevState.filter(dish => dish.name !== item.name);
    console.log("Empty: " + empty);
    // console.log("1: " + )
    if (empty === undefined || empty.length == 0) {
      this.setState({ cart: [...prevState, ...item] });
    } else {
      const cart = this.state.cart.filter(dish => {
        console.log("dish: " + dish.name + " item: " + item.name);

        return dish.name !== item.name;
      });
      console.log("not correct: " + cart);
      this.setState({ cart });
    }
    // console.log("empty: " + empty);
    // if (!prevState.includes(item)) {
    //   this.setState({ cart: [...prevState, ...item] });
    // } else {
    //   console.log("not correct: ");

    //   const cart = this.state.cart.filter(dish => {
    //     console.log("dish: " + dish + " item: " + item);
    //     return dish.name !== item.name;
    //   });
    //   this.setState({ cart });
    // }
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
