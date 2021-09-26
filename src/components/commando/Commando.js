import React from "react";
import "./Commando.css";

export default function Commando({ commandoInfo, handleClick }) {
  const { name, born, died, image, income, Age } = commandoInfo;
  return (
    <div className="single-data">
      <div className="commando-img">
        <img src={image} alt={name} />
      </div>
      <div className="commando-info">
        <h4>Name :{name}</h4>
        <p>Born:{born}</p>
        <p>Died:{died}</p>
        <p>Age: {Age}</p>
        <p>You have to pay:${income}</p>
        <button
          onClick={() => handleClick(commandoInfo)}
          type="button"
          className="btn"
        >
          Add Commanders
        </button>
      </div>
    </div>
  );
}
