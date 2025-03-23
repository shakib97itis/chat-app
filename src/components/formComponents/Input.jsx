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
        <div className={`relative mt-3.5 flex flex-col ${className}`}>
          <label
            className="absolute top-0 left-8 -translate-y-1/2 bg-white px-2.5 font-serif text-[14px] font-semibold text-space transition-all duration-300 ease-in-out"
            htmlFor="emailId"
          >
            {label}
          </label>
          <input
            className={`rounded-[8.6px] border-[1.7px] border-space px-10 py-5 font-serif text-[20px] font-semibold text-space transition-all duration-300 ease-in-out focus:outline-none`}
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
            <p className="mt-2 text-[14px] font-normal text-red-600 transition-all duration-300 ease-in-out">
              {error}
            </p>
          )}
        </div>
      )}

      {varient === "two" && (
        <div className={`flex flex-col lg:min-w-[372px] ${className}`}>
          <label
            className="font-sans text-sm font-normal text-space/50 transition-all duration-300 ease-in-out"
            htmlFor="emailId"
          >
            {label}
          </label>
          <input
            className={`border-b-[1.7px] border-space px-1 py-4 font-sans text-xl font-semibold text-space transition-all duration-300 ease-in-out focus:outline-none`}
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
            <p className="mt-2 text-[14px] font-normal text-red-600 transition-all duration-300 ease-in-out">
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
