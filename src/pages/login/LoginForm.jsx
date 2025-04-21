import React from "react";
import Input from "../../components/common/formComponents/InputV2";

const LoginForm = () => {
  return (
    <form>
      <div>
        <Input
          type="email"
          label="Email"
          placeholder="joshim@example.com"
          name="email"
          id="email"
          error=""
        />
      </div>
      <div>
        <Input
          type="password"
          label="Password"
          placeholder="**********"
          name="password"
          id="password"
          error=""
        />
      </div>
    </form>
  );
};

export default LoginForm;
