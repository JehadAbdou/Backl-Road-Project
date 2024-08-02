import React from "react";
import Titles from "./Titles";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section
      className="section"
      id="tours">
      <Titles
        title={"Featured"}
        subTitle={"tours"}
      />

      <Tour />
    </section>
  );
};

export default Tours;
