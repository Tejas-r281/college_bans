import React from "react";
import sublist from "./Sub";
import "./Home.css";
import Classcom from "./Classcom";
import Card from "./Card";
import Ccard from "./Ccard";
function Home() {
  return (
    <div className="Home container">
      <div className="left">
        <div className="upperhalf shadow-lg m-2">
          {/* <h1>left upperhalf</h1> */}
          <div className="upperhalfleft ">
            {/* <h2>left upperhalfleft</h2>
             */}
            <div className="image">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
                alt=""
              />
            </div>
          </div>
          <div className="upperhalfright">
            {/* <h2>left upperhalfright</h2>
             */}
            <div className="up m-2 w-100 d-flex  flex-row justify-content-between">
              <div>
                <h2 className="text-dark">Vertika Garg</h2>
                <h6 className="heading">JEE ASPIRANT</h6>
              </div>
              <div>
                <button className="btn  btn-white">EDIT PROFILE</button>
              </div>
            </div>
            <br />
            <div>
              {sublist.map((sub, index) => {
                return <button className="btn m-2 p-1 btn-red">{sub}</button>;
              })}
            </div>
            <hr className="hori" />
            <br />
            <div className="p-2 ">
              The href attribute requ ires a valid value to be accessible. P
              rovide a valid, navigable address as t he href value. If you
              cannot provide a valid href, but still need the elemen t to
              resemble a link, use a button and change it with appropriate
              styles. Le arn more: https://github.com/jsx-eslin
              t/eslint-plugin-jsx-a11y/blob/HEAD/doc s/rules/anchor-is-valid.md
              jsx-a11y/a nchor-is-valid
            </div>
          </div>
        </div>
        <div className="lowerhalf">
          {/* <h1>left lower half</h1>
           */}
          <h1 className="heading">Upcoming Classes</h1>
          <p className="date">TODAY</p>
          <Classcom
            islive="true"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
            heading="JEE ADVANCED"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="4.00-6.00 PM"
          />
          <Classcom
            islive="false"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
            heading="JEE ADVANCED"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="8.00-9.00 PM"
          />
          <p className="date">16/09/21</p>
          <Classcom
            islive="false"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
            heading="JEE ADVANCED"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="4.00-6.00 PM"
          />
          <Classcom
            islive="false"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
            heading="JEE ADVANCED"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="8.00-9.00 PM"
          />
          <Classcom
            islive="false"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
            heading="JEE ADVANCED"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="4.00-6.00 PM"
          />
          <Classcom
            islive="false"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
            heading="JEE ADVANCED"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam."
            time="8.00-9.00 PM"
          />
        </div>
      </div>
      <div className="right">
        <div className="rightupperhalf">
          {/* <h1>right upperhalf</h1>
           */}
          <Card />
        </div>
        <div className="rightlowerhalf">
          {/* <h1>right lower half</h1> */}
          <h4 className="heading">My Courses</h4>
          <Ccard
            heading="vertika"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
          />
          <Ccard
            heading="vidisha"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
          />
          <Ccard
            heading="rahul"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
          />
          <Ccard
            heading="vertika"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
          />
          <Ccard
            heading="vertika"
            image="https://media-exp1.licdn.com/dms/image/C5603AQGtcVvdMAjlKA/profile-displayphoto-shrink_200_200/0/1636784088467?e=1644451200&v=beta&t=sll9xLmIWjHKPTEBqpntCv9Cch7OHh4SeKJwJz0_coA"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
