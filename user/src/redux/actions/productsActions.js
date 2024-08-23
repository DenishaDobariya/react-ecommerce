// productsActions.js
import { FETCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS, CREATE_ORDER } from './actionTypes';

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

export const createOrder = (product) => (dispatch, getState) => {
  const order = {
    id: new Date().getTime(), 
    ...product,
  };

  dispatch({
    type: 'CREATE_ORDER',
    payload: order,
  });

  const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
  const updatedOrders = [...existingOrders, order];
  localStorage.setItem('orders', JSON.stringify(updatedOrders));
};
