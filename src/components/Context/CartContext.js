import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <CartContext.Provider value={[menuItems, setMenuItems]}>
      {props.children}
    </CartContext.Provider>
  );
};
