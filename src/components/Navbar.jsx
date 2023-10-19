import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import { TiDelete } from "react-icons/ti";
import Notify from "./Notification";
import Order from "./Order";
// import Tmlogo from "../assets/images/tmlogo.png";
import mobilelogo from "../assets/images/mobilelogo.svg";

import "./navbar.css";
import { ProfileContext } from "../ContextApi/ProfileContext";
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiListIndefinite,
} from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
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
        <div>
          <img src={mobilelogo} alt="" style={{ width: "80px" }} />
        </div>

        <div className="navtwo">
          <div className="nav-two">
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
                  style={{ display: "flex", justifyContent: "space-between" }}
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
