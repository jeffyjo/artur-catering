import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Util/Layout";
import Sidebar from "../components/Sidebar/Sidebar";
import DishList from "../components/Dish/DishList";

import { graphql } from "gatsby";
import Plan from "../components/Plan/Plan";

class PlansIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { plans } = this.props;

    return (
      // <Layout>
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
              />
            </div>
          ))}
          <Plan />
          {/* <Cart cart={this.state.cart} total={this.state.cartTotal} /> */}
        </div>
      </section>
      // </Layout>
    );
  }
}

PlansIndex.propTypes = {
  plans: PropTypes.array
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
