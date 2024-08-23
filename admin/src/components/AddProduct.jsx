import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/addProductActions';
import UpperHeader from './UpperHeader';

function AddProduct() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    discount: '',
    category: '',
    stock: ''
  });

  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleFile = (e) => {
    const fl = e.target.files[0];
    setFile(fl);
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

    if (file && data.name && data.description && data.price && data.discount && data.category && data.stock) {
      dispatch(addProduct(data, file));
      setData({
        id: '',
        name: '',
        description: '',
        price: '',
        discount: '',
        category: '',
        stock: ''
      });
      setFile(null);
      fileInputRef.current.value = '';
    } else {
      alert('All fields are required');
    }
  };

  return (
    <div className="addproduct vh-100">
      <UpperHeader />
      <form onSubmit={handleSubmit} className="row justify-content-center p-4 m-0 text-white">
        <div className="col-12 mb-4">
          <h3 className="text-white">Add Product</h3>
        </div>
        <div className="col-12 mb-3">
          <input type="file" name="file" onChange={handleFile} ref={fileInputRef} className="form-control" />
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
          <button type="submit" className="btn btn-primary w-100">Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
