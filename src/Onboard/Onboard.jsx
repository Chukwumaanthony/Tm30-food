import React from "react";
import Onboardimg from "../image/tmonboard.svg";
import Nots from "../image/nots.png";
import Notss from "../image/notss.png";
import Pics from "../image/pic.png";
import Vendor from "../vendor/vendor"
import { BiSearch } from "react-icons/bi";
import HotDeals from "../HotDeals/HOTDEALS";
import Collab from "../Collaborate/colab";
import Table from "../Onboardtable/table"
import "./onboard.css";

const Onboard = () => {
  return (
    <div className="Onboard">
        {/* NavBar  */}
      <navbar className="navbarr">
        <div className="inputlogo">
          <img className="onboardlogo" src={Onboardimg} alt="" />
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
            <img className="nots" src={Nots} alt="" />
            <img className="notss" src={Notss} alt="" />
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
      </navbar>
      {/* End of NavBar */}
            

      <div className="Dsec">
        <div className="D-sec">
          <span className="welcome-food">
            Welcome to TM30 Food Platform
          </span>
           <h1 className="hone" style={{margin: '0'}}>Order your best meal anytime.</h1>
           <span className="welcome-two">Delicious food is waiting for you</span>
        </div>
      </div>
        <Vendor/>
        <HotDeals/>
        <Collab/>
        <Table/>
    </div>
  );
};

export default Onboard;
