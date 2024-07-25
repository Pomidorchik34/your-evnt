import React, { useState, useRef } from "react";
import "./App.css";
// let nameValue = useRef("");
// let emailValue = useRef("");
// let lastNameValue = useRef("");
// let companyValue = useRef("");
// let PhysicalAddress = useRef("");
function App() {
  return (
    <div className="container">
      <h1 className="heading">
        <i className="fa-regular fa-star"></i>YourEvent
      </h1>
      <p className="online-reg">Online Registration</p>
      <div className="inputs">
        <div className="cont">
          <div className="input">
            <p className="input-heading">First name</p>
            <input placeholder="First name" type="text" />
          </div>
          <div className="input">
            <p className="input-heading">Last name</p>
            <input type="text" placeholder="Last name" />
          </div>
        </div>
        <div className="input">
          <p className="input-heading">Email Address</p>
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="input">
          <p className="input-heading">Company</p>
          <input type="text" placeholder="Company" />
        </div>
        <div className="input">
          <p className="input-heading">Physical Address</p>
          <input type="text" placeholder="Physical Address" />
        </div>
        <div className="date-of-birthday">
          <p>Date of your birthday</p>
          <input placeholder="Year" type="number" />
          <input placeholder="Month" type="number" />
          <input placeholder="Day" type="number" />
        </div>
      </div>
      <button>continue</button>
    </div>
  );
}

export default App;
