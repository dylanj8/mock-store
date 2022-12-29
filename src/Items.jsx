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
      <div className="grid grid-cols-1 place-items-center  :md grid md:grid-cols-2 md:grid-rows-2 ">
        {stock.map((item, index) => (
          <div key={index} className="p-4">
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} className="object-contain " />
            <div className="flex">
              <p className="px-4">{item.price}</p>
              <button className="px-4" onClick={() => onAdd(item)}>
                Add to Cart
              </button>
              <button onClick={() => removeItem(item)}>Remove item</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
