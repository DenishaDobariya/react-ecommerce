// ProductSearchComponent.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../redux/actions/cartActions';
import { fetchProducts } from '../redux/actions/productsActions';

const ProductSearchComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const searchResults = useSelector(state => state.cart.searchResults);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on component mount
  }, [dispatch]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    dispatch(searchProducts(query));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearchChange}
      />
      <div>
        {searchResults.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearchComponent;
