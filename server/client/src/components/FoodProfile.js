import React, { Component } from 'react';
import nutrition from '../api/nutrition';

class FoodProfile extends Component {

  state = {
    food: []
  }

async componentDidMount(){
  const response = await nutrition.get('/V2/reports/', {
    params: {
      ndbno: "11009"
    }
  });

  this.setState({ food: response.data.foods });
}
  render(){

    const { food } = this.state;
    console.log(food);

    return (
      <div>
        <h1>Aritichoke</h1>
      </div>
    );
  }
}

export default FoodProfile;