import React from "react";
import "./Commando.css";
// front awsome icon
import { FaBookmark } from "react-icons/fa";

export default function Commando({ commandoInfo, handleClick }) {
  // destucturing data
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
          <FaBookmark className="icons" /> Add Commanders
        </button>
      </div>
    </div>
  );
}
