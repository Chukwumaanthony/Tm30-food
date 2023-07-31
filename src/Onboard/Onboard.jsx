import React from "react";
import Onboardimg from "../image/tmonboard.svg";
import Pics from "../image/pic.png";
import Vendor from "../vendor/vendor";
import { BiSearch } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
import HotDeals from "../HotDeals/HOTDEALS";
import Collab from "../Collaborate/colab";
import Table from "../Onboardtable/table";
import foodlogo from "../Onboard/Foodlogo.png";
import Media from "./Mediainput";
import "./onboard.css";

const Onboard = () => {
  return (
    <div className="Onboard">
      {/* NavBar  */}
      <navbar className="navbarr-var">
        <section className="navbarr">
          <div className="inputlogo">
            <img className="onboardlogo" src={Onboardimg} alt="" />
            <div className="onboardint">
              <div className="searchicon">
                <BiSearch />
              </div>
              <div className="text-search">
                <input
                  className="onboard-input"
                  type="text"
                  placeholder="Search for anything..."
                />
              </div>
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
              <div className="notss">
                <MdNotificationsActive />
              </div>
            </div>
            <div className="navthree">
              <div className="pics-img">
                <img className="picss" src={Pics} alt="" srcset="" />
              </div>
              <div className="nav-three">
                <b className="adeleke">Adeleke Peters</b>
                <span className="ade-mail">Adelekepet20@gmail.com</span>
              </div>
            </div>
          </div>
        </section>
      </navbar>
      {/* End of NavBar */}

      <div className="Dsec">
        <div className="D-sec">
          <div className="food-platform">
            <div style={{
              display:"flex",
              alignItems:"center",
              gap:"10px"
            }}>
              <span className="welcome-food">
                Welcome to TM30 Food Platform
              </span>
              <div className="border-meal"></div>
            </div>

            <div>
              <h1 className="hone" style={{ margin: "0" }}>
                Order your best meal anytime.
              </h1>
              <span className="welcome-two">
                Delicious food is waiting for you
              </span>
            </div>
          </div>
          <div className="platform-img">
            <img
              className="ricedbox"
              style={{
                width: "65%",
              }}
              src={foodlogo}
              alt=""
            />
          </div>
        </div>
      </div>
      <Vendor />
      <HotDeals />
      <Collab />
      <Table />
    </div>
  );
};

export default Onboard;
