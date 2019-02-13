import { SET_PRODUCTS_DATA } from '../reducers/productsReducer';

export const getProductData = (payload) => dispatch => {
  let payload = require('../data.json');
  dispatch({
    type: SET_PRODUCTS_DATA,
    payload,
  });
};