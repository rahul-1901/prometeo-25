import React from "react";
import "./Heading.css";

const Heading = ({ title, subheading, alignment }) => {
  return (
    <div className="heading-main" style={{ textAlign: `${ alignment }` }}>
      <h1 className="heading-title">{title}</h1>
      <p className="heading-subtitle">{subheading}</p>
    </div>
  );
};

export default Heading;
