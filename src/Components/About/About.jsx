import React, { useState } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import ImageModal from './ImageModal';

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    console.log("Image clicked:", image);
    setSelectedImage(image); // Corrected this line
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log("Modal closed");
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <div className='about'>
        <h1 className='about-word'>About</h1>

        <div className='about-paragraph'>
          <div className='line'></div>
          <h2>We provide fresh and healthy plants for your space</h2>
          <p>Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo sapien faucibus in adipiscing risus adipiscing bibendum nec eget tincidunt sed.</p>
        </div>
      </div>

      <div className='video-container'>
        <iframe
          src="https://www.youtube.com/embed/oZcKTf4RLQ8"
          width="960"
          height="515"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className='about-our-story'>
        <h1>OUR STORY</h1>
        <div className='paragraph-story'>
          <p>Tristique dapibus porta viverra sit accumsan integer semper dolor etiam id iaculis feugiat egestas urna est magna euismod donec facilisis sed integer orci ac.
             <span className="spacing"><br /></span>
             Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo, et, pellentesque pellentesque sapien faucibus in adipiscing risus adipiscing bibendum in nec eget tincidunt in in sed magna arcu molestie nec mauris quisque.
             <span className="spacing"><br /></span>
             Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae in volutpat faucibus elementum, sodales orci mi fames molestie venenatis nunc hendrerit.</p>
          <div className='icon-quote-left'><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" /></div>
          <p className='paragraph-owner'>Massa aliquam montes, odio porttitor sit ac maecenas interdum ut<br /> tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in nec<br /> ullamcorper vel.</p>
          <div className='owner'>
            <img src="/images/owner.jpg" alt="" />
            <div className='name-owner'>
              <h1>Emily Evergreen</h1>
              <h4>Founder, Owner</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='images-about'>
        <div className='collection-about'>
          <img 
            src="/images/image-about-1.jpg" 
            alt="About Image 1" 
            onClick={() => handleImageClick("/images/image-about-1.jpg")} 
          />
          <img 
            src="/images/image-about-2.jpg" 
            alt="About Image 2" 
            onClick={() => handleImageClick("/images/image-about-2.jpg")} 
          />
          <img 
            src="/images/image-about-3.jpg" 
            alt="About Image 3" 
            onClick={() => handleImageClick("/images/image-about-3.jpg")} 
          />
          <img 
            src="/images/image-about-4.jpg" 
            alt="About Image 4" 
            onClick={() => handleImageClick("/images/image-about-4.jpg")} 
          />
          <img 
            src="/images/image-about-5.jpg" 
            alt="About Image 5" 
            onClick={() => handleImageClick("/images/image-about-5.jpg")} 
          />
          <img 
            src="/images/image-about-6.jpg" 
            alt="About Image 6" 
            onClick={() => handleImageClick("/images/image-about-6.jpg")} 
          />
        </div>
      </div>

      <ImageModal isOpen={isOpen} image={selectedImage} onClose={handleClose} />
    </div>
  );
}

export default About;
