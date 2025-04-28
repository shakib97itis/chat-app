import React from "react";

const container = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-[1440px] flex min-h-dvh sm:p-2.5 ${className}`}>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default container;
