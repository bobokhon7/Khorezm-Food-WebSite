// import React, { useContext } from "react";

// import { ShoppingCartOutlined } from "@ant-design/icons";

// import { Link } from "react-router-dom";
// import { CartContext } from "../Context/CartContext";
// import { auth } from "../FireBase/FireBase";
// import { SignOut } from "../Login/style";
// import Navbar from "create-react-nav";
// import About from "../About/About";
// import Home from "../Home/Home";
// const NavbarMenu = () => {
//   const [data] = useContext(CartContext);
//   const links = [
//     ["/", "Home", Home],
//     ["/about", "About", About],
//   ];
//   return (
//     <></>
//     <Navbar logoTxt="hello" yToggle="true" routes={links} />

//     <div className="navbar">

//       <ul>
//         <li>
//           <h3>Khorezm Food</h3>
//         </li>

//         <li style={{ float: "right", fontSize: "18px" }}>
//           <SignOut onClick={() => auth.signOut()}>Sign Out</SignOut>
//         </li>

//         <li style={{ float: "right", fontSize: "18px" }}>
//           <Link class="active" to="/cart">
//             <ShoppingCartOutlined /> ({data.length})
//           </Link>
//         </li>

//         <li style={{ float: "right" }}>
//           <Link to="/about">About</Link>
//         </li>
//         <li style={{ float: "right" }}>
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li style={{ float: "right" }}>
//           <Link to="/menu">Menu</Link>
//         </li>
//         <li style={{ float: "right" }}>
//           <Link to="/">Home</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default NavbarMenu;
