import react from "react";
import classlist from "./Class";
import "./Classcom.css";

function Classcom({heading,image,islive,content,time}) {


  return (
    <div className="Classcom shadow p-3 mb-5 bg-white rounded">
      <div className="left1">
        <div className="image1">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="right1">
        <div className="upper">
          <div className="desc">
            <h4>{heading}</h4>
          </div>
          <div className="time">
            {/* time */}
            <button className="btn btn-red">{time}</button>
          </div>
        </div>
        {/* <div className="middle"> */}
        <p className="middle">{content}</p>
        {/* </div> */}

        <div className="lower">
          {islive == "true" ? (
            <button type="button" className="btn btn-primary  ">
              JOIN NOW
            </button>
          ) : (
            <button type="button" className="btn btn-primary disabled ">
              JOIN NOW
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Classcom;
