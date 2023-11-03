import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Load from "../Animations/anime.svg";
import logo from "../assets/images/tmlogo.png";
import food from "../assets/images/Food.png";
import mail from "../assets/images/Mail.png";
import pass from "../assets/images/pass.png";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import styled from "styled-components";

const Login = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setshow] = useState(false);

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
      console.log(result.data);
      console.log(result.data.accessToken);
      localStorage.setItem("token", result.data.accessToken);

      if (result.status) {
        sessionStorage.setItem("userDetails", JSON.stringify(result));
        setTimeout(() => {
          Navigate("/onboard");
        }, 4000);
        toast.success("Company Staff Login Successful!");
      }
      setMessage(result.data.message);
      console.log(result.status);
      console.log(message);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      toast.error("Company Staff Login Failed!");
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
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
          <section>
            <Div1 className="right">
              <div>{message}</div>
              <img src={logo} alt="" className="loginimg" srcset="" />
              <b className="loginbolds">Welcome Back</b>
              <p className="paras">
                Sign in with your email address and password
              </p>
            </Div1>

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
                      type={show ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                    <button onClick={() => setshow(!show)} className="btn">
                      {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </button>
                  </div>
                </section>
              </div>
            </article>
            <div className="checks">
              <div style={{ display: "flex", gap: "5px" }}>
                <input type="checkbox" />
                <p className="check"> Remember Me</p>
              </div>
              <Link to="/forget">
                <p className="check">Forget Password?</p>
              </Link>
            </div>

            {/* <Link to= "/Onboard" type="submit"> */}
            <section className="enter">
              <button
                disabled={!email && !password}
                onClick={handleSubmit}
                className="logsPg"
              >
                {loading ? <img src={Load} alt="" /> : "Login"}
              </button>
            </section>
            {/* </Link> */}

            <span className="lastLg">
              <p>Don't have an account? </p>
              <Link className="signd" to="/signup">
                Register
              </Link>
            </span>
          </section>
        </article>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;

const Div1 = styled.section`
  div {
    color: #36aad9;
  }
`;
