// productsActions.js
import { FETCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS } from './actionTypes';

export const fetchProducts = () => async dispatch => {
  try {
    const response = await fetch('api/products');
    const products = await response.json();
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    console.error('Failed to fetch products', error);
  }
};

export const searchProducts = (query) => ({
  type: SEARCH_PRODUCTS,
  payload: query,
});
