import React from "react";
import "./forget.css";
import logo from "../image/tmlogo.png";
import food from "../image/Food.png";
import { Link } from "react-router-dom";
import MessageBox from "../image/message.png";
// import phonebox from "../image/call.png";
const forget = () => {
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
        <div className="father">
          <div className="mother">
            <span className="fogetpass">Forget Password</span>
            <span className="textwo">
              Please select the option to send link reset password
            </span>
            <Link to="/reset">
              <div className="btn">
                <button className="buttone">
                  <section className="sect">
                    <img className="immm" src={MessageBox} alt="" />
                    <span className="Via">
                      <span className="maildev">Reset via Email</span>
                      <span className="linkset">
                        Link reset would be sent to registered email
                      </span>
                    </span>
                  </section>
                </button>
                {/* <button className="buttone">
                <section className="sect">
                  <img className="immm" src={phonebox} alt="" />
                  <span className="Via">
                    <span className="maildev">Reset via Phone Number</span>
                    <span className="linkset">Link reset would be sent to registered phone number</span>
                  </span>
                </section>
              </button> */}
              </div>
            </Link>

            {/* <button className="buttwo"> Send Link</button> */}
            {/* <div className="both">
              <span className="recieve">Didn't recieve code?</span>
              <Link>Resend</Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default forget;
