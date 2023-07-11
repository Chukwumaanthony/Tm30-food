import React from "react";
// import person from "../image/tabler.png";
import { RxPerson } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import Master from "../image/Mastercard 1.png";
import credit from "../image/sym_credit.png";
import "./newcard.css";
// import Monthyear from "../MonthYearinput/Yearinput";

const Newcard = () => {
  return (
    <section className="newcardz">
      <div className="cardnum-name">
        <section className="enter-hold">
          <label className="nameforcard" htmlFor="">
            Name on the card
          </label>
          <div className="Enter-name">
            <span className="setspan-icon">
              <RxPerson />
            </span>
            <input
              className="name-input"
              type="text"
              placeholder="Enter the name on the card"
            />
          </div>
        </section>
        <section className="enter-hold">
          <label className="nameforcard" htmlFor="">
            Card Number
          </label>
          <div className="Enter-name">
            <img style={{ width: "40px" }} src={Master} alt="" />
            <IoIosArrowDown />
            <input
              className="name-input"
              type="text"
              placeholder="xxxx xxxx xxxx"
            />
          </div>
        </section>
      </div>
      <div className="cardnum-name">
        <span className="enter-hold">
          <label className="nameforcard" htmlFor="">Expiry Date</label>
          <div >
          <input className="month-year" type="date" />
          </div>
          
        </span>
        <span className="enter-hold">
          <label className="nameforcard" htmlFor="">CVV</label>
          <div className="cvv-threedigit">
          <img style={{width:"25px"}} src={credit} alt="" />
          <input className="xxx-placehold" type="text" placeholder="xxx" />
          </div> 
        </span>
      </div>
<div className="btc-addcardd">
<button className="addcartt-btn">Add Card</button>
</div>
    </section>
  );
};

export default Newcard;
