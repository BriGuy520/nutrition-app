import { FETCH_FOOD } from '../actions/types';

export default function(state = null, action){

  switch(action.type){
    case FETCH_FOOD: 
      return action.payload || false;
    default:
      return state;
  }
}