import React, { useState } from 'react';
import './MobileNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Navbar/Sidebar/Sidebar';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    
      if (isSidebarOpen) {
          setSidebarOpen(false);
      }
      setIsOpen(!isOpen);
  };

  const itemCount = 0;

  return (
      <nav className="mobile-nav">
          <div className='logo-mobile'>
              Plants World
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
              <div className="cart" onClick={(e) => { 
                  e.stopPropagation(); // Prevent the click from bubbling up to the menu toggle
                  setSidebarOpen(true); 
              }}>
                  <FontAwesomeIcon icon={faBagShopping} size="lg" style={{ color: 'black' }} />
                  <span className='cart-count-mobile'>{itemCount}</span>
              </div>
              <span>{isOpen ? "✖" : "☰"}</span>
          </div>
          
          {isOpen && (
              <ul className="nav-links-mobile">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Plants</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          )}
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </nav>
  );
}

export default MobileNav;
