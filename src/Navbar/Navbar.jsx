import React, { useState } from 'react';
// import Onboardimg from "../image/tmonboard.svg";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import {Link} from "react-router-dom"
import Nots from "../image/nots.png";
import Notss from "../image/notss.png";
import Pics from "../image/pic.png";
import { BiSearch } from "react-icons/bi";
import {TiDelete} from "react-icons/ti"
import "./navbar.css";
import Notify from '../Notify/Notification';
import Order from '../Order/order';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showtwo, setShowtwo] = useState(false);

  return (
    <div className="Onboard">
        {/* NavBar  */}
      <navbar className="navbar">
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
        </div>

        <div className="navtwo">
          <div className="nav-two">
            <section
            onClick={()=>{
              setShowtwo(true);
            }}
            >
            <img className="nots" src={Nots} alt="" />
            </section>

            <section
            onClick={()=>{
              setShow(true);
            }}
            >
             <img className="notss" src={Notss} alt="" />
            </section>
            <Modal open={show}>
              <section className={classes.notificationBackground}>
                <div className={classes.notificationContent}>
                  <section className='notifyx'>
                  <span className='notifyme'>Notification</span>
                    <button
                    className='notifydel'
                    onClick={()=>{
                        setShow(false);
                    }}
                    >
                    <TiDelete/>
                    </button>
                  </section>
                  <Notify/>

                </div>
              </section>

            </Modal>

            <Modal open={showtwo}>
              <section className={classes.notificationBackground}>
                <div className={classes.notificationContent}>
                  <section className='notifyx'>
                  <span className='notifyme'>Your Orders</span>
                    <button
                    className='notifydel'
                    onClick={()=>{
                        setShowtwo(false);
                    }}
                    >
                    <TiDelete/>
                    </button>
                  </section>
                  <Order/>

                </div>
              </section>

            </Modal>
          </div>
          <Link to="/profile" className="navthree">
            <div className="pics-img">
              <img className="picss" src={Pics} alt="" srcset="" />
            </div>
            <div className="nav-three">
              <b className="adeleke">Adeleke Peters</b>
              <span className="ade-mail">Adelekepet20@gmail.com</span>
            </div>
          </Link>
        </div>
      </navbar>
      {/* End of NavBar */}
      
      
    </div>
  )
}

export default Navbar