import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Vendor from "../vendor/vendor";
import { MdNotificationsActive } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
import Onboardimg from "../assets/images/tmonboard.svg";
import Wave from "../assets/images/wave.png";
import Fooddesk from "../assets/images/onbordimg.png";
import HotDeals from "../components/Hotdeals";
import Collab from "../Collaborate/colab";
import Table from "../Onboardtable/table";
import Media from "../components/Mediainput";
import "./onboard.css";
import { ProfileContext } from "../ContextApi/ProfileContext";

const Onboard = () => {
  const { data } = useContext(ProfileContext);

  console.log(data);

  return (
    <div className="Onboard">
      {/* NavBar  */}
      <navbar className="navbarr-var">
        <section className="navbarr">
          <div className="inputlogo">
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
              <div className="notss">
                <MdNotificationsActive />
              </div>
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
          <img src={Fooddesk} alt="" />
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
      <Collab />
      <Table />
    </div>
  );
};

export default Onboard;
