import React, { useState } from "react";

const Items = ({ cart, setCart }) => {
  const [stock, setStock] = useState([
    {
      id: 1,
      name: "Shoes",
      price: 299,
      img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Shoes",
      price: 299,
      img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Shoes",
      price: 299,
      img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "Shoes",
      price: 299,
      img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]);

  const onAdd = (item) => {
    const incart = cart.find((x) => x.id === item.id);
    {
      if (incart) {
        setCart(
          cart.map((x) =>
            incart.id === x.id
              ? { ...incart, qty: (incart.qty = incart.qty + 1) }
              : x
          )
        );
      } else {
        setCart([...cart, { ...item, qty: 1 }]);
      }
    }
  };

  const removeItem = (item) => {
    const removethis = cart.find((x) => x.id === item.id);
    if (removethis.qty == 1) {
      setCart(cart.filter((x) => x.id !== removethis.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id == removethis.id ? { ...x, qty: (x.qty = x.qty - 1) } : x
        )
      );
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-4  :md grid md:grid-cols-2 md:grid-rows-2 ">
        {stock.map((item, index) => (
          <div key={index} className="p-4 shadow-md rounded-lg m-4 ">
            <h2 className="text-center ">
              <b>{item.name}</b>
            </h2>
            <img src={item.img} alt={item.name} className="object-contain" />
            <div className="flex items-center justify-center pt-4">
              <p className="px-4">
                <b className="text-xl">${item.price}</b>
              </p>
              <button
                onClick={() => onAdd(item)}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
              <button
                onClick={() => removeItem(item)}
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
