import React from "react";
import web from "../images/reactWeb.jpg";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <>
      <div className="common row container mx-auto p-2 g-4">
        <div className="col-md-6 col-12 order-md-1 order-2 border">
          <h1 className="display-5 fw-bold">
            {props.heading}
            <span className="text-primary"> {props.reactWeb}</span>
          </h1>
          <p className="fw-normal">
            We are the team of talented developer making a Web App
          </p>
          <NavLink to={props.router}>
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill"
            >
              {props.btname}
            </button>
          </NavLink>
        </div>

        <div className="col-md-6 col-12 order-md-2 order-1 border">
          <img className="img-fluid" src={web} />
        </div>
      </div>
    </>
  );
}

export default Common;
