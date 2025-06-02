const FormBtn = ({ children, variant, className }) => {
  if (variant === "one") {
    return (
      <button className="w-full rounded-lg bg-primary py-4 font-primary text-xl font-semibold text-neutral-01">
        {children}
      </button>
    );
  } else if (variant === "two") {
    return (
      <button className="w-full cursor-pointer rounded-lg bg-primary py-4 font-primary text-xl font-semibold text-neutral-01 transition hover:bg-primary-shade-1">
        {children}
      </button>
    );
  } else if (variant === "three") {
    return (
      <button
        className={`mb-8 cursor-pointer rounded-lg border border-neutral-04 px-7 py-5 font-primary text-sm font-semibold text-secondary ${className}`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button className="w-full rounded-lg bg-primary py-4 font-primary text-xl font-semibold text-neutral-01">
        <span>Login</span>
      </button>
    );
  }
};

export default FormBtn;
