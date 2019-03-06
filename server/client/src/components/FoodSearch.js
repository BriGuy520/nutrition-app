import React, { Component } from 'react';
import FoodList from './FoodList';

class FoodSearch extends Component {
  
  state = { name: "pineapple" };

  handleInputChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.name);
  }

  render(){
    return (
      <div className="container">
        <div className="input-field col s12">
          <form onSubmit={this.handleSubmit}>
            <input 
              id="autocomplete-input" 
              type="text" 
              className="autocomplete" 
              placeholder="What are you jonesing for...?"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </form>
        </div>
        <div>
          <FoodList />
        </div>
      </div>
    );
  }

}

export default FoodSearch;