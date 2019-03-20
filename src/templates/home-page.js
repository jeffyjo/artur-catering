import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Util/Layout";
import Spot from "../components/Spot/Spot";

class HomeTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { spots } = this.props;

    return (
      <section>
        {console.log(spots)}
        {spots.map((spot, index) => (
          <div key={index}>
            <Spot title={spot.title} text={spot.text} />
          </div>
        ))}
      </section>
    );
  }
}

HomeTemplate.propTypes = {
  spots: PropTypes.array
};

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <HomeTemplate spots={post.frontmatter.spots} />
    </Layout>
  );
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      html
      frontmatter {
        spots {
          title
          text
        }
      }
    }
  }
`;
