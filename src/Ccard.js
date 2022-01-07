import React from "react";
import "./Ccard.css";

function Ccard({heading,image}) {
  return (
    <div className="Ccard  shadow-lg p-3 m-2">
      <div className="image3">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="right3">
        <h5 className="heading">{heading}</h5>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates, quisquam.
        </p>
        {/* create 5 stars */}
        <p className="stars">⭐ ⭐ ⭐ ⭐ ⭐</p>
      </div>
    </div>
  );
}

export default Ccard;
