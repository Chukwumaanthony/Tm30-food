import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
// import sidebar from "../image/full.svg";
import logo from "../image/tmlogo.png";
import food from "../image/Food.png";
import mail from "../image/Mail.png";
import pass from "../image/pass.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Login = () => {
  const [message, setMessage] = useState("");

  const [inputType, setInputType] = useState("password");
  const [show, setshow] = useState(false);

  const handleShow = () => {
    setshow(!show);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const authenticateUser = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: email,
        password: password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://89.38.135.41:7654/api/auth/authenticate",
        requestOptions
      );
      const result = await response.json();
      console.log(result.data.accessToken);
      localStorage.setItem("token", result.data.accessToken);
      if (result.status) {
        setTimeout(() => {
          Navigate("/Onboard");
        }, 5000);
        // console.log(result)
        sessionStorage.setItem("userDetails", JSON.stringify(result));
      }
      setMessage(result.message);
      console.log(result.status);
      console.log(message);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    authenticateUser();
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
        <article className="artdfirst">
          <div className="right">
            {message}
            <img src={logo} alt="" className="loginimg" srcset="" />
            <b className="loginbolds">Welcome Back</b>
            <p className="paras">
              Sign in with your email address and password
            </p>
          </div>

          <article className="darticle">
            <div className="Details">
              <label>Email Address</label>
              <section className="EMAILOG">
                <div className="lock">
                  <img src={mail} alt="" srcset="" />
                </div>
                <div className="input">
                  <input
                    className="int"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                  />
                </div>
              </section>
            </div>

            <div className="Details">
              <label>Password</label>
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
                  <button onClick={handleShow} className="btn">
                    {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </button>
                </div>
              </section>
            </div>
          </article>
          <div className="checks">
            <p className="check">
              <input className="intsss" type="checkbox" />
              Remember Me
            </p>
            <Link to="/forget">
              <p className="check">Forget Password?</p>
            </Link>
          </div>

          {/* <Link to= "/Onboard" type="submit"> */}
          <section className="enter">
            <button onClick={handleSubmit} className="logsPg">
              Login
            </button>
          </section>
          {/* </Link> */}

          <span className="lastLg">
            <p>Don't have an account? </p>
            {/* <p className="sign">  Sign up </p> */}
            <Link to="/signup">Sign up</Link>
          </span>
        </article>
      </div>
    </div>
  );
};

export default Login;
