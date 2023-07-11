import React from "react";
import EGG from "../image/Englishbreakfast.png";
import Counter from "../Counters/counter";
import Radio from "../RadioButton/Radio";
import "./modaa.css";

const Moda = ({data}) => {

 console.log(data);
  return (
    <div>
      <div className="counter-img">
        <span className="img-naira">
          <img src={EGG} alt="" style={{width:"70px"}} />
          <span className="hundreds">&#8358;{data.Hundred}</span>
        </span>
        <span>
          <Counter/>
        </span>
      </div>
      <section className="take-req">
        <span className="Takeaway">Takeaway Pack</span>
        <span className="required">Required</span>
      </section>

      <section className="add-drink">
        <Radio/>
      </section>

      <section className="clear-btn">
      <span  className="Clr-all"style={{ cursor: "pointer" }}>
        <button className="canc-all">x</button>
        <span className="clear-all">Clear all</span>
      </span>

      <button className="btn-one">
        <button className="btn-two">ADD TO ORDER</button>
        <button className="btn-three">#1000.00</button>
      </button>
      </section>
    </div>
    
  );
};

export default Moda;


