import React from "react";
import logo from "../assets/images/tmlogo.png";
import food from "../assets/images/Food.png";
import check from "../assets/images/check.png";
import "./verify.css";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <div className="login">
      <div className="left-side">
        <img className="img" src={logo} alt="" srcset="" />

        <div className="food">
          <img className="foods" src={food} alt="" srcset="" />
          <p>
            <b>Order your</b> favorite Lunch
          </p>
          <b>&</b>
          <p>
            Enjoy other <b>Services</b>
          </p>
          {/* <p className="para"></p> */}
        </div>
      </div>

      <div className="right-side">
        <div className="awesome-cont">
          <div className="check-cont">
            <img className="verifyimg" src={check} alt="" />
            <span className="awesometext">Awesome!</span>
            <span className="text">
              You're ready to proceed using this platform
            </span>
          </div>
          <div className="proceed-cont">
            <Link to="/">
              <button className="proceedbutton">Proceed to login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
