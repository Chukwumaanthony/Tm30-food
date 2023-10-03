import React from "react";
import "./collab.css";
import Collaborate from "../assets/images/Collaborate.png";
import Vend from "../assets/images/Vend.png";
import Vendone from "../assets/images/Vend2.png";

const Colab = () => {
  return (
    <div className="whole-coll">
      <div className="coll">
        <img src={Collaborate} alt="" className="collab-img" />
        <span className="collabo">Let's Collaborate</span>
      </div>

      <div className="hold-coll">
        <section className="vendone">
          <img className="vend-img" src={Vend} alt="" />
          <h2 className="vend-head">Become a Vendor</h2>
          <span className="expand-coll">
            Expand your food sales and get more customers.
          </span>
          <button className="collab-sign">Sign Up</button>
        </section>
        <section className="vendone">
          <img className="vend-img" src={Vendone} alt="" />
          <h2 className="vend-head">Register your Company</h2>
          <span className="expand-coll">
            Easy way to order delicious food for their staffs.
          </span>
          <button className="collab-sign">Sign Up</button>
        </section>
      </div>
    </div>
  );
};

export default Colab;
