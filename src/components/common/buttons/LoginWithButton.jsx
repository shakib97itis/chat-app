import PropTypes from "prop-types";
import React from "react";

function LoginWithButton({ className, text, FaIcon }) {
  return (
    <button className="flex items-center gap-2.5 rounded-lg border border-deep-sea px-7 py-5 pe-16 font-sans font-semibold text-deep-sea">
      <FaIcon className="align-middle text-3xl" />
      <span>{text}</span>
    </button>
  );
}

LoginWithButton.propTypes = {
  className: PropTypes.string,
  Faicon: PropTypes.element,
}

export default LoginWithButton;
