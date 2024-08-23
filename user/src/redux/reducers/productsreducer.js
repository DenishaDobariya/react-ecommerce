// productsReducer.js
import { FETCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS } from '../actions/actionTypes';

const initialState = {
  products: [],
  searchResults: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        searchResults: action.payload, // Initialize search results
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchResults: state.products.filter(product =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
