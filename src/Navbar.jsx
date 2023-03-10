import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = ({ cart, setCart }) => {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  const handleCart = () => {
    setShowCart(!showCart);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="  md:flex justify-around">
      <h2 className="p-4 font-mono font-bold text-xl">Amazin Shop</h2>
      <ul className=" hidden md:flex content-evenly flex-wrap justify-evenly">
        <li className="mx-6 text-lg">Products</li>
        <li className="mx-6">
          <button onClick={handleCart} className=" text-lg">
            Cart ${totalPrice}
          </button>
        </li>
        <li className="mx-6 text-lg">Contact Us</li>
      </ul>
      <div className="absolute top-0 right-0 m-2">
        <AiOutlineMenu className="h-8 w-8 md:hidden " onClick={handleNav} />
      </div>
      {showNav ? (
        <div className="flex justify-center items-center h-screen md:hidden ">
          <ul>
            <li className="font-bold py-6 text-xl">Products</li>
            <li className="font-bold py-6 text-xl">
              <button onClick={handleCart}>Cart ${totalPrice}</button>
            </li>
            <li className="font-bold py-6 text-xl">Contact Us</li>
          </ul>
        </div>
      ) : null}

      {showCart ? (
        <div className="flex justify-center items-center h-screen "></div>
      ) : null}
    </div>
  );
};

export default Navbar;
