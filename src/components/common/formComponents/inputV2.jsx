import PropTypes from "prop-types";

function Input({
  type,
  label,
  placeholder,
  name,
  id,
  className,
  value,
  handleChange,
  error,
}) {
  return (
    <>
      <div className={`flex flex-col lg:min-w-[372px] ${className}`}>
        <label
          className="text-space/70 font-sans text-sm font-medium transition-all duration-200 ease-in-out"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className={`border-space text-space focus:border-space/70 border-b-2 px-1 py-3 font-sans text-lg font-medium transition-all duration-200 ease-in-out focus:outline-none`}
          style={{
            borderColor: error ? "red" : "var(--color-space)",
          }}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {error && (
          <p className="text-red-500 mt-2 text-sm font-normal transition-all duration-200 ease-in-out">
            {error}
          </p>
        )}
      </div>
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
  value: "",
  handleChange: () => {},
  error: "",
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password"]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  varient: PropTypes.oneOf(["one", "two"]).isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.string,
};

export default Input;
