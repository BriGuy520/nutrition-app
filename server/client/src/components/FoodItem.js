import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFood } from '../actions';

class FoodItem extends Component {

  componentDidMount(){
    this.props.fetchFood();
  }



  render(){

    const { foods } = this.props;


    return (
      <div> 
        food item.
      </div>
     
      
    );
  };
}


const mapStateToProps = ({ foods }) => {
  console.log(foods);

  return { foods };
}


export default connect(mapStateToProps, { fetchFood })(FoodItem);