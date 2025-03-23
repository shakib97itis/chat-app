import React, { useState } from "react";
import Input from "../../components/formComponents/input";
import { FcGoogle } from "react-icons/fc";
import Button from "../../components/buttons/button";
import LoginWithButton from "../../components/buttons/LoginWithButton";
import LoginTemplate from "./LoginTemplate";
import templateImage from "../../assets/login_img.svg";

function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  /**
   * This function updates the values state with the value of the input field
   * @param {*} e The event object
   * @returns void
   */
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  /**
   * This function validates the form by checking if all the fields have valid values
   * If any of the fields is invalid, it sets the corresponding error state to true
   * @param {*} e The event object
   * @returns void
   */
  const validateForm = () => {
    const errors = {
      email: "",
      password: "",
    };

    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    } else {
      errors.email = "";
    }

    if (values.password === "") {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else {
      errors.password = "";
    }
    return errors;
  };

  /**
   * This function handles the form submission
   * @param {*} e The event object
   * @returns void
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error.name === "" && error.email === "" && error.password === "") {
      console.log(values);
    } else {
      setError(error);
    }
  };
  return (
    <LoginTemplate img={templateImage}>
      <div className="mb-8">
        <h1 className="mb-7 font-serif text-3xl font-bold">
          Login to your account!
        </h1>
        <div>
          {/* convert this to a component */}
          <LoginWithButton FaIcon={FcGoogle} text="Login with Google" />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          type="email"
          label="Email"
          name="email"
          id="emailId"
          varient="two"
          className="mb-16"
          value={values.email}
          handleChange={handleChange}
          error={error.email}
        />

        <Input
          type="password"
          label="Password"
          name="password"
          id="passwordId"
          varient="two"
          className="mb-14"
          value={values.password}
          handleChange={handleChange}
          error={error.password}
        />

        <div className="mb-9">
          <Button type="submit" className={"bg-deep-sea/90 hover:bg-deep-sea"}>
            Log in
          </Button>
        </div>

        <div className="text-center">
          <p className="text-deep-sea">
            Don't have an account?{" "}
            <a href="#" className="font-sans font-bold text-burnt-orange">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </LoginTemplate>
  );
}

export default Login;
