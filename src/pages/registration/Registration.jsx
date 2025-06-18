import LoginRegistrationTemplate from "../../layouts/LoginRegistrationLayout";
import RegistrationForm from "../../features/auth/components/RegistrationForm";

const Registration = () => {
  return (
    <LoginRegistrationTemplate
      bannerImg={{
        src: "/registration-banner.png",
        alt: "Registration Banner Image",
      }}
    >
      <RegistrationForm />
    </LoginRegistrationTemplate>
  );
};

export default Registration;
