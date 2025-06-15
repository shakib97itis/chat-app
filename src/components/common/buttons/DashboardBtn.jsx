const DashboardBtn = ({ variant, children }) => {
    /**
     * TODO: Implement the DashboardBtn component with three different variants.
     * Each variant should have its own unique styles.
     */
    if (variant === "one") {
    return (
      <button className="cursor-pointer rounded bg-primary px-[18px] py-[8px] font-secondary text-xl text-neutral-01">
        {children}
      </button>
    );
  }

  if (variant === "two") {
    return (
      <button className="cursor-pointer rounded bg-primary px-[18px] py-[8px] font-secondary text-xl text-neutral-01">
        {children}
      </button>
    );
  }

  if (variant === "three") {
    return (
      <button className="cursor-pointer rounded bg-primary px-[18px] py-[8px] font-secondary text-xl text-neutral-01">
        {children}
      </button>
    );
  }
};

export default DashboardBtn;
