import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import EGG from "../image/Englishbreakfast.png";
// import Counter from "../Counters/counter";
import Radio from "../RadioButton/Radio";
import "./modaa.css";

const Moda = ({ data }) => {
  const [count, setCount] = useState(1);
  const [selectedItems, setselectedItems] = useState({});
  const [supplementCount, setsupplementCount] = useState(1);
  const [cartItems, setcartItems] = useState([
    { itemId: `${data?.itemId}`, quantity: count },
  ]);
  const [supplementItems, setsupplementItems] = useState([]);
  const [priceArr, setpriceArr] = useState([data?.itemPrice]);

  console.log(data);
  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((count) => count - 1);
  };
  let totalPrice = 0;

  const handleAddToOrder = () => {
    console.log(cartItems);
    console.log(supplementItems);
    console.log(priceArr);
  };
  useEffect(() => {
    setcartItems(() => {
      return [{ itemId: `${data?.itemId}`, quantity: count }];
    });
  }, [count]);
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
          <DecrementBtn onClick={decrement} disabled={count === 1}>
            -
          </DecrementBtn>
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
        <Radio
          supplementItems={supplementItems}
          setsupplementItems={setsupplementItems}
          supplementCount={supplementCount}
          setsupplementCount={setsupplementCount}
          priceArr={priceArr}
          setpriceArr={setpriceArr}
        />
      </section>

      <section className="clear-btn">
        <span className="Clr-all" style={{ cursor: "pointer" }}>
          <button className="canc-all">x</button>
          <span className="clear-all">Clear all</span>
        </span>

        <button className="btn-one">
          <button className="btn-two" onClick={handleAddToOrder}>
            ADD TO ORDER
          </button>
          <button className="btn-three">#{totalPrice}</button>
        </button>
      </section>
    </div>
  );
};

export default Moda;

const DecrementBtn = styled.button`
  background: rgb(54, 170, 217);
  border: none;
  width: 1.5rem;
  display: flex;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.3rem;
  &:disabled {
    background: #a3a3a3;
  }
`;
