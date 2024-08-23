// src/components/Orders.jsx
import React, { useEffect } from 'react';
import UpperHeader from './UpperHeader';
import { useSelector} from 'react-redux';

function Order() {
  const orders = useSelector((state) => state.orders?.orders || []);

  return (
    <div>
    <UpperHeader/>
      <h2 className="text-dark text-center my-4">My Orders</h2>
      <div className="row">
        {orders.length > 0 ? (  
          orders.map((order, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm rounded">
                <img
                  src={order.imageUrl}
                  className="card-img-top"
                  alt={order.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{order.name || 'N/A'}</h5>
                  <p className="card-text">
                    {order.description || 'No description available'}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Price: ₹{order.price || 'N/A'}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Category: {order.category || 'N/A'}</small>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No orders placed yet.</p>
        )}
      </div>
    </div>
  );
}

export default Order;
