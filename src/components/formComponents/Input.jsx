import React from "react";
import PropTypes from "prop-types";

const varient = {
  one: "mb-7",
  two: "mb-3.5",
};

function Input({ type, label, placeholder, name, id, className, varient }) {
  return (
    <>
      {varient === "one" && (
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
      )}

      {varient === "two" && (
        <div className={`flex flex-col lg:min-w-[372px] ${className}`}>
          <label
            className="font-sans text-sm font-normal text-space/50"
            htmlFor="emailId"
          >
            {label}
          </label>
          <input
            className={`border-b-[1.7px] border-space px-1 py-4 font-sans text-xl font-semibold text-space focus:outline-none`}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
}

Input.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  name: "",
  id: "",
  className: "",
  varient: "one",
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  varient: PropTypes.string.isRequired,
};

export default Input;
