import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById, updateProduct } from '../redux/actions/addProductActions';
import UpperHeader from './UpperHeader';

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector(state => state.addProduct.products.find(p => p.id === id));
  const loading = useSelector(state => state.addProduct.loading);
  const error = useSelector(state => state.addProduct.error);
  
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    discount: '',
    category: '',
    stock: ''
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(''); // State for file name

  useEffect(() => {
    if (!product) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id, product]);

  useEffect(() => {
    if (product) {
      setData({
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        category: product.category,
        stock: product.stock
      });
    }
  }, [product]);

  const handleFile = (e) => {
    const fl = e.target.files[0];
    setFile(fl);
    setFileName(fl.name); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(id, data, file));
    navigate('/product');
  };

  return (
    <div className="edit-product container">
      <div><UpperHeader /></div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="row justify-content-center p-4 m-0 text-white">
        <div className="col-12 mb-4">
          <h3 className="text-white">Edit Product</h3>
        </div>
        <div className="col-12 mb-3">
          <input type="file" name="file" onChange={handleFile} className="form-control" />
          {fileName && <p className="text-white mt-2">Selected file: {fileName}</p>} 
        </div>
        <div className="col-12 mb-3">
          <input type="text" name="name" placeholder="Product Name" value={data.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-12 mb-3">
          <input type="text" name="description" placeholder="Product Description" value={data.description} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-12 mb-3">
          <input type="number" name="price" placeholder="Product Price" value={data.price} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-12 mb-3">
          <input type="number" name="discount" placeholder="Product Discount" value={data.discount} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-12 mb-3">
          <input type="text" name="category" placeholder="Product Category" value={data.category} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-12 mb-3">
          <input type="number" name="stock" placeholder="Product Stock" value={data.stock} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-12 mb-3">
          <button type="submit" className="btn btn-primary w-100">Edit Product</button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
