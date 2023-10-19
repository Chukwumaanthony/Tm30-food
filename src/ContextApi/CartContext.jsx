import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const addedTtoCardOrder = [];

  return (
    <CartContext.Provider value={{ addedTtoCardOrder: addedTtoCardOrder }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
