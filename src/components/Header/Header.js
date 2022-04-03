import React from "react";
import car from "../../images/car.jpg";
const Header = () => {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-lg-7 col-md-7 col-12">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            explicabo libero ipsa similique. Expedita doloremque placeat animi
            cumque aliquam? Sit dolores ut omnis odit delectus sed quaerat
            labore amet fugit.
          </h3>
        </div>
        <div className="col-lg-5 col-md-5 col-12">
          <img className="img-fluid" src={car} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
