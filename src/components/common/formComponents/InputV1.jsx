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
      <div className={`relative mt-4 flex flex-col ${className}`}>
        <label
          className="absolute top-0 left-8 z-10 -translate-y-1/2 bg-neutral-01 px-3 font-tertiary text-sm font-semibold text-secondary transition-all duration-200 ease-in-out"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className={`rounded-lg border-2 px-10 py-4 font-tertiary text-lg font-medium text-secondary transition-all duration-200 ease-in-out focus:ring-secondary focus:outline-0`}
          style={{
            borderColor: error ? "var(--color-tertiary)" : "var(--color-space)",
          }}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <div className="min-h-[45px] px-1 py-2">
          {error && (
            <p className="text-sm font-normal text-tertiary transition-all duration-200 ease-in-out">
              {error}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password"]),
  value: PropTypes.string.isrequired,
};

Input.defaultProps = {
  className: "",
  error: "",
  id: "",
  placeholder: "",
  type: "text",
};

export default Input;
