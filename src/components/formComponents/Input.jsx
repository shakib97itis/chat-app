import React from "react";
import PropTypes from "prop-types";

function Input({ type, label, placeholder, name, id, className }) {
  return (
    <div className={`relative mt-3.5 flex flex-col ${className}`}>
      <label
        className="absolute top-0 left-8 -translate-y-1/2 bg-white px-2.5 font-serif text-[14px] font-semibold text-space"
        htmlFor="emailId"
      >
        {label}
      </label>
      <input
        className={`rounded-[8.6px] border-[1.7px] border-space px-10 py-5 font-serif text-[20px] font-semibold text-space focus:outline-none`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  name: "",
  id: "",
  className: "",
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
