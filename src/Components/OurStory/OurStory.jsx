import React from 'react'
import './OurStory.css'

function OurStory() {
  return (
      <div className='our-story'>
          <img src="/./images/home-image-2.jpg" alt="" />
          <div className='text-our-story'>
              <h1>OUR STORY</h1>
              <h2>For People Who Love Plants</h2>
              <p>At Plants World, our passion for plants began in a small garden, where we discovered the joy and tranquility that greenery brings to our lives. With a mission to share this love, we curate a diverse collection of plants that thrive in every home and garden.<br>
              </br>
              Our journey has blossomed into a community of plant enthusiasts, dedicated to promoting sustainable practices and fostering a deeper connection with nature. Join us as we celebrate the beauty and benefits of plants, transforming spaces into vibrant, living havens.
              </p>
              <button className='button-our-story'>Shop Now</button>
          </div>
      </div>
  )
}

export default OurStory