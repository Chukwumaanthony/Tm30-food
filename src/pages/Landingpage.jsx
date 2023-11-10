import React, { useState } from "react";
import { Link } from "react-router-dom";
import Onboardimg from "../assets/images/tmonboard.svg";
import Wave from "../assets/images/wave.png";
import Fooddesk from "../assets/images/onbordimg.png";
import tech from "../assets/images/cancel.svg";
import mobilelogo from "../assets/images/mobilelogo.svg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import mobilelogos from "../assets/images/tmlogo.png";
import HotDeals from "../components/Hotdeals";
import Vendorlist from "../components/FullVendors";
import Collab from "../components/Colab";
import Table from "../components/Table";
import Media from "../components/Mediainput";
import "./onboard.css";
import styled from "styled-components";

const Onboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Div className="Onboard">
      {/* NavBar  */}
      <navbar className="navbarr-var">
        <section className="navbarr">
          <div className="inputlogo">
            <div className="h-icon">
              <div style={{ display: "flex" }} onClick={toggleDropdown}>
                <HiOutlineMenuAlt1 />
              </div>
              <img className="onboardlogos" src={mobilelogo} alt="" />
            </div>
            {isOpen && (
              <div className="Dservices">
                <section className="mobile-logo">
                  <img
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    src={tech}
                    alt=""
                  />
                  <img className="onboardlogos" src={mobilelogos} alt="" />
                </section>
                <button style={{ background: "#a3a3a3" }}>SERVICES</button>
                <Link to="/login">
                  <button style={{ background: "#36aad9" }}>
                    LOGIN / REGISTER
                  </button>
                </Link>
              </div>
            )}
            <img className="onboardlogo" src={Onboardimg} alt="" />
            <div className="vendor-search">
              <input type="text" placeholder="Search for vendor" />
              <button>SEARCH</button>
            </div>
            <span className="media-sp">
              <Media />
            </span>
          </div>

          <div className="navtwo">
            {/* <div className="nav-two">
              <div className="nots">
                <RiListIndefinite />
              </div>
              <div className="notss">
                <MdNotificationsActive />
              </div>
            </div> */}
            <Link to="/login" className="navthree">
              <button className="log-sign">LOGIN/SIGNUP</button>
            </Link>
          </div>
        </section>
      </navbar>
      {/* End of NavBar */}

      <div className="D-sec">
        <div className="food-platform">
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span className="welcome-food">Welcome to TM30 Food Platform</span>
            <div className="border-meal"></div>
          </div>
          <div className="taste-anytime">
            <span className="tasty-meal">Tasty Meal</span>
            <span className="anytime">Anytime.</span>
          </div>
          <div className="Delicious-food">
            Delicious food is waiting for you
          </div>
        </div>
        <div className="foodesk">
          <div className="desk-food">
            <img src={Fooddesk} alt="" />
          </div>
        </div>
      </div>
      <section>
        <div className="peter-expense">
          <div className="peter-welcome">
            Welcome Back, Peters <img src={Wave} alt="" />
          </div>
          <div className="bal-expense">Balance and Expenses</div>
        </div>
      </section>

      <Vendorlist />
      <HotDeals />
      <Collab />
      <Table />
    </Div>
  );
};

export default Onboard;
const Div = styled.div`
  position: relative;

  .log-sign {
    background: #36aad9;
    color: white;
    padding: 0.7rem;
    border-radius: 0.7rem;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .h-icon {
    display: none;
  }

  @media screen and (max-width: 40em) {
    .mobile-logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .h-icon {
      display: block;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: white;
      font-size: 20px;
    }
    .onboardlogos {
      width: 70px;
    }
    .onboardlogo {
      display: none;
    }
    .peter-expense {
      display: none;
    }
    .Dservices {
      display: flex;
      width: 100%;
      padding: 1rem;
      box-sizing: border-box;
      left: 0;
      top: 0;
      right: 0;
      background: white;
      position: absolute;
      gap: 10px;
      flex-direction: column;
    }
    .Dservices button {
      padding: 0.6rem;
      width: 100%;
      border: none;
      outline: none;
      color: white;
      border-radius: 0.3rem;
    }
  }
`;
