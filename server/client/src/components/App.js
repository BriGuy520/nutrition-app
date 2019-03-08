import React, { Component } from 'react';
import FoodSearch from './FoodSearch';
import FoodList from './FoodList';
import FoodProfile from './FoodProfile';
import nutrition from '../api/nutrition';

class App extends Component {

  state = { foods: [] };

  componentDidMount(){
    this.onTermSubmit('');
  }

  onTermSubmit = async (term) => {
    const response = await nutrition.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ foods: response.data.list.item })
  }


  render(){

    return (
      <div>
        <FoodSearch onFormSubmit={this.onTermSubmit} />
        <div className="row">
          <FoodList foods={this.state.foods} />
        </div>
        <div className="grid">
          <div className="row">
            <div className="column">
              <FoodProfile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
