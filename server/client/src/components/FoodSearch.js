import React, { Component } from 'react';


class FoodSearch extends Component {
  
  state = { name: "" };

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
      </div>
    );
  }

}

export default FoodSearch;