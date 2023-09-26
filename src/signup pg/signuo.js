import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import load from "../Animations/anime.svg";
import logo from "../image/tmlogo.png";
import food from "../image/Food.png";
import mail from "../image/Mail.png";
import pass from "../image/pass.png";
import phonee from "../image/phone.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Signuo = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [inputType, setInputType] = useState("password");
  const [show, setshow] = useState(false);

  const handleShow = () => {
    setshow(!show);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const SignupHandler = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        password: password,
        confirmPassword: confirmPassword,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://89.38.135.41:7654/api/auth/staff-signup",
        requestOptions
      );
      const result = await response.json();
      if (result) {
        console.log(result);
      }
      // console.log(message);
      setMessage(result.message);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    SignupHandler();
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

      <div className="right-side">
        <div className="rightone" onSubmit={handleSubmit}>
          <img src={logo} alt="" className="signimg" srcset="" />
          {message}
          <p className="parag">Please fill in your details to get started</p>
        </div>
        <div className="Details">
          <label>First Name</label>
          <section className="EMAILOG">
            <div className="lock">
              <img src={mail} alt="" srcset="" />
            </div>
            <div className="input">
              <input
                className="int"
                type="text"
                placeholder="Enter your email address"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
          </section>
        </div>
        <div className="Details">
          <label>Last Name</label>
          <section className="EMAILOG">
            <div className="lock">
              <img src={mail} alt="" srcset="" />
            </div>
            <div className="input">
              <input
                className="int"
                type="text"
                placeholder="Enter your email address"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </section>
        </div>
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
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </section>
        </div>

        <div className="Details">
          <label>Phone Number</label>
          <section className="EMAILOG">
            <div className="lock">
              <img src={phonee} alt="" srcset="" />
            </div>
            <div className="input">
              <input
                className="int"
                type="phone number"
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </section>
        </div>

        <div className="Details">
          <label> Password</label>
          <section className="EMAILOG">
            <div className="lock">
              <img src={pass} alt="" srcset="" />
            </div>
            <div className="input">
              <input
                className="int"
                type={inputType}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleShow} className="btn">
                {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </section>
        </div>

        <div className="Details">
          <label>Confirm Password</label>
          <section className="EMAILOG">
            <div className="lock">
              <img src={pass} alt="" srcset="" />
            </div>
            <div className="input">
              <input
                className="int"
                type={inputType}
                placeholder="Enter your password"
                onChange={(e) => setConfirmassword(e.target.value)}
              />
              <button onClick={handleShow} className="btn">
                {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </section>
        </div>
        <section className="enterr">
          <button className="logs" onClick={handleSubmit}>
            {loading ? <img src={load} alt="" /> : "Sign Up"}
          </button>
        </section>

        <span className="lastLg">
          <p>Already have an account? </p>
          <Link className="signd" to="/">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signuo;
