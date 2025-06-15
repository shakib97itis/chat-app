import PropTypes from "prop-types";
import { Link } from "react-router";



const NavigationItem = ({ NavIcon, url }) => {
  return (
    <Link
      to={url}
      className="group relative mb-[10px] flex cursor-pointer items-center justify-center rounded-s-2xl bg-transparent py-[15px] text-neutral-01 transition hover:bg-neutral-01 hover:text-primary"
    >
      {/* Icon */}
      <div className="relative sm:left-[-10px]">
        {NavIcon && <NavIcon className="text-[32px] sm:text-[46px]" />}
      </div>
      {/* bar */}
      <div className="absolute right-0 h-full w-[8px] rounded-s-2xl bg-secondary opacity-0 transition group-hover:opacity-100"></div>
    </Link>
  );
};

/**
 * TODO: Add propsTypes later.
 */

export default NavigationItem;
