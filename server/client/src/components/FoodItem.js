import React, { Component } from 'react';
import FoodProfile from './FoodProfile'

class FoodItem extends Component {

  handleClick = (food) => {

    console.log(food);
    return <FoodProfile foodReport={food} />
  };

  render(){

    const { food } = this.props;

    return (
      <div className="collection-item"> 
        <button onClick={() => this.handleClick(food)}>{food.name}</button>
      </div> 
    );
  } 
}

export default FoodItem;