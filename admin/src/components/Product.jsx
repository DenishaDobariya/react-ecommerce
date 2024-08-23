import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../redux/actions/addProductActions';
import { Link, useNavigate } from 'react-router-dom';
import UpperHeader from './UpperHeader';

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.addProduct.products);
  const loading = useSelector(state => state.addProduct.loading);
  const error = useSelector(state => state.addProduct.error);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleEdit = (productId) => {
    navigate(`/edit/${productId}`);
  };

  return (
    <div className="product-list vh-100">
      <UpperHeader />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="container">
        <div className="row">
          <div className="col-12 text-dark">
            <h3 className='text-white'>Product List</h3>
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Category</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Image</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.discount}</td>
                    <td>{product.category}</td>
                    <td>{product.stock}</td>
                    <td>
                      <img src={product.imageUrl} alt={product.name} style={{ width: '50px', height: '50px' }} />
                    </td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2 py-0" onClick={() => handleEdit(product.id)}>Edit</button>
                      <button className="btn btn-danger btn-sm py-0" onClick={() => handleDelete(product.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
