import React, { useState } from "react";
import Data from "./Data";
import Catogry from "./Catogry";
import Menu from "./Menu";

const SendMenu = () => {
  const [menuItems, setMenuItems] = useState(Data);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(Data);
      return;
    }
    const selectedCategory = Data.filter((data) => data.category === category);
    setMenuItems(selectedCategory);
  };
  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
            <Catogry filterItems={filterItems} />
            <Menu items={menuItems} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default SendMenu;
