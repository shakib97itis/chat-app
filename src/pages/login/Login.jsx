import React from "react";
import Input from "../../components/formComponents/input";
import RagistrationTemplate from "../../components/registrationTemplate/RegistrationTemplate";
import image from "../../assets/person-using-phone.jpg";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <RagistrationTemplate img={image}>
      <div className="mb-9">
        <h1 className="mb-2.5 font-serif text-3xl font-bold">
          Login to your account!
        </h1>
        <div>
          <button className="flex items-center gap-2.5 rounded-lg border border-deep-sea px-7 py-5 font-sans font-semibold text-deep-sea">
            <FcGoogle className="align-middle text-3xl" />
            <span>Login with Google</span>
          </button>
        </div>
      </div>

      <form action="#" className="max-w-[368px]">
        <Input
          type="email"
          label="Email"
          name="email"
          id="emailId"
          className="mb-6"
        />

        <Input
          type="password"
          label="Password"
          name="password"
          id="passwordId"
          className="mb-11"
        />

        <div className="mb-6">
          <button className="mt- w-full rounded-full bg-space py-4 text-white">
            Login
          </button>
        </div>

        <div className="">
          <p className="text-deep-sea">
            Don't have an account?{" "}
            <a href="#" className="font-sans font-bold text-burnt-orange">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </RagistrationTemplate>
  );
}

export default Login;
