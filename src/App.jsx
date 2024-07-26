import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  let nameValue = useRef("");
  let emailValue = useRef("");
  let lastNameValue = useRef("");
  let companyValue = useRef("");
  let PhysicalAddress = useRef("");
  let year = useRef("");
  let month = useRef("");
  let day = useRef("");
  function handClick(event) {
    if (
      nameValue == "" ||
      emailValue == "" ||
      lastNameValue == "" ||
      companyValue == "" ||
      PhysicalAddress == "" ||
      year == "" ||
      month == "" ||
      day == "" ||
      nameValue.current.value == "" ||
      emailValue.current.value == "" ||
      lastNameValue.current.value == "" ||
      companyValue.current.value == "" ||
      PhysicalAddress.current.value == "" ||
      year.current.value == "" ||
      month.current.value == "" ||
      day.current.value == ""
    ) {
      alert("please fill in all inputs");
      return;
    }
    if (emailValue.current.value.includes("@gmail.com")) {
    } else {
      alert("please correct your email");
      return;
    }
    if (PhysicalAddress.current.value.length < 5) {
      alert("address is too short");
      return;
    }
    if (companyValue.current.value.length < 2) {
      alert("company name is too short");
    }
    let obj = {
      name: nameValue.current.value,
      email: emailValue.current.value,
      lastName: lastNameValue.current.value,
      company: companyValue.current.value,
      PhysicalAddress: PhysicalAddress.current.value,
      age: year,
      month,
      day,
    };

    console.log(obj);
  }
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
            <input ref={nameValue} placeholder="First name" type="text" />
          </div>
          <div className="input">
            <p className="input-heading">Last name</p>
            <input ref={lastNameValue} type="text" placeholder="Last name" />
          </div>
        </div>
        <div className="input">
          <p className="input-heading">Email Address</p>
          <input ref={emailValue} type="text" placeholder="Email Address" />
        </div>
        <div className="input">
          <p className="input-heading">Company</p>
          <input ref={companyValue} type="text" placeholder="Company" />
        </div>
        <div className="input">
          <p className="input-heading">Physical Address</p>
          <input
            ref={PhysicalAddress}
            type="text"
            placeholder="Physical Address"
          />
        </div>
        <div className="date-of-birthday">
          <p>Date of your birthday</p>
          <input ref={year} placeholder="Year" type="number" />
          <input ref={month} placeholder="Month" type="number" />
          <input ref={day} placeholder="Day" type="number" />
        </div>
      </div>
      <button onClick={handClick}>continue</button>
    </div>
  );
}

export default App;
