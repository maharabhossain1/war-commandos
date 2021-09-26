import React, { useEffect } from "react";
import { useState } from "react";
import "./Commandos.css";
import Commando from "../commando/Commando";
import Cart from "../cart/Cart";

export default function Commandos() {
  const [commandos, setCommandos] = useState([]);
  const [cart, setCart] = useState([]);
  // event handler function
  const handleClick = (element) => {
    const newCart = [...cart, element];
    setCart(newCart);
    console.log(element);
  };
  // data fetching from public folder
  useEffect(() => {
    fetch("./commanders.JSON")
      .then((res) => res.json())
      .then((data) => {
        setCommandos(data);
      });
  }, []);
  return (
    <div className="main-section">
      <div className="commando-list">
        {commandos.map((commandoInfo) => (
          <Commando
            key={commandoInfo.id}
            handleClick={handleClick}
            commandoInfo={commandoInfo}
          />
        ))}
      </div>
      <div className="choice-list">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}
