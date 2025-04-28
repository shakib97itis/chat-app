import React from "react";
import PropTypes from "prop-types";

const NavigationItem = ({ NavIcon }) => {
  return (
    <div className="group relative flex cursor-pointer items-center justify-center rounded-s-2xl bg-transparent py-[15px] text-neutral-01 transition hover:bg-neutral-01 hover:text-primary mb-[10px]">
      {/* Icon */}
      <div className="relative sm:left-[-10px]">
        {NavIcon && <NavIcon className="text-[32px] sm:text-[46px]" />}
      </div>
      {/* bar */}
      <div className="absolute right-0 h-full w-[8px] rounded-s-2xl bg-secondary opacity-0 transition group-hover:opacity-100"></div>
    </div>
  );
};

NavigationItem.propTypes = {
  icon: PropTypes.element.isRequired,
};

export default NavigationItem;
