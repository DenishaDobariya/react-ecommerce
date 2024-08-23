import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/actions/cartActions'; // Action for removing items from favorites

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(state => state.cart.favorites);

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Favorites</h2>
      {favoriteItems.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {favoriteItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromFavorites(item.id)}
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

export default Favorites;
