import LoginRegistrationTemplate from "../../components/LoginRegistrationTemplate/LoginRegistrationTemplate";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <LoginRegistrationTemplate
      bannerImg={{
        src: "/login-banner.png",
        alt: "Login Banner Image",
      }}
    >
      <LoginForm />
    </LoginRegistrationTemplate>
  );
};

export default Login;
