import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SidebarDash/Sidebar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Onboardimg from "../image/tmonboard.svg";
import "./withcard.css";
import { AiFillBank } from "react-icons/ai";
import { RiFileCopyFill } from "react-icons/ri";
import  toast from "react-hot-toast";
const WithCard = () => {
  const [amount, setAmount] = useState(2000);
  function HandleCopy() {
    navigator.clipboard
      .writeText(amount)
      .then(() => {
        toast.success("copied");
      })
      .catch((error) => {
        alert("Copy failed" + error);
      });
  }

  return (
    <div className="ni">
      <Sidebar />
      <div className="nnna">
        <Navbar />
        <div className="backcontcheck">
          <span className="backcheckout">
            <span className="dback">
              <FaLongArrowAltLeft />
              Back
            </span>
          </span>
        </div>

        <div className="withcard-cont">
          <section className="both-withcont">
            <div className="onboardD">
              <img
                style={{ width: "70px" }}
                className="onboardlogo"
                src={Onboardimg}
                alt=""
              />
            </div>
            <section className="withcard">
              <main className="Main-withcard">
                <div className="ussdtransact">
                  Make a transfer via USSD or bank transfer to the account below
                </div>
                <div className="bank-namec">
                  <label className="hops" htmlFor="">
                    Bank Name
                    <span className="hopebank">Hope Bank</span>
                  </label>
                  <label className="hops" htmlFor="">
                    Account Number
                    <span className="hopebank">2486937021</span>
                  </label>
                  <label className="hops" htmlFor="">
                    Account Number
                    <span className="hopebank">TM30 Foodpay</span>
                  </label>
                  <label className="hops" htmlFor="">
                    Amount
                    <span className="onbahk">
                      <span className="hopebank">&#8358;{amount}</span>
                      <span onClick={HandleCopy} className="copy-icon">
                        <RiFileCopyFill /> Copy
                       </span>
                    </span>
                  </label>
                </div>
                <div className="useacct">
                  Use this account for transaction only
                </div>
                <div className="homecomi">
                  <div className="homeicon">
                    <AiFillBank />
                  </div>
                </div>
                <div className="expin">
                  Expire in <span className="thirty-o">30.00</span>
                </div>
              </main>
            </section>
            <div className="sent-btn">
              <button className="mon-snt">I have sent the money</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WithCard;
