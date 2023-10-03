// import React, { useState } from "react";
// import "./settings.css";
// import Sidebar from "../SidebarDash/Sidebar";
// import Navbar from "../components/Navbar";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import Newpass from "../image/crtpass.png";
// import SecondSet from "../SetDsecond/settwo";
// // import { BiLinkAlt } from 'react-icons/bi';
// import { Link } from "react-router-dom";
// import Addnewcard from "../components/Newcard";

// const Settin = () => {
//   const [Cards, setCards] = useState(true);
//   const [AddNew, setAddNew] = useState(false);

//   const [inputType, setInputType] = useState("password");
//   const [show, setshow] = useState(false);

//   const handleShow = () => {
//     setshow(!show);
//     setInputType(inputType === "password" ? "text" : "password");
//   };
//   return (
//     <div className="ni">
//       <Sidebar />
//       <div className="nnna">
//         <Navbar />
//         <div className="set-afternav">
//           <section className="pass-sectt">
//             <div className="change-pass">
//               <span className="change-text">Change Password</span>
//               <span className="can-change">Here you can change password</span>
//             </div>

//             <section className="setting-allinput">
//               <span className="fatherset-pass">
//                 <div className="label-gap">
//                   <label className="pass-label" htmlFor="password">
//                     Current password
//                   </label>
//                   <div className="Sett-Pass">
//                     <input
//                       className="sett-pas"
//                       type={inputType}
//                       placeholder="Just to confirm its you"
//                     />
//                     <button onClick={handleShow} className="btns">
//                       {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//                     </button>
//                   </div>
//                 </div>
//                 <div className="label-gap">
//                   <label className="pass-label" htmlFor="password">
//                     New password
//                   </label>
//                   <div className="Sett-Pass">
//                     <input
//                       className="sett-pas"
//                       type={inputType}
//                       placeholder="Password"
//                     />
//                     <button onClick={handleShow} className="btns">
//                       {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//                     </button>
//                   </div>
//                 </div>
//                 <div className="label-gap">
//                   <label className="pass-label" htmlFor="password">
//                     Confirm password
//                   </label>
//                   <div className="Sett-Pass">
//                     <input
//                       className="sett-pas"
//                       type={inputType}
//                       placeholder="Password"
//                     />
//                     <button onClick={handleShow} className="btns">
//                       {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//                     </button>
//                   </div>
//                 </div>
//               </span>

//               <button className="setting-btn">
//                 <img style={{ width: "20px" }} src={Newpass} alt="" />
//                 <span>Create New Password</span>
//               </button>
//             </section>
//           </section>
//           <section className="Card-sett">
//             <span className="walet">Wallet</span>
//             <Link className="add-newcard">
//               <span
//                 className="setcard-tex"
//                 onClick={() => {
//                   setCards(true);
//                   setAddNew(false);
//                 }}
//                 style={{
//                   color: Cards ? "#3fa4cd" : "",
//                   borderBottom: Cards ? "4px solid #3fa4cd" : "",
//                 }}
//               >
//                 Card
//               </span>
//               <span
//                 className="setadd-new"
//                 onClick={() => {
//                   setAddNew(true);
//                   setCards(false);
//                 }}
//                 style={{
//                   color: Cards ? "" : "#3fa4cd",
//                   borderBottom: Cards ? "" : "4px solid #3fa4cd",
//                 }}
//               >
//                 Add New Card
//               </span>
//             </Link>
//             {Cards && <SecondSet />}
//             {AddNew && <Addnewcard />}
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settin;
