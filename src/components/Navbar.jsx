import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import { TiDelete } from "react-icons/ti";
import Notify from "./Notification";
import Order from "./Order";
import Tmlogo from "../assets/images/tmlogo.png";
import Media from "../components/Mediainput";
import mobilelogo from "../assets/images/mobilelogo.svg";
import "./navbar.css";
import { ProfileContext } from "../ContextApi/ProfileContext";
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiListIndefinite,
} from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const { data } = useContext(ProfileContext);

  const [show, setShow] = useState(false);
  const [showtwo, setShowtwo] = useState(false);

  const [drop, setDrop] = useState();

  const toggle = () => {
    setDrop(!drop);
  };
  return (
    <Div className="Onboard">
      {/* NavBar  */}

      <nav className="navbar">
        <div className="h-icon">
          <div style={{ display: "flex" }}>
            <HiOutlineMenuAlt1 />
          </div>
          <img className="onboardlogos" src={mobilelogo} alt="" />
        </div>
        <div className="web-logo">
          <img src={Tmlogo} alt="" style={{ width: "80px" }} />
        </div>
        <div className="navtwo">
          <div className="nav-two">
            <span className="media-sp">
              <Media />
            </span>
            <section
              className="nots"
              onClick={() => {
                setShowtwo(true);
              }}
            >
              <RiListIndefinite />
            </section>

            <section
              className="notss"
              onClick={() => {
                setShow(true);
              }}
            >
              <MdNotificationsActive />
            </section>
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

            <Modal open={showtwo}>
              <section className={classes.notificationBackground}>
                <div className={classes.notificationContent}>
                  <section className="notifyx">
                    <span className="notifyme">Your Orders</span>
                    <button
                      className="notifydel"
                      onClick={() => {
                        setShowtwo(false);
                      }}
                    >
                      <TiDelete />
                    </button>
                  </section>
                  <Order />
                </div>
              </section>
            </Modal>
          </div>
          <section className="navthree">
            <div className="pics-img">
              <img
                className="picss"
                src={data.profilePictureUrl}
                alt=""
                srcSet=""
              />
            </div>
            <section>
              <div onClick={toggle} className="nav-three">
                <b className="adeleke">
                  <span>{data.lastName}</span>
                  <span>{data.firstName}</span>
                </b>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="ade-mail"
                >
                  <span>TM30 STAFF</span>
                  <span style={{ fontSize: "16px", display: "flex" }}>
                    {drop ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
                  </span>
                </div>
                {drop && (
                  <div className="drop-ss">
                    <section
                      style={{
                        display: "flex",
                        gap: ".3rem",
                        borderBlock: "1px solid #e6e6e6",
                        fontSize: "13px",
                        alignItems: "center",
                        padding: "1rem",
                      }}
                    >
                      <FiSettings />
                      <Link to="/profile">Profile</Link>
                    </section>
                    <section
                      style={{
                        display: "flex",
                        gap: ".3rem",
                        borderBlock: "1px solid #e6e6e6",
                        fontSize: "13px",
                        alignItems: "center",
                        padding: "1rem",
                      }}
                    >
                      <FiSettings />
                      <Link to="/profile">Change Password</Link>
                    </section>
                    <section
                      style={{
                        display: "flex",
                        color: "#d04747",
                        gap: ".3rem",
                        fontSize: "13px",
                        alignItems: "center",
                        padding: "1rem",
                      }}
                    >
                      <BiLogOut />
                      <Link
                        to="/"
                        style={{
                          color: "#d04747",
                        }}
                      >
                        Logout
                      </Link>
                    </section>
                  </div>
                )}
              </div>
            </section>
          </section>
        </div>
      </nav>
      {/* End of NavBar */}
    </Div>
  );
};

export default Navbar;
const Div = styled.section`
  width: 100vw;
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

/* 
         {/* medianav }
         <article className='dart'>
          <div className='media-dash'>
          <  AiOutlineAlignLeft/>

          </div>
          <img 
          className="media-logo" 
          src={Onboardimg} 
          alt="" />

           <Media/>

        </article>
        
        <div className="inputlogo">
          <div className="onboardint">
            <div className="searchicon">
              <BiSearch />
            </div>
            <div>
              <input
                className="onboard-input"
                type="text"
                placeholder="Search for anything..."
              />
            </div>
          </div>
        </div> */
