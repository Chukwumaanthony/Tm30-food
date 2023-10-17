import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Onboardimg from "../assets/images/tmonboard.svg";
import Vendor from "../components/Vendor";
import { MdNotificationsActive } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
import Wave from "../assets/images/wave.png";
import HotDeals from "../components/Hotdeals";
import Table from "../components/Table";
import Fooddesk from "../assets/images/onbordimg.png";
import Media from "../components/Mediainput";
import tech from "../assets/images/cancel.svg";
import mobilelogo from "../assets/images/mobilelogo.svg";
import mobilelogos from "../assets/images/tmlogo.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import "./onboard.css";
import { ProfileContext } from "../ContextApi/ProfileContext";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import { TiDelete } from "react-icons/ti";
import Notify from "../components/Notification";
// import Order from "./Order";

const Onboard = () => {
  const { data } = useContext(ProfileContext);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  console.log(data);

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
                <section className="dhover">
                  <Link>
                    <button className="btn-hover">MY PROFILE</button>
                  </Link>
                  <Link>
                    <button className="btn-hover">MY ORDERS</button>
                  </Link>
                  <Link>
                    <button className="btn-hover">SERVICES</button>
                  </Link>
                  <Link>
                    <button className="btn-hover">SETTINGS</button>
                  </Link>
                  <Link>
                    <button
                      style={{ background: "#3E3E3E" }}
                      className="btn-hover"
                    >
                      LOGOUT
                    </button>
                  </Link>
                </section>
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
            <div className="nav-two">
              <div className="nots">
                <RiListIndefinite />
              </div>
              <div
                onClick={() => {
                  setShow(true);
                }}
                className="notss"
              >
                <MdNotificationsActive />
              </div>
              <Modal open={show}>
                <section className={classes.notificationBackground}>
                  <div className={classes.notificationContent}>
                    <section className="notifyx">
                      <span className="notifyme">Notification</span>
                      <button
                        className="notifydel"
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <TiDelete />
                      </button>
                    </section>
                    <Notify />
                  </div>
                </section>
              </Modal>
            </div>
            <Link to="/profile" className="navthree">
              <div className="pics-img">
                <img
                  className="picss"
                  src={data.profilePictureUrl}
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="nav-three">
                <b className="adeleke">
                  <span>{data.lastName}</span>
                  <span>{data.firstName}</span>
                </b>
                <span className="ade-mail">{data.email}</span>
              </div>
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

      <Vendor />
      <HotDeals />
      <Table />
    </Div>
  );
};

export default Onboard;
const Div = styled.div`
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
    .dhover {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .btn-hover {
      background: #a3a3a3;
    }
    .btn-hover:hover {
      background: #36aad9;
    }
    .notss {
      display: block;
      display: flex;
    }
  }
`;
