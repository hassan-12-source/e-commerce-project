import React from 'react'
import './GiftCard.css'

function GiftCard() {
  return (
    <div className='container-gift'>
      <img src="/./images/background-gift-2.jpg" alt="" className='gift-image' />
      <div className='overlay'>
        <h1>Gift Card</h1>
        <h2>Give the Gift of Greenery</h2>
        <p>Giving the gift of plants is a thoughtful and meaningful way to show care and appreciation.</p>
        <button className='button-gift'>Purchase A Gift Card</button>
      </div>
    </div>
  )
}

export default GiftCard;