import React, { useState } from 'react';
import './PlantsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import plantsData from './plantsData'; 
import { Link } from 'react-router-dom';

function PlantsPageProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  
  const totalPages = Math.ceil(plantsData.length / itemsPerPage);

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  
  const currentItems = plantsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); 
  };

  return (
    <div  className='background'>
    <div className='plants-page-container'>
      {currentItems.map((product) => ( 
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className='plants-page-card'>
            <div className="plants-page-image-container">
              <img src={product.image} alt={product.name} className='plants-page-product-image' />
              <div className="plants-page-add-to-cart-icon">
                <FontAwesomeIcon icon={faBagShopping} size="1x" />
              </div>
            </div>
            <h1 className='plants-page-name'>{product.name}</h1>
            <h2 className='plants-page-description'>{product.description}</h2>
            <p className='plants-page-price'>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
    <div className="pagination">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => handlePageChange(index + 1)} // Handle page change
        disabled={currentPage === index + 1} // Disable the button for the current page
        className="pagination-button" // Add class for styling
      >
        {index + 1}
      </button>
    ))}
  </div>
  </div>
  );
}

export default PlantsPageProducts;
