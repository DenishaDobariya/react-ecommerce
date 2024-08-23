// productsReducer.js
import { FETCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS, CREATE_ORDER } from '../actions/actionTypes';

const initialState = {
  products: [],
  searchResults: [],
  orders: JSON.parse(localStorage.getItem('orders')) || [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        searchResults: action.payload, 
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchResults: state.products.filter(product =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export default productsReducer;

