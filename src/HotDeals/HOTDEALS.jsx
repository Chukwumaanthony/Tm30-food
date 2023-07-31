import React from "react";
import "./hotdeals.css";
import Hotspring from "../image/hotsprings.png";

const HOTDEALS = () => {
  return (
    <div className="HOTDEALS">
      <div className="hotlogo">
        <span className="hot-logo">
          <img className="hotimg-sty" src={Hotspring} alt="" />
          <span className="Hotext">HotDeals</span>
          <span className="HR"></span>
        </span>
        <div className="fastt">
          <div className="fast-food">
            <span className="fastfood"> Fast food</span>
            <span className="fastfood"> Pastries</span>
            <span className="fastfood"> Breakfast</span>
            <span className="fastfood"> Tasty</span>
            <span className="fastfood"> Traditional</span>
          </div>

          <div className="fast-food">
            <span className="fastfood"> Pepper Soup</span>
            <span className="fastfood"> Local food</span>
            <span className="fastfood"> Pasta</span>
            <span className="fastfood"> Finger food</span>
            <span className="fastfood"> Lunch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOTDEALS;
