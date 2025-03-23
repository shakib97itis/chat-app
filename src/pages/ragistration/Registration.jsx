import React, { useState } from "react";
import Input from "../../components/formComponents/input";
import templateImage from "../../assets/registration_img.svg";
import RagistrationTemplate from "./RegistrationTemplate";
import Button from "../../components/buttons/button";

function Ragistration() {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({ name: "", email: "", password: "" });

  /**
   * This function updates the values state with the value of the input field
   * @param {*} e The event object
   * @returns void
   */
  const handleChange = (e) => {
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
      name: "",
      email: "",
      password: "",
    };

    if (values.name.trim() === "") {
      errors.name = "Name is required";
    } else {
      errors.name = "";
    }

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
    }
    setError(error);
  };

  return (
    <RagistrationTemplate img={templateImage}>
      {/* PAGE TITLE */}
      <div className="mb-9">
        <h1 className="mb-2.5 font-serif text-3xl font-bold">
          Get started with easily register
        </h1>
        <p className="font-serif text-xl font-normal text-black/40">
          Free register and you can enjoy it
        </p>
      </div>

      {/* REGISTRATION FORM */}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Full Name"
          name="name"
          id="fullNameId"
          varient="one"
          className="mb-7"
          value={values.name}
          handleChange={handleChange}
          error={error.name}
        />

        <Input
          type="email"
          label="Email"
          name="email"
          id="emailId"
          varient="one"
          className="mb-7"
          value={values.email}
          handleChange={handleChange}
          error={error.email}
        />

        <Input
          type="password"
          label="Password"
          name="password"
          id="passwordId"
          varient="one"
          className="mb-11"
          value={values.password}
          handleChange={handleChange}
          error={error.password}
        />

        <div className="mb-6">
          <Button
            type="submit"
            className="bg-royal-blue/90 hover:bg-royal-blue"
          >
            Sign Up
          </Button>
        </div>

        <div className="text-center">
          <p className="font-sans font-normal text-deep-sea">
            Already have an account?{" "}
            <a href="#" className="font-bold text-burnt-orange">
              Sign in
            </a>
          </p>
        </div>
      </form>
    </RagistrationTemplate>
  );
}

export default Ragistration;

