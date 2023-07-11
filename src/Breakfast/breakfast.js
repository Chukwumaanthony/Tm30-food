import React  from "react";
import "./break.css";
import FOOD from "../FoodServices/foods";
import phhouse from "../image/phhouse.png"
import star from "../image/Star.png";
import { BiSearch } from "react-icons/bi";
// import React, { useState } from "react";
// import Rice from "../RICE/Rice";

const Breakft = () => {

  return (
    <div>

<div className="father-two">
                    <div className="exceptional">
                      <section className="fathertwo">
                        <span className="mamj">Mama J Bukka</span>
                        <span className="xeptional">Exceptional</span>
                        <section className="taste-line">
                          <span className="taste">Taste</span>
                          <span>
                            <img src={star} alt="" />
                          </span>
                          <span className="point49">4.9</span>
                        </section>
                      </section>
                      <section className="housevend">
                        <span className="vends">Vendor</span>
                        <img style={{width:"35px"}} src={phhouse} alt="" />
                      </section>
                    </div>

                  </div>

                  <div className="mamaj-input">
                    <BiSearch />
                    <input type="text" className="mamajinput" placeholder="Search in Mama J Bukka" />
                  </div>
      {/* Break Fast */}
      <div className="Breakfast-div">
        <section className="breakfast-cont">
          <span className="breakfast-text">Breakfast</span>
          <span className="lunch">Lunch</span>
          <span className="dinner">Dinner</span>
        </section>
       
          <FOOD/>

       
       
      </div>
      {/* Break Fast Ends */}
    </div>
  );
};

export default Breakft;
