export const SET_PRODUCTS_DATA = 'SET_PRODUCTS_DATA';
export const GET_PRODUCT_DATA_ERROR = 'GET_PRODUCT_DATA_ERROR';

const initialState = {
  isFetching: false,
  products: [],
  properties: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS_DATA:
      return {
        isFetching: false,
        ...action.payload,
      };
      break;
    case GET_PRODUCT_DATA_ERROR:
      // console.log(action.type);
      return {
        isFetching: false,
        ...action.payload
      };
    default:
      return state;
  }
}
