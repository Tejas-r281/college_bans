import react from "react";
import classlist from "./Class";
import "./Classcom.css";

function Classcom() {

  return (
    <div className="Classcom shadow p-3 mb-5 bg-white rounded">
      <div className="left1">
        <div className="image1">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
            alt=""
          />
        </div>
      </div>
      <div className="right1">
        <div className="upper">
          <div className="desc">
            <h4>class heading</h4>
          </div>
          <div className="time">
            {/* time */}
            <button className="btn btn-red">4.00-6.00 PM</button>
          </div>
        </div>
        {/* <div className="middle"> */}
        <p className="middle">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates, quisquam.
        </p>
        {/* </div> */}
        <div className="lower">
          <button type="button" class="btn btn-primary ">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
}
export default Classcom;
