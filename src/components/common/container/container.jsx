import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div
      className={`mx-auto flex min-h-dvh max-w-[1440px] sm:p-2.5 ${className}`}
    >
      <div className="w-full">{children}</div>
    </div>
  );
};

Container.defaultProps = {
  className: "",
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
