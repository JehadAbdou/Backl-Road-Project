import React from "react";
import Titles from "./Titles";
import Service from "./service";
const Services = () => {
  return (
    <section
      className="section services"
      id="services">
      <Titles
        title={"our"}
        subTitle={"services"}
      />
      <Service />
    </section>
  );
};

export default Services;
