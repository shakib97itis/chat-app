const InputEmail = ({
  className,
  error,
  handleChange,
  id,
  label,
  name,
  placeholder,
  value,
  variant,
}) => {
  /**
   * varient == "one"
   */
  if (variant === "one") {
    return (
      <div
        className={`relative mt-4 flex flex-col lg:max-w-[372px] ${className}`}
      >
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
          type="email"
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
    );
  }

  /**
   * varient == "two"
   */

  if (variant == "two") {
    return (
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
          type="email"
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
    );
  }
};

export default InputEmail;
