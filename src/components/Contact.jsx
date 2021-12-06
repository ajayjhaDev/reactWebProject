import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: " ",
    mobilenumber: " ",
    email: " ",
    msg: " ",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    alert(
      `My Name is ${data.fullname}. My mobile number is ${data.mobilenumber}. My Email is ${data.email} Here is What I want to say ${data.msg}`
    );
  };

  return (
    <>
      <div className="container p-5">
        <h1 className="text-center fw-bold mb-4">Contact Us</h1>
        <form onSubmit={formSubmit}>
          <div className="mb-4">
            <label for="exampleFormControlInput1" className="form-label">
              Full Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Full Name"
              name="fullname"
              value={data.fullname}
              onChange={InputEvent}
            />
          </div>
          <div className="mb-4">
            <label for="exampleFormControlInput1" className="form-label">
              Mobile Number:
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Mobile Number"
              name="mobilenumber"
              value={data.mobilenumber}
              onChange={InputEvent}
            />
          </div>
          <div className="mb-4">
            <label for="exampleFormControlInput1" className="form-label">
              Email Id:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="@gmail.com"
              name="email"
              value={data.email}
              onChange={InputEvent}
            />
          </div>
          <div className="mb-4">
            <label for="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="msg"
              value={data.msg}
              onChange={InputEvent}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
