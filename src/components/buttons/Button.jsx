import React from "react";
import PropTypes from "prop-types";

function Button({ children, className }) {
  return (
    <button
      className={`w-full cursor-pointer hover:scale-105 transition-transform rounded-full bg-space py-4 text-white ${className} `}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: null,
  className: "",
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
