import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container w-75 me-5 mt-5">
      <div className="card" style={{ width: "60rem" }}>
        <div className="d-flex align-items-center justify-content-center p-3">
          <img
            width="550"
            src="https://media.istockphoto.com/vectors/error-with-glitch-effect-on-screen-error-404-page-not-found-flat-vector-id1142986365?k=20&m=1142986365&s=612x612&w=0&h=SKUaFfOTS3UsR1bg9PwSgnTYflbhM8GKycRTqjPlIWI="
            className="img-fluid"
            alt="..."
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">This page is not found</h5>
          <p className="card-text">OPPS!! Please check your url</p>
          <Link to="/" className="btn btn-primary">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
