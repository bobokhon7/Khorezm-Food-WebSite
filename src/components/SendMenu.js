import React, { useContext } from "react";
import { FoodContext } from "./Data";
// import Catogry from "./Catogry";
import Menu from "./Menu";
import NavbarMenu from "./NavbarMenu";

const SendMenu = () => {
  const [menuItems] = useContext(FoodContext);
  // const [food, setFood] = useState([]);

  // const filterItems = (category) => {
  //   if (category === "all") {
  //     setMenuItems(menuItems);
  //     return;
  //   }
  //   const selectedCategory = menuItems.filter(
  //     (data) => data.category === category
  //   );
  //   setMenuItems(selectedCategory);
  // };

  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
            {/* <Catogry filterItems={filterItems} /> */}
            <Menu items={menuItems} />
          </div>
        </section>
      </main>
      <NavbarMenu />
    </div>
  );
};

export default SendMenu;
