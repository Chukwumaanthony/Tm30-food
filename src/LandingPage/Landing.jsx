import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Onboardimg from "../image/tmonboard.svg";
import Vendor from "../vendor/vendor";
// import { BiSearch } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
// import { BsExclamationCircleFill } from "react-icons/bs";
// import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Wave from "../image/wave.png";
import HotDeals from "../HotDeals/HOTDEALS";
import Collab from "../Collaborate/colab";
import Table from "../Onboardtable/table";
import Fooddesk from "../image/onbordimg.png";
import Media from "./Mediainput";
import "./onboard.css";
import { ProfileContext } from "../ContextApi/ProfileContext";

const Onboard = () => {
  // const RecentTrx = [
  //   {
  //     Date: "7",
  //     Month: "Aug",
  //     Name: "Fund Deposit",
  //     Math: "+",
  //     Amount: "6,500",
  //     Id: "ID",
  //     No: "283947",
  //     Outcome: true,
  //   },
  //   {
  //     Date: "7",
  //     Month: "Aug",
  //     Name: "Food Purchased",
  //     Math: "-",
  //     Amount: "2,200",
  //     Id: "ID",
  //     No: "283947",
  //     Outcome: false,
  //   },
  // ];

  // const [loading, setLoading] = useState(true);

  // const Click = () => {
  //   setLoading(!loading);
  // };
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
