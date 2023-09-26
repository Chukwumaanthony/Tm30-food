import React, { useState, useContext } from "react";
import Sidebar from "../SidebarDash/Sidebar";
import Navbar from "../Navbar/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
// import { FiEdit } from "react-icons/fi";
// import Pics from "../image/pic.png";
import Changeprofile from "../image/lucide_edit.png";
import Deleteprofile from "../image/Vector.png";
import { ProfileContext } from "../ContextApi/ProfileContext";
import "./profile.css";
// import { Navigate } from "react-router-dom";
import EditableInput from "../Reuseable/EditableInput";
import axios from "axios";
import styled from "styled-components";

const EditProfile = () => {
  const { data } = useContext(ProfileContext);

  const getToken = localStorage.getItem("token");

  console.log(data);
  // const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState(data?.firstName || "");
  const [lastName, setlastName] = useState(data?.lastName || "");
  const [phone, setPhone] = useState(data?.phone) || "";

  // const [profilePhoto, setprofilePhoto] = useState();

  const [email, setemail] = useState(data?.email || "");

  const [disablefname, setdisablefname] = useState(true);
  const [disablelname, setdisablelname] = useState(true);
  const [disablenum, setdisablenum] = useState(true);
  const [disableemail, setdisableemail] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handfilechange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const config = {
    headers: {
      Authorization: `Bearer ${getToken}`,
      "Content-type": "application/x-www-form-urlencoded",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    formData.append("profilePhoto", selectedFile);
    axios
      .put(
        "http://89.38.135.41:7654/api/users/update-profile",
        formData,
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ni">
      <Sidebar />
      <div className="nnna">
        <Navbar />
        <Div className="prod-padd">
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
          <form encType="multipart/form-data" className="dpicssect">
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
                {/* <div className="prof-pics">
                  <img style={{ width: "18px" }} src={Changeprofile} alt="" />
                  Change profile pictures
                </div> */}
                <input
                  className="file-change"
                  onChange={handfilechange}
                  type="file"
                />
                <div className="prof-pics">
                  <img style={{ width: "20px" }} src={Deleteprofile} alt="" />
                  Delete profile picture
                </div>
              </span>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <EditableInput
                user={firstName}
                setUser={setFirstName}
                isDisabled={disablefname}
                setIsDisabled={setdisablefname}
                label={"First Name"}
              />
              <EditableInput
                user={lastName}
                setUser={setlastName}
                isDisabled={disablelname}
                setIsDisabled={setdisablelname}
                label={"Last Name"}
              />

              <EditableInput
                user={phone}
                setUser={setPhone}
                isDisabled={disablenum}
                setIsDisabled={setdisablenum}
                label={"Phone"}
              />

              <EditableInput
                user={email}
                setUser={setemail}
                isDisabled={disableemail}
                setIsDisabled={setdisableemail}
                label={"email"}
              />
            </div>
            <div className="prof-butdiv">
              <button onClick={handleSubmit} className="edit-prof">
                Save Changes
              </button>
            </div>
          </form>
        </Div>
      </div>
    </div>
  );
};

export default EditProfile;

const Div = styled.section`
  .file-change {
    border: 1px solid red;
  }
`;
