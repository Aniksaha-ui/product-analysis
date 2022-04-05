import React from "react";
import car from "../../images/car.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">BMW X3 Car Reviews</h1>
      <div className="row d-flex align-items-center justify-content-center mt-5">
        <div className="col-lg-7 col-md-7 col-12 order-lg-1 order-2">
          <p className="header-text">
            <h3 className="text-primary mb-4">BMW X3 Specification</h3>
            <b>Market introduction:</b> <br />
            The X3 facelift was launched in India on 20 January, 2022.
            <br />
            <b>Engine and specification:</b> <br /> Powering the BMW X3 facelift
            is a 2.0-litre, four-cylinder, turbocharged petrol that produces
            252bhp and 350Nm of torque, paired with an eight-speed automatic
            transmission.
          </p>
        </div>
        <div className="col-lg-5 col-md-5 col-12 order-lg-2 order-1">
          <img className="img-fluid" src={car} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
