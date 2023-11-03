import React, { useState, useEffect } from "react";
import styled from "styled-components";
const ProteinSides = ({
  supplementName,
  supplementPrice,
  supplementItems,
  setsupplementItems,
  supplementId,
  clearAllOrder,
}) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState();
  const [inputChecked, setinputChecked] = useState(false);

  const handleSelectChange = (e) => {
    const { checked, value, name } = e.target;
    if (checked) {
      setinputChecked(true);
      setPrice(value);
      setsupplementItems((prev) => {
        return [
          ...prev,
          {
            supplementId: name,
            quantity: count,
            price: value,
            // supplementName: name,
          },
        ];
      });
    } else {
      setinputChecked(false);
      setPrice();
      setsupplementItems((prev) => {
        return prev.filter((item) => {
          return item.supplementId !== name;
        });
      });
    }
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    if (inputChecked) {
      setsupplementItems((prev) => {
        const updatedItems = prev.map((item) => {
          if (item.supplementId === supplementId) {
            return {
              ...item,
              quantity: count,
              price: price,
              supplementName: supplementName,
            };
          }
          return item;
        });
        return updatedItems;
      });
    }
  }, [count, inputChecked, supplementId, setsupplementItems]);

  return (
    <Div
      className="protein-sides"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div className="namechecked">
        <input
          type="checkbox"
          name={supplementId}
          value={supplementPrice}
          onChange={handleSelectChange}
        />
        <p>{supplementName}</p>
      </div>
      <div className="counter-cont">
        <span className="supp-price">
          {count === 1 ? supplementPrice : count * supplementPrice}
        </span>
        <div className="dec-incre">
          <Button onClick={decrement} disabled={count === 1 || !inputChecked}>
            -
          </Button>
          <span>{count}</span>
          <Button onClick={increment} disabled={!inputChecked}>
            +
          </Button>
        </div>
      </div>
    </Div>
  );
};

export default ProteinSides;

const Button = styled.button`
  background: rgb(54, 170, 217);
  border: none;
  // width: 1.5rem;
  display: flex;
  // height: 1.5rem;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.1rem;
  &:disabled {
    background: #a3a3a3;
  }
`;
const Div = styled.section`
  .namechecked {
    display: flex;
    gap: 0.5rem;
  }
  .supp-price {
    width: 2.5rem;
  }
  .dec-incre {
    display: flex;
    width: 3.5rem;
    justify-content: space-between;
    align-items: center;
  }
`;
