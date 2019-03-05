import axios from 'axios';
import { FETCH_FOOD } from './types';


export const fetchFood = () => async dispatch => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

  dispatch({ type: FETCH_FOOD, payload: response.data });
}