import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Menu = ({ items }) => {
  const [food, setFood] = useContext(CartContext);
  const addToCart = (menuItem) => {
    setFood([...food, menuItem]);
  };
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title} </h4>
                <h4> ₩{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <button className="orderBtn" onClick={() => addToCart(menuItem)}>
                Order
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
