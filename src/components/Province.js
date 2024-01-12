import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Province.css';
import Header from './Header';

function Province() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h2 className="text-center text-dark mb-4 svg-shadow shadow-success shadow-intensity-lg custom-shadow font-weight-bold text-uppercase">
          Province Management
        </h2>
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="./photos/allprovinces/KAMPOT.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">Kompot</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="./photos/allprovinces/Koh Kong.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">Koh Kong</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="./photos/allprovinces/kep.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">Kep</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Province;
