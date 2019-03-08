import React from 'react';
import FoodItem from './FoodItem';


const FoodList = ({ foods }) => {

  const foodList = foods.map(food => {
    return <FoodItem key={food.ndbno} food={food} />
  });

  return (
    <div className="collection">
      {foodList}
    </div>
  );
}

export default FoodList;