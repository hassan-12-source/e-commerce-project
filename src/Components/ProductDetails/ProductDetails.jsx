import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productDetails from './data'; 
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const product = productDetails.find(prod => prod.id === parseInt(id));

  const [mainImage, setMainImage] = useState(
    product?.images?.[0] || ''
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details-background">
    <div className="product-details-container">
      <div className="product-image-container">
        {mainImage ? (
          <img src={mainImage} alt={product.name} className="main-image" />
        ) : (
          <p>No image available</p>
        )}
        <div className="thumbnail-container">
          {product.images && product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="product-details-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <h2>Description</h2>
          <p>{product.description}</p>
          <button className="add-to-cart">
          Add to Cart
        </button>
      </div>
      </div>
      </div>
  );
}

export default ProductDetails;
