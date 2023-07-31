import React, { useState } from "react";
import "./otp.css";
import logo from "../image/tmlogo.png";
import food from "../image/Food.png";
import { Link } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

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
        <div className="rightotp">
          <img src={logo} alt="" className="otpimg" srcset="" />
          <p className="paragr">
            We have sent you <b className="spa">One time password </b>to your
            email
          </p>
          <p className="ptag"> Please Enter OTP</p>

          <span className="butts">
            {otp.map((data, index) => {
              return (
                <input
                  className="buttons"
                  type="text"
                  name="otp"
                  
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  // onFocus={(e) => e.target.select()}
                />
              );
            })}
            {/* <input className='button'></input>
            <input className='button'></input>
            <input className='button'></input>
            <input className='button'></input>
            */}
          </span>

          <span className="Retp">
            <button className="resend">Resend OTP</button>
            <Link to= "/verifyy" className="verify">
              Verify OTP
            </Link>
            {/* <button
              className="verify"
              // onClick={(e) => alert("Entered OTP is" + otp.join(""))}
            >
            </button> */}
          </span>

          <button className="exsistacc">Login with existing account</button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
