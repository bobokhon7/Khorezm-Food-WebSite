import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./components/CartContext";
import { FoodProvider } from "./components/Data";

ReactDOM.render(
  <React.StrictMode>
    <FoodProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FoodProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
