import { combineReducers } from 'redux';
import foodsReducer from './foodsReducer';

export default combineReducers({
  foods: foodsReducer
})