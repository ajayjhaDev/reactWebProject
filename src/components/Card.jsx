import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="container col-10 col-md-4">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" />

          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <NavLink to="/contact" class="btn btn-primary">
              contact now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
