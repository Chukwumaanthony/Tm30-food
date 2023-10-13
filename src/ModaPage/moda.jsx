import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import EGG from "../image/Englishbreakfast.png";
// import Counter from "../Counters/counter";
import Radio from "../RadioButton/Radio";
import "./modaa.css";

const Moda = ({ data, setShow }) => {
  const [count, setCount] = useState(1);
  const [supplementCount, setsupplementCount] = useState(1);
  const [cartItems, setcartItems] = useState([
    { itemId: `${data?.itemId}`, quantity: count, price: data?.itemPrice },
  ]);
  const [supplementItems, setsupplementItems] = useState([]);
  const [priceArr, setpriceArr] = useState([data?.itemPrice]);
  const vendorId = localStorage.getItem("vendorId");
  const getToken = localStorage.getItem("token");

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((count) => count - 1);
  };

  const closeModal = () => {
    setShow(false);
  };

  const handleAddToOrder = () => {
    console.log(cartItems);
    console.log(supplementItems);
    console.log(priceArr);
    let convertedSupplementsArr = [];

    totalItemPriceConverter();
    const convertedItemArr = cartItems.map((item) => {
      return { itemId: item.itemId, quantity: item.quantity };
    });
    convertedSupplementsArr = supplementItems
      ? supplementItems.map((item) => {
          return { supplementId: item.supplementId, quantity: item.quantity };
        })
      : [];
    const foodOrderObject = {
      cartItems: convertedItemArr,
      supplementItems: convertedSupplementsArr,
    };

    console.log(foodOrderObject);
    postOrder(foodOrderObject);
  };
  useEffect(() => {
    setcartItems(() => {
      return [
        { itemId: `${data?.itemId}`, quantity: count, price: data?.itemPrice },
      ];
    });
  }, [count]);

  const totalItemPriceConverter = () => {
    let totalSupplementPrice = 0;
    const itemPrice = cartItems.map((item) => {
      return Number(item.price) * item.quantity;
    });
    const supplementPrice = supplementItems.map((item) => {
      return Number(item.price) * item.quantity;
    });

    totalSupplementPrice = supplementPrice.reduce((currPice, nextPrice) => {
      return currPice + nextPrice;
    }, 0);
    const totalItemPrice = itemPrice.reduce((currPice, nextPrice) => {
      return currPice + nextPrice;
    }, 0);
    const totalPrice = totalItemPrice + totalSupplementPrice;
    return totalPrice;
  };

  const clearAllOrder = () => {
    setsupplementItems([]);
    setCount(1);
    setcartItems([
      { itemId: `${data?.itemId}`, quantity: 1, price: data?.itemPrice },
    ]);
    setsupplementCount(1);
  };

  useEffect(() => {}, [cartItems, supplementItems]);

  const postOrder = async (body) => {
    const response = await fetch(
      `http://89.38.135.41:7654/api/orders/add-to-cart?vendorId=${vendorId}`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken}`,
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    if (data?.status === true) {
      window.location.reload();
      closeModal();
    }
  };

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
          clearAllOrder={clearAllOrder}
        />
      </section>

      <section className="clear-btn">
        <span
          className="Clr-all"
          style={{ cursor: "pointer" }}
          onClick={clearAllOrder}
        >
          <button className="canc-all">x</button>
          <span className="clear-all">Clear all</span>
        </span>

        <button className="btn-one">
          <button className="btn-two" onClick={handleAddToOrder}>
            ADD TO ORDER
          </button>
          <button className="btn-three">₦ {totalItemPriceConverter()}</button>
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
