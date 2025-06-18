import React from "react";
import PropTypes from "prop-types";

function Button({ children, className }) {
  return (
    <button
      className={`bg-deep-sea text-white w-full cursor-pointer rounded-full py-4 font-serif text-xl font-semibold transition hover:scale-105 ${className} `}
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
