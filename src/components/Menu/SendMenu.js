import React, { useContext } from "react";
import { FoodContext } from "../../mock/Data";
import Menu from "./Menu";

const SendMenu = () => {
  const [menuItems] = useContext(FoodContext);

  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>

            <Menu items={menuItems} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default SendMenu;
