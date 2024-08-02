import React from "react";

const Titles = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
};

export default Titles;
