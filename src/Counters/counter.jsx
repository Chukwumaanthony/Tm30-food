import React, { useState } from "react";
import "./counters.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-cont">
      <button onClick={decrement}>-</button>
      <span> {count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
