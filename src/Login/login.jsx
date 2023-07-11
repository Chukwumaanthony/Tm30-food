import React, { useState } from "react";
import "./login.css";
import {Link} from 'react-router-dom';
// import sidebar from "../image/full.svg";
import logo from "../image/tmlogo.png";
import food from "../image/Food.png";
import mail from "../image/Mail.png";
import pass from "../image/pass.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Login = () => {
 
    const [inputType, setInputType] = useState('password')
    const [show, setshow] = useState(false)

    const handleShow = () => {
        setshow(!show)
        setInputType(inputType === 'password' ? 'text' : 'password')
    };


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      // e.preventDefault();
  
      try {
        const response = await fetch('http://89.38.135.41:5112/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        let data = await response.json()
        return data
  
        // if (response.data) {
        //   console.log(data)
        //   // Login successful, perform further actions
        // } else {
        //   // Login failed, handle error
        // }
      } catch (error) {
        // Handle error
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
          <p className="para"></p>
        </div>
      </div>

      <div className="right-side" onSubmit={handleSubmit}>
        <div className="right">
          <img src={logo} alt="" className="loginimg" srcset="" />
          <b className="loginbolds">Welcome Back</b>
          <p className="paras">Sign in with your email address and password</p>
        </div>
        <div className="Details">
          <b>Email Address</b>
          <section className="EMAILOG">
            <div className="lock">
              <img src={mail} alt="" srcset="" />
            </div>
            <div className="input">
              <input
                className="int"
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
          </section>
        </div>

        <div className="Details">
          <b>Password</b>
          <section className="EMAILOG">
            <div className="lock">
              <img src={pass} alt="" srcset="" />
            </div>
            <div className="input">
              <input
                className="int"
                type={inputType}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button onClick={handleShow}  className="btn">{show ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}</button>
            </div>
            
          </section>
        </div>
        <div className="checks">
          <p className="check">
            <input className="intsss" type="checkbox" />
            Remember Me
          </p>
          <Link to= "/forget">
          <p className="check">Forget Password?</p>
          </Link>
        </div>

        <Link to= "/Onboard" type="submit">
        <section className="enter">
          <button onClick={(e) => handleSubmit(e)} className="logsPg">Login</button>
        </section>
        </Link>
       
        <span className="lastLg">
          <p>Don't have an account? </p> 
          {/* <p className="sign">  Sign up </p> */}
          <Link  to= '/signup'> 
          Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
