import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsDisplayed, setCartIsDisplayed] = useState(false);

  const showCartHandler = () => {
    setCartIsDisplayed(true);
  };
  const hideCartHandler = () => {
    setCartIsDisplayed(false);
  };

  return (
    <CartProvider>
      {cartIsDisplayed && <Cart onClose={hideCartHandler} />}
      <Header onDisplayCart={showCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
