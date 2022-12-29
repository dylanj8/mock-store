import React, { useState } from "react";
import "./App.css";
import Items from "./Items";
import Navbar from "./Navbar";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Navbar cart={cart} setCart={setCart} />
      <Items cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
