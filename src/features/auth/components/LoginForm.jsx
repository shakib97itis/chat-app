import FormBtn from "../../../components/buttons/FormBtn";
import InputEmail from "../../../components/formComponents/InputEmail";
import InputPassword from "../../../components/formComponents/InputPassword";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

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
      <p className="mt-6 font-tertiary text-lg">
        Don't have an account?{" "}
        <Link to="/registration" className="text-tertiary font-bold hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
