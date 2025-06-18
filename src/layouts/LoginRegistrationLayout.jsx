import PropTypes from "prop-types";

const LoginRegistrationLayout = ({ children, bannerImg }) => {
  return (
    <section className="">
      <div className="flex min-h-screen justify-between p-4 lg:h-screen lg:p-0">
        {/* LEFT SIDE */}
        <div className="flex w-full items-center justify-center lg:w-3/5 lg:justify-end lg:pe-[68px]">
          {children}
        </div>
        {/* RIGHT SIDE */}
        <div className="hidden h-full w-2/5 lg:block">
          <img
            className="h-full w-full object-cover"
            src={bannerImg.src}
            alt={bannerImg.alt}
          />
        </div>
      </div>
    </section>
  );
};

LoginRegistrationLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bannerImg: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
};

export default LoginRegistrationLayout;
