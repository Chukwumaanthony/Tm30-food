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

const EditProfile = () => {
  const { data } = useContext(ProfileContext);

  const getToken = localStorage.getItem("token");

  console.log(data);
  // const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState(data?.firstName || "");
  const [lastName, setlastName] = useState(data?.lastName || "");
  const [phone, setPhone] = useState(data?.phone) || "";

  const [profilePhoto, setprofilePhoto] = useState();

  const [email, setemail] = useState(data?.email || "");

  const [disablefname, setdisablefname] = useState(true);
  const [disablelname, setdisablelname] = useState(true);
  const [disablenum, setdisablenum] = useState(true);
  const [disableemail, setdisableemail] = useState(false);
  // console.log(profilePictureUrl);

  // const details = { firstName, lastName, phone, profilePhoto };
  // const formData = new FormData();

  // async function authenticateUser() {
  //   formData.append("firstName", firstName);
  //   formData.append("lastName", lastName);
  //   formData.append("phone", phone);
  //   formData.append("profilePhoto", profilePhoto);
  //   try {
  //     const response = await fetch(
  //       "http://89.38.135.41:7654/api/users/update-profile",
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-type": "multipart/form-data",
  //           Authorization: `Bearer ${getToken}`,
  //         },
  //         body: formData,
  //       }
  //     );
  //     const server = await response.json();
  //     console.log(server);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const authenticateUser = async () => {
  //   try {
  //     const myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");

  //     const raw = JSON.stringify({
  //       firstName: firstName,
  //       lastName: lastName,
  //       phone: phone,
  //       profilePhote: profilePhoto,
  //     });

  //     const requestOptions = {
  //       method: "PUT",
  //       headers: myHeaders,
  //       body: raw,
  //       redirect: "follow",
  //     };

  //     const response = await fetch(
  //       "http://89.38.135.41:7654/api/users/update-profile",
  //       requestOptions
  //     );
  //     const result = await response.json();
  //     console.log(result.data.accessToken);
  //     if (result.status) {
  //       setTimeout(() => {
  //         Navigate("/profile");
  //       }, 5000);
  //     }
  //     setMessage(result.message);
  //     console.log(result.status);
  //     console.log(message);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    formData.append("profilePhoto", profilePhoto);

    try {
      const response = await fetch("http://your-api-url/update-profile", {
        method: "PUT",
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${getToken}`,
        },
        body: formData,
      });
      const serverResponse = await response.json();
      console.log(serverResponse);
    } catch (error) {
      console.log(error);
    }
  };

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
                  Change profile pictures
                </div>
                <input
                  onChange={(e) => setprofilePhoto(e.target.files[0])}
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
