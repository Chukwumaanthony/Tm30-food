import React from "react";
import "./vendors.css";
import Mamaj from "../image/Mama j.png";
import Star from "../image/Star.png";
import Choice from "../image/Choice M.png";
import Kobe from "../image/Kobe.png";
import Gidi from "../image/Gidi.png";
import Iya from "../image/Iya Skye.png";
import TKO from "../image/TKO.png";
import ITEM from "../image/Item77.png";
import Anoint from "../image/Anointing.png";
import Odobe from "../image/Odobe.png";
import Crown from "../image/Crown.png";
import Tega from "../image/Tega.png";
import Shop33 from "../image/Shop33.png";
import { Link } from "react-router-dom";

const vendor = () => {
  return (
    <div>
      <div>
        <h2 className="htwo">Top Vendors</h2>

        <div className="mamajline">
          <Link to="/dash">
          <section className="mamajsec">
            <span>
              <img className="mamaj" src={Mamaj} alt="" />
            </span>
            <span className="Mamajtext">Mama J Bukka</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(500+)</span>
            </span>
          </section>
          
          </Link>

          <section className="mamajsec">
            <span>
              <img className="mamaj" src={Choice} alt="" />
            </span>
            <span className="Mamajtext">Choice Meal</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.7</span>
              <span className="fhund">(500+)</span>
            </span>
          </section>

          <section className="mamajsec">
            <span>
              <img className="mamaj" src={Kobe} alt="" />
            </span>
            <span className="Mamajtext">Kobe Delicious</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(374)</span>
            </span>
          </section>

          <section className="mamajsec">
            <span>
              <img className="mamaj" src={Gidi} alt="" />
            </span>
            <span className="Mamajtext">Gidi Grills</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(404)</span>
            </span>
          </section>
        </div>
      </div>


      <div className="other-vendors">
        <h2 className="htwo">Other Vendors</h2>

        <div className="mamajline">
          <section className="mamajsec">
            <span>
              <img className="mamaj" src={Iya} alt="" />
            </span>
            <span className="Mamajtext">Iya Skye Bukka hut</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(500+)</span>
            </span>
          </section>

          <section className="mamajsec">
            <span>
              <img className="mamaj" src={TKO} alt="" />
            </span>
            <span className="Mamajtext">TKO</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(500+)</span>
            </span>
          </section>

          

          <section className="mamajsec">
            <span>
              <img className="mamaj" src={ITEM} alt="" />
            </span>
            <span className="Mamajtext">Item 7 Meal</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(374)</span>
            </span>
          </section>

          <section className="mamajsec">
            <span>
              <img className="mamaj" src={Anoint} alt="" />
            </span>
            <span className="Mamajtext">Anointing Bukka Spot</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(404)</span>
            </span>
          </section>
        </div>
        <div className="mamajline">
          <section className="mamajsec">
            <span>
              <img className="mamaj" src={Odobe} alt="" />
            </span>
            <span className="Mamajtext">Odobe Bukka</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(500+)</span>
            </span>
          </section>

          <section className="mamajsec">
            <span>
              <img className="mamaj" src={Crown} alt="" />
            </span>
            <span className="Mamajtext">Crown Meal</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(500+)</span>
            </span>
          </section>

          <section className="mamajsec">
            <span>
              <img className="mamaj" src={Tega} alt="" />
            </span>
            <span className="Mamajtext">Tega Delicious</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(374)</span>
            </span>
          </section>

          <section className="mamajsec">
            <span>
              <img className="mamaj" src={Shop33} alt="" />
            </span>
            <span className="Mamajtext">Shop 33 Pizza</span>
            <span className="starline">
              <img className="Dstar" src={Star} alt="" />
              <span className="fou9text">4.9</span>
              <span className="fhund">(404)</span>
            </span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default vendor;
