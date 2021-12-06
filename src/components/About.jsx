import React from "react";
import Common from "./Common";

function About() {
  return (
    <>
      <Common
        heading={"Welcome to About page"}
        reactWeb={"reactWeb"}
        btname={"contact now"}
        router={"/contact"}
      />
    </>
  );
}

export default About;
