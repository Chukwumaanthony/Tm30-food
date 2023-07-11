import React, { useState } from "react";
import {Link} from 'react-router-dom';

import "./signup.css";
import logo from "../image/tmlogo.png";
import food from "../image/Food.png";
import mail from "../image/Mail.png";
import pass from "../image/pass.png";
import phone from "../image/phone.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";


const Signuo = () => {
    const [inputType, setInputType] = useState('password')
    const [show, setshow] = useState(false)

    const handleShow = () => {
        setshow(!show)
        setInputType(inputType === 'password' ? 'text' : 'password')
    }
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
          <p className="para"></p>
        </div>
      </div>

      <div className="right-side">
        <div className="rightone">
          <img src={logo} alt="" className="signimg" srcset="" />
          {/* <b className="bolds">Welcome Back</b> */}
          <p className="parag">Please fill in your details to get started</p>
        </div>
        <div className="Detail">
          <b>Email Address</b>
          <section className="EMAILOG">
            <div className="locks">
              <img src={mail} alt="" srcset="" />
            </div>
            <div className="inputs">
              <input
                className="ints"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
          </section>
        </div>

        <div className="Detail">
          <b>Phone Number</b>
          <section className="EMAILOG">
            <div className="locks">
              <img src={phone} alt="" srcset="" />
            </div>
            <div className="inputs">
              <input
                className="ints"
                type="phone number"
                placeholder="Enter your phone number"
              />
            </div>
          </section>
        </div>

        <div className="Detail">
          <b>Create Password</b>
          <section className="EMAILOG">
            <div className="locks">
              <img src={pass} alt="" srcset="" />
            </div>
            <div className="inputs">
              <input
                className="ints"
                type={inputType}
                placeholder="Enter your password"
              />
              <button onClick={handleShow}  className="btn">{show ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}</button>
            </div>
            
          </section>
        </div>

        <div className="Detail">
          <b>Confirm Password</b>
          <section className="EMAILOG">
            <div className="locks">
              <img src={pass} alt="" srcset="" />
            </div>
            <div className="inputs">
              <input
                className="ints"
                type={inputType}
                placeholder="Enter your password"
              />
              <button onClick={handleShow}  className="btn">{show ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}</button>
            </div>
            
          </section>
        </div>
       
        <section className="enterr">
          {/* <span className="logs">Sign Up</span> */}
          <Link className="logs" to= "/Otp">
            Sign up
          </Link>
        </section>
        <span className="signuplast">
          <p>Already have an account? </p> 
          {/* <p className="sign">  Sign up </p> */}
          <Link  to= '/'> 
          Login
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Signuo;