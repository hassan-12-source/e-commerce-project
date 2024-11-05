import React, { useState } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subscribe with: ${email}');
  }

  return (
    <div className='footer'>
      <div className='footer-link'>
        <li><a href="">Home</a></li>
        <li><a href="">Plants</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </div>

      <div className='subscribe-footer'>
        <h1>Subscribe to our newsletter</h1>
      </div>

      <div className='subscribe-container'>
        <form action="" className='subscribe-form'>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            className='email-input'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button type='submit' className='subscribe-button'>Subscribe</button>
        </form>
      </div>

      <div className='footer-icons'>
        <FontAwesomeIcon icon={faInstagram} size='2x' />
        <FontAwesomeIcon icon={faFacebook} size='2x' />
        <FontAwesomeIcon icon= {faTwitter} size='2x' />
      </div>
      </div>
  )
}

export default Footer;