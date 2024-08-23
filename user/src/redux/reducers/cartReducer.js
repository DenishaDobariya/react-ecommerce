import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/actionTypes'

// Initialize state from localStorage
const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  searchResults: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCartAdd = [...state.cart, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCartAdd));
      return {
        ...state,
        cart: updatedCartAdd,
      };
    case REMOVE_FROM_CART:
      const updatedCartRemove = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCartRemove));
      return {
        ...state,
        cart: updatedCartRemove,
      };
    case ADD_TO_FAVORITES:
      const updatedFavoritesAdd = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedFavoritesAdd));
      return {
        ...state,
        favorites: updatedFavoritesAdd,
      };
    case REMOVE_FROM_FAVORITES:
      const updatedFavoritesRemove = state.favorites.filter(item => item.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(updatedFavoritesRemove));
      return {
        ...state,
        favorites: updatedFavoritesRemove,
      };
    default:
      return state;
  }
};

export default cartReducer;
