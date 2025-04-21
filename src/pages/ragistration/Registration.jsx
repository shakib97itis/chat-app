import React from "react";
import LoginRegistrationTemplate from "../../components/LoginRegistrationTemplate/LoginRegistrationTemplate";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  /**
   * TODO: HANDLE REGISTRATION FORM 
   * TODO: HANDLE FORM SUBMISSION AND DATA COLLECTION
   */
  return (
    <LoginRegistrationTemplate
      bannerImg={{
        src: "/registration-banner.png",
        alt: "Registration Banner Image",
      }}
    >
      <div>
        <h1 className="mb-3 font-tertiary text-4xl font-bold text-secondary">
          Get started with easily register
        </h1>

        <p className="mb-10 font-tertiary text-xl text-neutral-06 opacity-40">
          Free register and you can enjoy it
        </p>
        <div>
          <RegistrationForm />
        </div>
      </div>
    </LoginRegistrationTemplate>
  );
};

export default Registration;
