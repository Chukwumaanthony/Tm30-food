import React from "react";
import "./tablerafce.css";
import Facebook from "../image/Facebook.png";
import Twitter from "../image/Twitter.png";
import Reserved from "../image/reserved.png";

const table = () => {
  return (
    <div className="parent">
      <div className="Table">
        <table className="table-line">
          <th className="places">Places</th>
          <tr className="tableline">
            <td>Lagos</td>
            <td>Abuja</td>
            <td>Ibadan</td>
            <td>Lekki - Lagos</td>
            <td>Island - Lagos</td>
            <td>Mainland - Lagos</td>
            <td>Yaba - Lagos</td>
            <td>Victoria Island - Lagos</td>
            <td>Ikoyi - Lagos</td>
          </tr>
        </table>
        <table className="table-line">
          <th className="places">Culinary Art</th>
          <tr className="tableline">
            <td>Nigerian Food</td>
            <td>Pasta</td>
            <td>African Food</td>
            <td>Sandwiches</td>
            <td>Pizza</td>
            <td>Breakfast</td>
            <td>Traditional</td>
          </tr>
        </table>
        <table className="table-line">
          <th className="places">Popular Vendor</th>
          <tr className="tableline">
            <td>Mama J Bukka</td>
            <td>Choice Meal</td>
            <td>Kobe Delicious</td>
            <td>Gidi Grills</td>
            <td>Item 7 Meal</td>
            <td>Iya Skye Bukka Hut</td>
          </tr>
        </table>
        <table className="table-line">
          <th className="places">Collaboration</th>
          <tr className="tableline">
            <td>Sell On TM30 Food Platform</td>
            <td>Order For your Company staffs</td>
          </tr>
        </table>
        <table className="table-line">
          <th className="places">TM30 Food Platform</th>
          <tr className="tableline">
            <td>About </td>
            <td>Help Page</td>
            <td>Terms and Conditions</td>
            <td>Privacy Policy</td>
          </tr>
          <th className="places">Connect with us</th>
          <tr className="tableline">
            <td className="tableline2">
                <img src={Facebook} style={{width:'15px'}} alt="" />
                Instagram
            </td>
            <td className="tableline2">
                <img src={Twitter} style={{width:'15px'}} alt="" />
                Twitter
            </td>
            <td className="tableline2">
                <img src={Facebook} style={{width:'15px'}} alt="" />
                Facebook
            </td>
          </tr>
        </table>
      </div>


      <section className="platres">
        <img src={Reserved} alt="" />
        <span>2023 TM30 Food Platform All rights reserved</span>
      </section>
    </div>
  );
};

export default table;
