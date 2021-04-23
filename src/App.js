import "./App.css";
import Data from "./Data";
import Catogry from "./Catogry";
import Menu from "./Menu";
import React, { useState } from "react";
import Navbar from "./NavbarMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import News from "./News";
import Contact from "./Contact";
function App() {
  const [menuItems, setMenuItems] = useState(Data);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(Data);
      return;
    }
    const newItems = Data.filter((data) => data.category === category);
    setMenuItems(newItems);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/menu">
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
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
