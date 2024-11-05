import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Sidebar({ isOpen, onClose, cartItems = [], onRemoveItem }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h1>Shopping Cart</h1>
        <button className="close-btn" onClick={onClose}><FontAwesomeIcon icon={faTimes} color='black' /></button>
      </div>

      <div className='header-line'></div>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2 className="cart-item-name">{item.name}</h2>
              <p className="cart-item-price">${item.price}</p>
            </div>
            <div className='remove' onClick={() => onRemoveItem(index)}>
              <FontAwesomeIcon icon={faTrash} color="red" />
            </div>
          </div>
        ))}
      </div>
      <div className='check-out-btn'>
        <button><Link to="/checkout">Check-out</Link></button>
      </div>
    </div>
  );
}

export default Sidebar;