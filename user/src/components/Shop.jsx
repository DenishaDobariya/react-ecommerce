import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../../admin/src/redux/actions/addProductActions';
import { addToCart, addToFavorites, createOrder } from '../redux/actions/cartActions';

function Shop() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  const products = useSelector(state => state.products.products) || [];

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [dispatch, category]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log('Adding to cart:', product);
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
    console.log('Adding to favorites:', product);
  };

  const handleBuy = (product) => {
    dispatch(createOrder(product));
    console.log('Buying product:', product);
  };

  const filteredProducts = category ? products.filter(product => product.category.toLowerCase() === category.toLowerCase()) : products;

  return (
    <div className="container pt-4">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      <h2 className="text-dark text-center mb-4">Product List</h2>
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group">
          <a href="/shop" className="btn btn-primary mx-1">All</a>
          <a href="/shop/women" className="btn btn-primary mx-1">Women</a>
          <a href="/shop/men" className="btn btn-primary mx-1">Men</a>
          <a href="/shop/kids" className="btn btn-primary mx-1">Kids</a>
        </div>
      </div>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm rounded">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name || 'N/A'}</h5>
                  <p className="card-text flex-grow-1">
                    {product.description || 'No description available'}
                  </p>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Price: ₹{product.price || 'N/A'}</span>
                    <span className="text-success">Discount: {product.discount || 'N/A'}%</span>
                  </div>
                  <p className="card-text">
                    <small className="text-muted">Stock: {product.stock || 'N/A'}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Category: {product.category || 'N/A'}</small>
                  </p>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      <i className="bi bi-cart"></i> Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleAddToFavorites(product)}
                    >
                      <i className="bi bi-heart"></i> Favorite
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleBuy(product)}
                    >
                      <i className="bi bi-cart-check"></i> Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center">No products available.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
