import React from "react";
import "./Card.css";
import Ccard from "./Ccard";

function Card() {
  return (
    // < className="rightside">
    <div className="card">
      <div className="card-body">
        <div className="leftimage">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
            alt=""
          />
        </div>
        <div className="right5">
          <h4>Any Any Doubts</h4>
          <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <button className="btn btn-white">
          Book your free Mentorship session now
        </button>
      </div>
    </div>
  );
}
export default Card;
