import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Checkout() {
  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter your address" />
        </div>
      </form>
    </div>
  );
}

export default Checkout;
