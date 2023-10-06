import React, { useState, useEffect } from "react";
import styled from "styled-components";
const ProteinSides = ({
  supplementName,
  supplementPrice,
  supplementItems,
  setsupplementItems,
  supplementId,
  priceArr,
  setpriceArr,
}) => {
  const [count, setCount] = useState(1);
  const [inputChecked, setinputChecked] = useState(false);

  const handleSelectChange = (e) => {
    const { checked, value, name } = e.target;
    if (checked) {
      setinputChecked(true);
      setsupplementItems((prev) => {
        return [...prev, { supplementId: name, quantity: count }];
      });
      setpriceArr((prev) => {
        return [...prev, supplementId];
      });
    } else {
      setinputChecked(false);
      setsupplementItems((prev) => {
        return prev.filter((item) => {
          return item.supplementId !== name;
        });
      });
      // setpriceArr((prev) => {
      //   return prev.filter((item) => {
      //     return item !==
      //   })
      // })
    }
    console.log(supplementItems);
  };

  // const increment = () => {
  //   setCount((prevCount) => prevCount + 1);
  //   alert(supplementId);
  //   setsupplementItems((prev) => {
  //     return prev.map((items) => {
  //       if (supplementId === items.id) {
  //         return { ...items, quantity: count };
  //       }
  //     });
  //   });
  // };
  // const decrement = () => {
  //   if (count > 1) {
  //     setCount((prevCount) => prevCount - 1);
  //     setsupplementItems((prevSelectedItems) =>
  //       prevSelectedItems.filter((item) => item !== supplementId)
  //     );
  //   }
  // };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(supplementPrice);
    // setpriceArr(())
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    // Whenever the count changes, update the supplementItems array
    if (inputChecked) {
      setsupplementItems((prev) => {
        const updatedItems = prev.map((item) => {
          if (item.supplementId === supplementId) {
            return { ...item, quantity: count };
          }
          return item;
        });
        return updatedItems;
      });
    }
  }, [count, inputChecked, supplementId, setsupplementItems]);
  // useEffect(() => {
  //   setsupplementItems(() => {
  //     return [{ supplementId: `${supplementId}`, quantity: count }];
  //   });
  // }, [count]);
  return (
    <div
      className="protein-sides"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <input
        type="checkbox"
        name={supplementId}
        value={supplementPrice}
        // checked={supplementItems.includes(supplementId)}
        onChange={handleSelectChange}
      />
      <p>{supplementName}</p>
      <div className="counter-cont">
        <span>{count === 1 ? supplementPrice : count * supplementPrice}</span>
        <Button onClick={decrement} disabled={count === 1 || !inputChecked}>
          -
        </Button>
        <span>{count}</span>
        <Button onClick={increment} disabled={!inputChecked}>
          +
        </Button>
      </div>
    </div>
  );
};

export default ProteinSides;

const Button = styled.button`
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
