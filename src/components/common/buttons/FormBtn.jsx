import PropTypes from "prop-types";

const FormBtn = ({ children, variant, className, type, onClick }) => {
  if (variant === "one") {
    return (
      <button
        onClick={onClick}
        type={type}
        className="w-full cursor-pointer rounded-full bg-primary py-4 font-primary text-xl font-semibold text-neutral-01 transition hover:bg-primary-shade-1 lg:max-w-[372px]"
      >
        {children}
      </button>
    );
  }

  if (variant === "two") {
    return (
      <button
        onClick={onClick}
        type={type}
        className="w-full cursor-pointer rounded-lg bg-primary py-4 font-primary text-xl font-semibold text-neutral-01 transition hover:bg-primary-shade-1"
      >
        {children}
      </button>
    );
  }

  if (variant === "three") {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`mb-8 cursor-pointer rounded-lg border border-neutral-04 px-7 py-5 font-primary text-sm font-semibold text-secondary ${className}`}
      >
        {children}
      </button>
    );
  }
};

FormBtn.defaultProps = {
  variant: "one",
  className: "",
  type: "button",
  onClick: () => {},
};

FormBtn.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["one", "two", "three"]),
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
};

export default FormBtn;
