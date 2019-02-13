import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

export default combineReducers({
  productFields: productsReducer,
});