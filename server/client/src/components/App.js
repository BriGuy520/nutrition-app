import React, { Component } from 'react';
import FoodSearch from './FoodSearch';
import FoodList from './FoodList';
import FoodProfile from './FoodProfile';
import nutrition from '../api/nutrition';

class App extends Component {

  state = { ndbno: null, selectedFood: null };

  onTermSubmit = async (term) => {
    const response = await nutrition.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ ndbno: response.data.item[0].nbdno })
  }


  render() {
    return (
      <div>
        <FoodSearch onFormSubmit={this.onTermSubmit} />
        <div className="grid">
          <div className="row">
            <div className="column">
              <FoodProfile />
            </div>
          </div>
          <div className="row">
            <FoodList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
