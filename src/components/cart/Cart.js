import React from "react";
import "./Cart.css";

export default function Cart({ cart }) {
  console.log(cart);
  let total = 0;
  for (let singleCart of cart) {
    total = total + singleCart.income;
  }
  return (
    <div className="cart-container">
      <h2>Your Added Total :{cart.length} </h2>
      <h3>Your Total Cost for FWT is : ${total}</h3>
      <div className="hero-name">
        {cart.map((info) => (
          <div className="mini-cart">
            <div className="name-only">
              <h3 key={info.id}>Name: {info.name}</h3>
            </div>
            <div className="mini-cart-img">
              <img src={info.image} alt={info.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
