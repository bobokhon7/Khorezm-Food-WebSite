import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const [data, setData] = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);
  const removeFromCart = (id) => {
    const filterFood = data.filter((food) => food.id !== id);
    setData(filterFood);
  };

  const calculateCost = () => {
    const cost = data.reduce((total, cur) => total + cur.count * cur.price, 0);
    setTotalCost(cost);
  };

  return (
    <div
      style={{
        padding: "150px",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {data.length === 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        <div>
          {/* <h2>Order List</h2> */}
          {data.map((food) => {
            const { id, title, img, price } = food;
            return (
              <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title} </h4>
                    <h4> ${price}</h4>
                  </header>
                  {/* <p className="item-text">{desc}</p> */}
                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            );
          })}
          {/* <h1>{calculateCost()}</h1> */}
        </div>
      )}
    </div>
  );
};

export default Cart;
