import PropTypes from "prop-types";

function Input({
  type,
  label,
  placeholder,
  name,
  id,
  className,
  varient,
  value,
  handleChange,
  error,
}) {
  return (
    <>
      {varient === "one" && (
        <div className={`relative mt-4 flex flex-col ${className}`}>
          <label
            className="absolute top-0 left-8 -translate-y-1/2 bg-white px-3 font-serif text-sm font-semibold text-space transition-all duration-200 ease-in-out"
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className={`rounded-lg border-2 px-10 py-4 font-serif text-lg font-medium text-space transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-space`}
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
            <p className="mt-2 text-sm font-normal text-red-500 transition-all duration-200 ease-in-out">
              {error}
            </p>
          )}
        </div>
      )}

      {varient === "two" && (
        <div className={`flex flex-col lg:min-w-[372px] ${className}`}>
          <label
            className="font-sans text-sm font-medium text-space/70 transition-all duration-200 ease-in-out"
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className={`border-b-2 border-space px-1 py-3 font-sans text-lg font-medium text-space transition-all duration-200 ease-in-out focus:outline-none focus:border-space/70`}
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
            <p className="mt-2 text-sm font-normal text-red-500 transition-all duration-200 ease-in-out">
              {error}
            </p>
          )}
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
