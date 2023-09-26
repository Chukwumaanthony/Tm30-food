import React, { useState } from "react";
import "./counters.css";

function Counter({ supplementPrice, selectedItemsArray, supplementName }) {
  const [count, setCount] = useState(1);

  // const increment = () => {
  //   setCount((count) => count + 1);

  //   selectedItemsArray.push(supplementName);
  //   console.log(selectedItemsArray);
  // };

  // const decrement = () => {
  //   if (count > 1) setCount((count) => count - 1);
  //   // if(supplementName){

  //   // }

  //   const index = selectedItemsArray.indexOf(supplementName);
  //   if (index !== -1) {
  //     selectedItemsArray.splice(index, 1);
  //   }
  //   console.log(selectedItemsArray);
  // };

  return (
    <div className="counter-cont">
      <span>{count * supplementPrice}</span>
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
  );
}

export default Counter;
