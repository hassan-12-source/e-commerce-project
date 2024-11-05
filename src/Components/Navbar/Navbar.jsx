import React, { useState } from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar/Sidebar';
import { Link } from 'react-router-dom';

function Navbar({ cartItems, onCartIconClick }) {
    const itemCount = cartItems.length;
    
    const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
      <nav className='navbar'>
          <div className='logo'>
              Plants World
          </div>

          <ul className='nav-links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/plants">Plants</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li className='cart'>
                  <a href="#" onClick={() => setSidebarOpen(true)}>
                  <FontAwesomeIcon icon={faBagShopping} size="lg" />
                  <span className='cart-count'>{itemCount}</span>
              </a>
              </li>
          </ul>
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </nav>
  )
}

export default Navbar;