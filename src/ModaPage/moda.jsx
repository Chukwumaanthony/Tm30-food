import React, { useState } from "react";
// import EGG from "../image/Englishbreakfast.png";
// import Counter from "../Counters/counter";
import Radio from "../RadioButton/Radio";
import "./modaa.css";

const Moda = ({ data }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((count) => count - 1);
  };
  //  console.log(data);
  return (
    <div>
      <div className="counter-img">
        <span className="img-naira">
          <img src={data.imageUrl} alt="" style={{ width: "70px" }} />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <span className="hundreds">&#8358;{data.itemPrice * count}</span>
            <section className="take-req">
              <span className="Takeaway">Takeaway Pack</span>
              <span className="required">Required</span>
            </section>
          </div>
        </span>

        <div className="counter-cont">
          {/* <span>{count * supplementPrice}</span> */}
          <button
            style={{
              border: "none",
              width: "1.5rem",
              display: "flex",
              height: "1.5rem",
              alignItems: "center",
              justifyContent: "center",
              background: "#a3a3a3",
              color: "white",
              borderRadius: ".3rem",
            }}
            onClick={decrement}
          >
            -
          </button>
          <span count={count} style={{ display: "flex", alignItems: "center" }}>
            {" "}
            {count}
          </span>
          <button
            style={{
              border: "none",
              width: "1.5rem",
              display: "flex",
              height: "1.5rem",
              alignItems: "center",
              justifyContent: "center",
              background: "#36aad9",
              color: "white",
              borderRadius: ".3rem",
            }}
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>

      <section className="add-drink">
        <Radio />
      </section>

      <section className="clear-btn">
        <span className="Clr-all" style={{ cursor: "pointer" }}>
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
