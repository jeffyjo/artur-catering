import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Plan = class extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <h1>Plan</h1>
      </div>
    )
  }


}

Plan.propType = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  appetizers: PropTypes.array,
  mains: PropTypes.array,
  desserts: PropTypes.array,
  drinks: PropTypes.array
}
