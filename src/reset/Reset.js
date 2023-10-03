import React, { useState } from "react";
import logo from "../assets/images/tmlogo.png";
import food from "../assets/images/Food.png";
import "./reset.css";
import Passlock from "../assets/images/pass.png";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
        }),
      };

      const response = await fetch(
        `http://89.38.135.41:7654/api/auth/forgot-password?email=${email}`,
        requestOptions
      );
      const result = await response.json();
      setMessage(result.data);

      if (result.status) {
        setLoading(false);
        setTimeout(() => {
          navigate("/Confirm");
        }, 5000);
      }

      console.log(result.status);
      console.log(message);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
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

      <div className="right-side">
        <article className="artdfirst">
          <div className="right" onSubmit={handleSubmit}>
            {/* {message} */}
            <b className="loginbolds">Reset Pasword</b>
            <p className="paras">Here you have too reset password</p>
          </div>

          <article className="darticle">
            <div className="Details">
              <label>Email</label>
              <section className="EMAILOG">
                <div className="lock">
                  <img src={Passlock} alt="" srcset="" />
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

            {/* <div className="Details">
                  <label>Confirm New Password</label>
                  <section className="EMAILOG">
                    <div className="lock">
                      <img src={Passlock} alt="" srcset="" />
                    </div>
                    <div className="input">
                      <input
                        className="int"
                        type={resetInput}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                      />
                      <button onClick={handleShow} className="btn">
                        {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </button>
                    </div>
                  </section>
                </div> */}
          </article>

          <section className="enter">
            <button className="logsPg" onClick={handleSubmit}>
              {loading ? "Loading . . ." : "Reset Password"}
            </button>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Reset;
