import React from "react";
import "./Ccard.css";

function Ccard() {
  return (
    <div className="Ccard  shadow-lg p-3 m-2">
      <div className="image3">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
          alt=""
        />
      </div>
      <div className="right3">
        <h5 className="heading">Write here heading</h5>
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
