import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Util/Layout";

class CartIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      items: []
    };
  }

  render() {
    return (
      <section>
        <h1>Hello</h1>
      </section>
    );
  }
}

CartIndex.propTypes = {
  items: PropTypes.string
};
