import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useHistory } from "react-router-dom";
import { BuyBtn1 } from "./style";
import { DoubleLeftOutlined, HeartOutlined } from "@ant-design/icons";

const Cart = () => {
  const [data, setData] = useContext(CartContext);

  const removeFromCart = (id) => {
    const filterFood = data.filter((food) => food.id !== id);
    setData(filterFood);
  };

  let history = useHistory();

  function handleClick() {
    history.push("/menu");
  }

  return (
    <div
      style={{
        padding: "150px",
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
      }}
    >
      {data.length === 0 ? (
        <h1 style={{ marginTop: "30px", fontSize: "50px", color: "red " }}>
          Cart is empty!! Please Order!!
        </h1>
      ) : (
        <div>
          {data.map((food) => {
            const { id, title, desc, img, price } = food;
            return (
              <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title} </h4>
                    <h4> ₩{price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(id)}
                  >
                    Cancel  
                  </button>
                </div>
              </article>
            );
          })}
          <h3 style={{ marginTop: "30px", fontSize: "50px", color: "red " }}>
            Total Price: ₩
            {data.reduce((total, currentItem) => {
              return total + Number(currentItem.price);
            }, 0)}
          </h3>
          <BuyBtn1 onClick={handleClick}>
            <DoubleLeftOutlined />
            Continue Ordering
          </BuyBtn1>{" "}
        </div>
      )}
    </div>
  );
};

export default Cart;
