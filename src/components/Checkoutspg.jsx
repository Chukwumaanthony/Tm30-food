import React from "react";
import Navbar from "./Navbar";
import Sidebar from "../SidebarDash/Sidebar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import phone from "../assets/images/housephone (1).png";
import house from "../assets/images/housephone (2).png";
import { Link } from "react-router-dom";
import Allcrd from "../assets/images/allcrd.png";
import "./checkout.css";

const Checkoutspg = () => {
  return (
    <div className="ni">
      <Sidebar />
      <section className="nnna">
        <Navbar />
        <div className="backcontcheck">
          <span className="backcheckout">
            <span className="dback">
              <FaLongArrowAltLeft />
              Back
            </span>
          </span>
        </div>

        <div className="total-cent">
          <main className="ordersummary">
            <label className="ordersumm" htmlFor="">
              ORDER SUMMARY
            </label>
            <section className="total-payy">
              <span className="totpay">Total to pay</span>
              <span className="onek">#1,000.00</span>
            </section>
          </main>
          <main className="ordersummary">
            <label className="ordersumm" htmlFor="">
              CHOOSE A PAYMENT METHOD
            </label>

            <Link to="/Withcard" className="total-pay">
              <div>
                <input type="radio" />
                <span className="totpay">Pay with Card</span>
              </div>

              <span className="inhouseph">
                <img src={phone} alt="" />
                <img src={house} alt="" />
              </span>
            </Link>
            <section className="total-pay">
              <div>
                <input type="radio" />
                <span className="totpay">Pay with USSD or Bank Transfer</span>
              </div>

              <span className="inhouseph">
                <img style={{ width: "65px" }} src={Allcrd} alt="" />
              </span>
            </section>

            <button className="topaycheck">Proceed to pay #1000.00</button>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Checkoutspg;
