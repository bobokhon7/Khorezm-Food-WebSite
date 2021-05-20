import "./App.css";
import React from "react";
import Navbar from "./components/NavbarMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import SendMenu from "./components/SendMenu";
import Home from "./components/Home";
import Cart from "./components/Card/Cart";
import { useEffect, useState } from "react";
import { auth } from "../src/components/FireBase";
import SignIn from "./components/Login/SignIn";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <>
      {user ? (
        <Router>
          <div>
            <Navbar />
            {/* <Home /> */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/menu">
                <SendMenu />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </Router>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;
