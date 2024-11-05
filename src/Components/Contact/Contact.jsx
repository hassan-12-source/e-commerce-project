import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-content'>
                <div className='get-in-touch'>
                    <h1>Get In Touch</h1>
                    <p>Sit vulputate faucibus eget eget scelerisque faucibus malesuada<br />nullam mollis ut montes, dui scelerisque ornare.</p>
                    <div className='icon-email-phone'>
                        <FontAwesomeIcon icon={faLocationDot} color='green' />
                        <div className='icon-info'>
                            <h1>VISIT US</h1>
                            <p>123 Demo St, San Francisco, CA 45678, United States</p>
                        </div>
                    </div>

                    <div className='icon-email-phone'>
                        <FontAwesomeIcon icon={faPhone} color='green' />
                        <div className='icon-info'>
                            <h1>Call Us</h1>
                            <p>+1 123-456-7890</p>
                        </div>
                    </div>

                    <div className='icon-email-phone'>
                        <FontAwesomeIcon icon={faEnvelope} color='green' />
                        <div className='icon-info'>
                            <h1>EMAIL US</h1>
                            <p>contact@demo.com</p>
                        </div>
                    </div>

                    <div className='horizontal-line'></div>
                    <div className='social-media-contact'>
                        <FontAwesomeIcon className='social-icon' icon={faSquareInstagram} color='black' size='2x' />
                        <FontAwesomeIcon className='social-icon' icon={faSquareFacebook} color='black' size='2x' />
                        <FontAwesomeIcon className='social-icon' icon={faSquarePinterest} color='black' size='2x' />
                        <FontAwesomeIcon className='social-icon' icon={faSquareXTwitter} color='black' size='2x' />
                    </div>
                </div>

                <div className='vertical-line'></div>

                <div className='contact-form'>
                    <h1>Drop us a line or two</h1>

                    <form action="">
                        <div className='form-group'>
                            <label htmlFor="name">Name : </label>
                            <input type="text" id='name' name='name' placeholder='Your name' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="name">Email : </label>
                            <input type="email" id='email' name='email' placeholder='Your email' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='message'>Message : </label>
                            <textarea
                                id='message'
                                placeholder='Enter your message'
                                rows='4' // Controls the height of the textarea
                                required
                            ></textarea>
                        </div>

                        <button type='submit' className='submit-btn' >Submit</button>
                    </form>
                </div>
            </div>

            <div className='map-section'>
                <div className='gmap-farme'>
                    <div style={{ width: "100%" }}>
                        <iframe
                            width="100%"
                            height="300"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=123%20Demo%20St,%20San%20Francisco,%20CA%2045678,%20United%20States+(Plants%20world)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Contact;