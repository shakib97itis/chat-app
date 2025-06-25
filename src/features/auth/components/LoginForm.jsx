import { useState } from "react";
import FormBtn from "../../../components/buttons/FormBtn";
import InputEmail from "../../../components/formComponents/InputEmail";
import InputPassword from "../../../components/formComponents/InputPassword";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../context/auth/useAuth";

// Initial form data state
const initialFormData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formData, setFormData] = useState({ ...initialFormData });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    try {
      await login(formData.email, formData.password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h1 className="mb-6 font-tertiary text-4xl font-bold text-secondary">
        Login to your account
      </h1>

      <FormBtn variant={"three"} className={"flex items-center gap-2"}>
        <FcGoogle className="text-2xl" />
        <span>Login with Google</span>
      </FormBtn>

      <form onSubmit={handleSubmit}>
        <div>
          <InputEmail
            type="email"
            label="Email"
            placeholder="joshim@example.com"
            name="email"
            id="email"
            error={error}
            value={formData.email}
            handleChange={handleChange}
            variant="two"
          />
        </div>
        <div>
          <InputPassword
            label="Password"
            placeholder="**********"
            name="password"
            id="password"
            error={error}
            value={formData.password}
            handleChange={handleChange}
            variant="two"
          />
        </div>
        <div>
          <FormBtn type="submit" variant={"two"}>
            Login
          </FormBtn>
        </div>
      </form>
      <p className="mt-6 font-tertiary text-lg">
        Don't have an account?{" "}
        <Link
          to="/registration"
          className="font-bold text-tertiary hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
