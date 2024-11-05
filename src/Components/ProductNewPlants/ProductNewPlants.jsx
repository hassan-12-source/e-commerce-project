import React from 'react';
import './ProductNewPlants.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import product from './data';
import { Link } from 'react-router-dom';


function ProductNewPlants({ onAddToCart }) {
  return (
    <div className='new-product-container'>
      {product.map((product) => (
        <div className='new-plants-card' key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div className="image-container">
              <img src={product.image} alt={product.name} className='product-image' />
              <div 
                className="add-to-cart-icon" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  e.stopPropagation(); 
                  onAddToCart(product); 
                }}
              >
                <FontAwesomeIcon icon={faBagShopping} size="1x" />
              </div>
            </div>
          </Link>
          <h1 className='name'>{product.name}</h1>
          <h2 className='description'>{product.description}</h2>
          <p className='price'>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductNewPlants;