import React from "react";
import Input from "../../components/formComponents/input";
import personTalkingImg from "../../assets/person-talking.png";
import RagistrationTemplate from "../../components/registrationTemplate/RegistrationTemplate";

function Ragistration() {
  return (
    <RagistrationTemplate img={personTalkingImg}>
      <div className="mb-9">
        <h1 className="mb-2.5 font-serif text-3xl font-bold">
          Get started with easily register
        </h1>
        <p className="font-serif text-xl font-normal text-black opacity-40">
          Free register and you can enjoy it
        </p>
      </div>

      <form action="#" className="max-w-[368px]">
        <Input
          type="text"
          label="Full Name"
          name="name"
          id="nameId"
          className="mb-6"
        />

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
            Sing up
          </button>
        </div>

        <div className="">
          <p className="text-deep-sea">
            Already have an account{" "}
            <a href="#" className="font-sans font-bold text-burnt-orange">
              Sign in
            </a>
          </p>
        </div>
      </form>
    </RagistrationTemplate>
  );
}

export default Ragistration;
