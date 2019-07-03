import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/Util/Layout";
import Plan from "../components/Plan/Plan";

import { graphql } from "gatsby";

export const PlansPageTemplate = ({ plans }) => {
  console.log(plans);
  return (
    <section className="section">
      <div className="is-desktop">
        <div className="container">
          <h1 className="title u-align--center">Plans</h1>
          {plans.map((plan, index) => {
            const { dishes, name, price } = plan.Plan;
            return (
              <Plan name={name} price={price} dishes={dishes} key={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

PlansPageTemplate.propTypes = {
  plans: PropTypes.array
};

const PlansPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <PlansPageTemplate plans={post.frontmatter.plans} />
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
          Plan {
            dishes {
              allergens
              name
              description
              image {
                src
                alt
              }
            }
            name
            price
          }
        }
      }
    }
  }
`;
