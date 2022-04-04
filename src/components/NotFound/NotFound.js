import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container w-75 me-5 mt-5">
      <div class="card" style={{ width: "60rem" }}>
        <div className="d-flex align-items-center justify-content-center p-3">
          <img
            width="550"
            src="https://media.istockphoto.com/vectors/error-with-glitch-effect-on-screen-error-404-page-not-found-flat-vector-id1142986365?k=20&m=1142986365&s=612x612&w=0&h=SKUaFfOTS3UsR1bg9PwSgnTYflbhM8GKycRTqjPlIWI="
            class="img-fluid"
            alt="..."
          />
        </div>

        <div class="card-body">
          <h5 class="card-title">This page is not found</h5>
          <p class="card-text">OPPS!! Please check your url</p>
          <Link to="/" class="btn btn-primary">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
