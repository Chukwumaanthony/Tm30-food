import React, { useContext } from "react";
import Sidebar from "../SidebarDash/Sidebar";
import Navbar from "../components/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
// import Pics from "../image/pic.png";
import Changeprofile from "../assets/images/lucide_edit.png";
import Deleteprofile from "../assets/images/Vector.png";

import "./profile.css";
import { Link } from "react-router-dom";
import { ProfileContext } from "../ContextApi/ProfileContext";

const Profile = () => {
  const { data } = useContext(ProfileContext);

  return (
    <div className="ni">
      <Sidebar />
      <div className="nnna">
        <Navbar />
        <div className="prod-padd">
          <span className="backicon">
            <FaLongArrowAltLeft />
            Back
          </span>
          <div className="back-img">
            <section className="Papawelcome">
              <section className="Welcomepeter">
                <span className="hipeter">Hi, {data.firstName}</span>
                <span className="welcomepeter">Welcome to your profile!</span>
              </section>
              <section className="ade-image">
                {data.lastName} {data.firstName}
                <img
                  className="picss"
                  src={data.profilePictureUrl}
                  alt=""
                  srcset=""
                />{" "}
              </section>
            </section>
          </div>
          <section className="dpicssect">
            <div className="pics-change-delete">
              <span className="image-profine">
                <img
                  className="picss"
                  src={data.profilePictureUrl}
                  alt=""
                  srcset=""
                />{" "}
              </span>
              <span className="changeprofiles">
                <div className="prof-pics">
                  <img style={{ width: "18px" }} src={Changeprofile} alt="" />
                  Change profile picture
                </div>
                <div className="prof-pics">
                  <img style={{ width: "20px" }} src={Deleteprofile} alt="" />
                  Delete profile picture
                </div>
              </span>
            </div>
            <div className="picdelsel">
              <span
                style={{ borderBottom: "1px solid #ececec" }}
                className="picdel"
              >
                <label htmlFor="" className="firstnamelabel">
                  First Name
                </label>
                <span className="ade-leke">{data.firstName}</span>
              </span>
              <span
                style={{
                  borderLeft: "1px solid #ececec",
                  borderBottom: "1px solid #ececec",
                }}
                className="picdel"
              >
                <label htmlFor="" className="firstnamelabel">
                  Last Name
                </label>
                <span className="ade-leke">{data.lastName}</span>
              </span>
              <span className="picdel">
                <label htmlFor="" className="firstnamelabel">
                  Email Address{" "}
                </label>
                <span className="ade-leke">{data.email}</span>
              </span>
              <span
                style={{ borderLeft: "1px solid #ececec" }}
                className="picdel"
              >
                <label htmlFor="" className="firstnamelabel">
                  Phone Number
                </label>
                <span className="ade-leke">{data.phone}</span>
              </span>
            </div>
            <Link to="/prof" className="prof-butdiv">
              <button className="edit-prof">Edit Profile</button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
