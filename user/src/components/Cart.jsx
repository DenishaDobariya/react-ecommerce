import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions'; // Action for removing items from the cart

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>1</td> 
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
