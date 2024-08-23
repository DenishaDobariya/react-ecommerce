export const selectCartItems = (state) => state.cart.cart;
export const selectFavoriteItems = (state) => state.cart.favorites;

// const searchResults = useSelector(state => state.products.searchResults) || [];
  // const products = searchResults.length > 0 ? searchResults : useSelector(state => state.products.products) || [];