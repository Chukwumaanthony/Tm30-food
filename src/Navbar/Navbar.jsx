import React, { useContext, useState } from "react";
// import Onboardimg from "../image/tmonboard.svg";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import { Link } from "react-router-dom";
// import Nots from "../image/nots.png";
// import Notss from "../image/notss.png";
// import Pics from "../image/pic.png";
// import { BiSearch } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
// import {AiOutlineAlignLeft } from "react-icons/ai";
// import Onboardimg from "../image/tmonboard.svg";
import "./navbar.css";
// import Media from "../Onboard/Mediainput"
import Notify from "../Notify/Notification";
import Order from "../Order/order";
import { ProfileContext } from "../ContextApi/ProfileContext";
import { RiListIndefinite } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";

const Navbar = () => {
  const { data } = useContext(ProfileContext);

  // console.log(data);

  // const image = profile.data.profilePictureUrl;
  const [show, setShow] = useState(false);
  const [showtwo, setShowtwo] = useState(false);

  return (
    <div className="Onboard">
      {/* NavBar  */}

      <navbar className="navbar">
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
          <Link to="/profile" className="navthree">
            <div className="pics-img">
              <img
                className="picss"
                src={data.profilePictureUrl}
                alt=""
                srcset=""
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
      </navbar>
      {/* End of NavBar */}
    </div>
  );
};

export default Navbar;

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
