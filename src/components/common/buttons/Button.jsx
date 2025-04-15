import React from "react";
import PropTypes from "prop-types";

function Button({ children, className }) {
  return (
    <button
      className={`w-full cursor-pointer rounded-full bg-deep-sea py-4 font-serif text-xl font-semibold text-white transition hover:scale-105 ${className} `}
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
