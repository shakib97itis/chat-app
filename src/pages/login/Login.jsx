import LoginRegistrationLayout from "../../layouts/LoginRegistrationLayout";
import LoginForm from "../../features/auth/components/LoginForm";

const Login = () => {
  return (
    <LoginRegistrationLayout
      bannerImg={{
        src: "/login-banner.png",
        alt: "Login Banner Image",
      }}
    >
      <LoginForm />
    </LoginRegistrationLayout>
  );
};

export default Login;
