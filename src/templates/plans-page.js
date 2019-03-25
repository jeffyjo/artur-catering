import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Util/Layout";
import Sidebar from "../components/Sidebar/Sidebar";

import { graphql } from "gatsby";
import Plan from "../components/Plan/Plan";

class PlansIndex extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(pr) {
    console.log("hello");
  }

  render() {
    const { plans } = this.props;

    return (
      <section className="u-section">
        <div className="columns is-desktop">
          <Sidebar className="column is-one-quarter" />
          {plans.map((plan, index) => (
            <div key={index}>
              <Plan
                name={plan.name}
                price={plan.price}
                appetizers={plan.appetizers}
                mains={plan.mains}
                desserts={plan.desserts}
                addToCart={this.addToCart}
              />
            </div>
          ))}
          {/* <Cart cart={this.state.cart} total={this.state.cartTotal} /> */}
        </div>
      </section>
    );
  }
}

PlansIndex.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string,
      price: PropTypes.number,
      appetizers: PropTypes.array,
      mains: PropTypes.array,
      desserts: PropTypes.array
    })
  )
};

const PlansPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PlansIndex plans={post.frontmatter.plans} />
    </Layout>
  );
};

export default PlansPage;

// eslint-disable-next-line no-undef
export const plansPageQuery = graphql`
  query PlansPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        plans {
          name
          price
          appetizers {
            name
          }
          mains {
            name
          }
          desserts {
            name
          }
        }
      }
    }
  }
`;
