import React from "react";
import car from "../../images/car.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-7 col-md-7 col-12">
          <p className="header-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            explicabo libero ipsa similique. Expedita doloremque placeat animi
            cumque aliquam? Sit dolores ut omnis odit delectus sed quaerat
            labore amet fugit.
          </p>
        </div>
        <div className="col-lg-5 col-md-5 col-12">
          <img className="img-fluid" src={car} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;