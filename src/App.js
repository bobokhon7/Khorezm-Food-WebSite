import "./App.css";
import React, { useContext } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/SendMenu";
import Home from "./components/Home/Home";
import Cart from "./components/Card/Cart";
import SignOut from "./components/SignOut/SignOut";
import { useEffect, useState } from "react";
import { auth } from "./components/FireBase/FireBase";
import SignIn from "./components/Login/SignIn";
import Navbar from "create-react-nav";
import { CartContext } from "../src/components/Context/CartContext";
function App() {
  const [data] = useContext(CartContext);
  const links = [
    ["/", "Home", Home],
    ["/menu", "Menu", Menu],
    ["/contact", "Contact", Contact],
    ["/about", "About", About],
    ["/cart", `Cart(${data.length})`, Cart],
    ["/signOut", "SignOut", SignOut],
  ];
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
        <Navbar logoTxt="Khorezm Food" yToggle="true" routes={links} />
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;
