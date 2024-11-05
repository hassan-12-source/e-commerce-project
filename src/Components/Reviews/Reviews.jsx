import React from 'react';
import './Reviews.css'; // Your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome for icons

function Reviews() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide text-center carousel-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
            alt="avatar"
            style={{ width: '150px' }}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h5 className="mb-3">Jennifer Lewis</h5>
              <p>Customer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                    "I've never been able to keep plants alive before,
                    but thanks to this site, I now have a thriving indoor
                    garden! The selection is amazing, and the tips have been
                    so helpful."
              </p>
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="far fa-star fa-sm"></i></li>
          </ul>
        </div>

        <div className="carousel-item">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            alt="avatar"
            style={{ width: '150px' }}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h5 className="mb-3">Alicia Heart</h5>
              <p>Customer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                    "This website has completely transformed my balcony
                    into a green oasis. The plants are always healthy,
                    and the delivery is super quick. I can't recommend
                    them enough!"
              </p>
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="far fa-star fa-sm"></i></li>
          </ul>
        </div>

        <div className="carousel-item">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            alt="avatar"
            style={{ width: '150px' }}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h5 className="mb-3">Juan Carlos</h5>
              <p>Customer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                    "The plants I ordered from here have become
                    the centerpiece of my home decor.
                    They're so vibrant and really bring life into
                     my space. Their customer service is also top-notch!"
              </p>
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="far fa-star fa-sm"></i></li>
          </ul>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon text-body" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon text-body" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Reviews;
