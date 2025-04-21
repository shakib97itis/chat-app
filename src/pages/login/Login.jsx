import React from "react";
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
      <div>
        <h1 className="mb-3 font-tertiary text-4xl font-bold text-secondary">
          Login to your account
        </h1>

        <p className="mb-10 font-tertiary text-xl text-neutral-06 opacity-40">
          Free login and you can enjoy it
        </p>
        <div>
          <LoginForm />
        </div>
      </div>
    </LoginRegistrationTemplate>
  );
};

export default Login;
