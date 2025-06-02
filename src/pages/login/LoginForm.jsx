import FormBtn from "../../components/common/buttons/FormBtn";
import { FcGoogle } from "react-icons/fc";
import InputEmail from "../../components/common/formComponents/InputEmail";
import InputPassword from "../../components/common/formComponents/InputPassword";

const LoginForm = () => {
  return (
    <div>
      <h1 className="mb-6 font-tertiary text-4xl font-bold text-secondary">
        Login to your account
      </h1>

      <FormBtn variant={"three"} className={"flex items-center gap-2"}>
        <FcGoogle className="text-2xl" />
        <span>Login with Google</span>
      </FormBtn>

      {/* <p className="mb-10 font-tertiary text-xl text-neutral-06 opacity-40">
        Free login and you can enjoy it
      </p> */}

      <form>
        <div>
          <InputEmail
            type="email"
            label="Email"
            placeholder="joshim@example.com"
            name="email"
            id="email"
            error=""
            value="hello"
            handleChange={() => {}}
            variant="two"
          />
        </div>
        <div>
          <InputPassword
            label="Password"
            placeholder="**********"
            name="password"
            id="password"
            error=""
            value="hello"
            handleChange={() => {}}
            variant="two"
          />
        </div>
        <div>
          <FormBtn variant={"two"}>Login</FormBtn>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
