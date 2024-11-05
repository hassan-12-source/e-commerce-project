import React from 'react'
import './Features.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import {faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons';

function Features() {
    return (
      <div className='section-features'>
        <div className='features-container'>
          <div className='icon'>
            <FontAwesomeIcon icon={faShieldHalved} size='2x' />
          </div>
          <div className='features-text'>
              <h1>Secure Payment</h1>
              <p>Fast, safe, and protected transactions</p>
          </div>
            </div>
            
            <div className='features-container'>
          <div className='icon'>
            <FontAwesomeIcon icon={faTruck} size='2x' />
          </div>
          <div className='features-text'>
              <h1>Delivered With Care</h1>
              <p>Your order arrives safely and thoughtfully packaged.</p>
          </div>
            </div>
            
            <div className='features-container'>
          <div className='icon'>
            <FontAwesomeIcon icon={faHandHoldingHeart} size='2x' />
          </div>
          <div className='features-text'>
              <h1>Excellent Service</h1>
              <p>Experience top-notch support tailored to your needs.</p>
          </div>
            </div> 
            
        </div>      
  )
}

export default Features;