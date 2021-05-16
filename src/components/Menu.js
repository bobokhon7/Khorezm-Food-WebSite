import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { BuyBtn } from "./Card/style";
import { HeartOutlined } from "@ant-design/icons";

const Menu = ({ items }) => {
  const [food, setFood] = useContext(CartContext);
  const addToCart = (menuItem) => {
    setFood([...food, menuItem]);
  };
  return (
    <div className="section-center" style={{ marginTop: "30px" }}>
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
              {/* <button className="orderBtn">
                
              </button> */}
              <BuyBtn onClick={() => addToCart(menuItem)}>Order</BuyBtn>{" "}
              <span
                style={{ fontSize: "20px", color: "red", marginLeft: "10px" }}
              >
                <HeartOutlined />
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
