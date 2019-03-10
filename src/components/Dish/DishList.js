import React, { Component } from "react";
import PropTypes from "prop-types";
import Dish from "./Dish";

const FilterEnum = {
  NONE: 0,
  FORRET: 1,
  HOVEDRET: 2,
  DESSERT: 3,
  DRINKS: 4
};

const DishList = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: FilterEnum.NONE
    };
  }

  render() {
    const { dishes } = this.props;

    return (
      <div>
        <form>
          {dishes.map((dish, index) => (
            <div key={index}>
              <Dish
                name={dish.name}
                price={dish.price}
                update={this.props.updateCart}
                value={this.props.cart}
              />
            </div>
          ))}
          {JSON.stringify(this.state.active)}
        </form>
      </div>
    );
  }
};

DishList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.object),
  updateCart: PropTypes.func,
  cart: PropTypes.array
};

export default DishList;
