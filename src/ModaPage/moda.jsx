import React, { useEffect, useRef, useState, useContext } from "react";
import styled from "styled-components";
import Radio from "../RadioButton/Radio";
import "./modaa.css";
import { VendorContext } from "../ContextApi/VendorContextProvider";

const Moda = ({ data, setShow }) => {
  const { cartChecker, setCartChecker } = useContext(VendorContext);
  console.log(cartChecker);
  const [count, setCount] = useState(1);
  const [supplementCount, setsupplementCount] = useState(1);
  const [cartItems, setcartItems] = useState([
    {
      itemId: `${data?.itemId}`,
      itemName: `${data?.itemName}`,
      imageUrl: `${data?.imageUrl}`,
      quantity: count,
      price: data?.itemPrice,
    },
  ]);
  const [supplementItems, setsupplementItems] = useState([]);
  const [priceArr, setpriceArr] = useState([data?.itemPrice]);

  const GetarrToLocalstorage = JSON.parse(localStorage.getItem("food")) || [];

  const arrToLocalstorage = useRef(GetarrToLocalstorage);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((count) => count - 1);
  };

  console.log(GetarrToLocalstorage);

  const handleAddToOrder = () => {
    setShow(false);
    console.log(cartItems);
    console.log(supplementItems);
    console.log(priceArr);

    let convertedSupplementsArr = [];

    totalItemPriceConverter();
    const convertedItemArr = cartItems.map((item) => {
      return {
        itemId: item.itemId,
        itemName: `${data.itemName} `,
        imageUrl: `${data?.imageUrl}`,
        quantity: item.quantity,
      };
    });
    convertedSupplementsArr = supplementItems
      ? supplementItems.map((item) => {
          return {
            supplementId: item.supplementId,
            supplementName: item.supplementName,
            quantity: item.quantity,
            price: item.price,
          };
        })
      : [];
    const foodOrderObject = {
      cartItems: convertedItemArr,
      supplementItems: convertedSupplementsArr,
      totalPrice: totalItemPriceConverter(),
    };

    if (arrToLocalstorage.current.length) {
      arrToLocalstorage.current = [
        ...arrToLocalstorage.current,
        foodOrderObject,
      ];
    } else {
      arrToLocalstorage.current = [
        ...arrToLocalstorage.current,
        foodOrderObject,
      ];
    }
    localStorage.setItem("food", JSON.stringify(arrToLocalstorage.current));
    setCartChecker(!cartChecker);

    // postOrder(foodOrderObject);
  };
  useEffect(() => {
    setcartItems(() => {
      return [
        {
          itemId: `${data?.itemId}`,
          itemName: `${data?.itemName}`,
          quantity: count,
          price: data?.itemPrice,
        },
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

  // const postOrder = async (body) => {
  //   const response = await fetch(
  //     `http://89.38.135.41:7654/api/orders/add-to-cart?vendorId=${vendorId}`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify(body),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${getToken}`,
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   if (data?.status === true) {
  //     window.location.reload();
  //     closeModal();
  //   }
  // };

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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#36aad9",
              color: "white",
              borderRadius: ".1rem",
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
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.1rem;
  &:disabled {
    background: #a3a3a3;
  }
`;
