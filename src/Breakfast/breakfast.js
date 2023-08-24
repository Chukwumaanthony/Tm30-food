import React, { useContext } from "react";
import "./break.css";
import FOOD from "../FoodServices/foods";
import phhouse from "../image/phhouse.png";
import star from "../image/Star.png";
import { BiSearch } from "react-icons/bi";
import { VendorContext } from "../ContextApi/VendorContextProvider";
import { Link } from "react-router-dom";

const Breakft = () => {
  const { data } = useContext(VendorContext);

  return (
    <div>
      <div className="father-two">
        <div className="exceptional">
          <section className="fathertwo">
            <span className="mamj">{data.businessName}</span>
            <span className="xeptional">Exceptional</span>
            <section className="taste-line">
              <span className="taste">Taste</span>
              <span>
                <img src={star} alt="" />
              </span>
              <span className="point49">4.9</span>
            </section>
          </section>
          <Link to="/Onboard" className="housevend">
            <span className="vends">Back to vendor</span>
            <img style={{ width: "30px" }} src={phhouse} alt="" />
          </Link>
        </div>
      </div>

      <div className="mamaj-input">
        <BiSearch />
        <input
          type="text"
          className="mamajinput"
          placeholder="Search in Mama J Bukka"
        />
      </div>
      {/* Break Fast */}
      <div className="Breakfast-div">
        <FOOD />
      </div>
      {/* Break Fast Ends */}
    </div>
  );
};

export default Breakft;
