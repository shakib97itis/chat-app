import PropTypes from "prop-types";

function Input({
  className,
  error,
  handleChange,
  id,
  label,
  name,
  placeholder,
  type,
  value,
}) {
  return (
    <>
      <div className={`flex flex-col lg:w-[372px] ${className}`}>
        <label
          className="font-primary text-sm font-medium text-secondary/70 transition-all duration-200 ease-in-out"
          htmlFor={id}
        >
          {label}:
        </label>
        <input
          className={`border-b-2 border-secondary px-1 py-3 font-primary text-lg font-medium text-secondary transition-all duration-200 ease-in-out focus:border-secondary/70 focus:outline-none`}
          style={{
            borderColor: error
              ? "var(--color-tertiary)"
              : "var(--color-secondary)",
          }}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <div className="min-h-[50px] px-1 py-2">
          {error && (
            <p className="font-primary text-sm font-normal text-tertiary transition-all duration-200 ease-in-out">
              {error}
            </p>
          )}
        </div>
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
