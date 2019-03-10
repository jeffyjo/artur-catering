import React, { Component } from "react";
import PropTypes from "prop-types";

const Dish = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      active: false
    };

    this.updateDish = this.updateDish.bind(this);
  }

  updateDish() {
    this.setState({
      active: !this.state.active
    });
    this.props.update(this.props.name);
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.price}</h2>
        <button type="button">{!this.state.active ? "Add" : "Remove"}</button>
      </div>
    );
  }
};

Dish.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  active: PropTypes.bool,
  type: PropTypes.object,
  update: PropTypes.func,
  value: PropTypes.array
};

export default Dish;
