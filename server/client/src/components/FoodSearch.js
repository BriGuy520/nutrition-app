import React, { Component } from 'react';
import FoodList from './FoodList';

class FoodSearch extends Component {

  render(){
    return (
      <div>
        <div className="input-field col s12">
          <input id="search" type="text" className="validate" placeholder="What are you jonesing for...?"/>
        </div>
        <div>
          <FoodList />
        </div>
      </div>
    );
  }

}

export default FoodSearch;