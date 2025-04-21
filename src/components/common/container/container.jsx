import React from "react";

const container = ({ children, className }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default container;
