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
      // active: []
    };
    // this.updateDish = this.updateDish.bind(this);
  }

  // updateDish(name) {
  //   const prevState = this.state.active;
  //   console.log("before" + JSON.stringify(prevState));
  //   let newState;
  //   if (!prevState.includes(name)) {
  //     this.setState({ active: [...prevState, name] });
  //   } else {
  //     this.setState(state => {
  //       const active = state.active.filter(item => item != name);
  //       return {
  //         active
  //       };
  //     });
  //   }
  //   JSON.stringify(newState);
  // }

  render() {
    const { dishes } = this.props;

    return (
      <div>
        <form>
          {dishes.map((dish, index) => (
            <div key={index}>
              {/* <Dish
                name={dish.name}
                price={dish.price}
                update={this.props.updateCart}
                value={this.state.active}
              /> */}
              <div>
                <h1>{dish.name}</h1>
                <h2>{dish.price}</h2>
                <button
                  type="button"
                  onClick={() => this.props.updateCart(dish.name)}
                >
                  {this.props.cart.includes(this.props.name) ? "Remove" : "Add"}
                </button>
              </div>
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
