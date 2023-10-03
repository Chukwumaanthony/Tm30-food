import React from "react";
import "./tablerafce.css";
import Facebook from "../assets/images/Facebook.png";
import Twitter from "../assets/images/Twitter.png";
import Reserved from "../assets/images/reserved.png";

const table = () => {
  return (
    <section>
      <div className="parent-tb">
        <div className="places">
          <h3>Places</h3>
          <span>Lagos</span>
          <span>Abuja</span>
          <span>Ibadan</span>
          <span>Lekki - Lagos</span>
          <span>Island - Lagos</span>
          <span>Mainland - Lagos</span>
          <span>Yaba - Lagos</span>
          <span>Victoria Island - Lagos</span>
          <span>Ikoyi - Lagos</span>
        </div>
        <div className="places">
          <h3>Culinary Art</h3>
          <span>Nigerian Food</span>
          <span>Pasta</span>
          <span>African Food</span>
          <span>Sandwich</span>
          <span>Pizza</span>
          <span>Breakfast</span>
          <span>Traditional</span>
        </div>
        <div className="places">
          <h3>Popular Vendor</h3>
          <span>Mama J Bukka</span>
          <span>Choice Meal</span>
          <span>Kobe Delicious</span>
          <span>Gidi Grills</span>
          <span>Item 7 Meal</span>
          <span>Iya Skye Bukka Hut</span>
        </div>
        <div className="places">
          <h3>Collaboration</h3>
          <span>Sell on TM30 Food Platform</span>
          <span>Order for your company staffs</span>
        </div>
        <div className="places">
          <h3>TM30 Food Platform</h3>
          <span>About</span>
          <span>Help Page</span>
          <span>Terms and Conditions</span>
          <span>Privacy policy</span>
          <h3>Connect with us</h3>
          <span>
            <img width="20rem" src={Facebook} alt="" /> Facebook
          </span>
          <span>
            <img width="20rem" src={Twitter} alt="" />
            Twitter
          </span>
          <span className="facebook">
            <img width="20rem" src={Facebook} alt="" />
            Instagram
          </span>
        </div>
      </div>

      <footer>
        {" "}
        <img src={Reserved} alt="" />
        2023 TM30 Food Platform All rights reserved
      </footer>
    </section>
  );
};

export default table;
