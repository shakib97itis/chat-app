import { Link } from "react-router";
import FormBtn from "../../components/common/buttons/FormBtn";
import InputEmail from "../../components/common/formComponents/InputEmail";
import InputPassword from "../../components/common/formComponents/InputPassword";
import InputText from "../../components/common/formComponents/InputText";
import { useState } from "react";
import { useAuth } from "../../context/authContext/useAuth";

const initialFormData = {
  email: "",
  name: "",
  password: "",
};

const RegistrationForm = () => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData.email, formData.password);
      // TODO: Handle successful registration (e.g., redirect or show a success message)
      setFormData({ ...initialFormData }); // Reset form data after successful registration
      console.log("Registration successful");
    } catch (error) {
      // TODO: Handle registration error (e.g., show an error message)
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <h1 className="mb-3 font-tertiary text-4xl font-bold text-secondary">
        Get started with easily register
      </h1>

      <p className="mb-10 font-tertiary text-xl text-neutral-06 opacity-40">
        Free register and you can enjoy it
      </p>

      <form>
        <div>
          <InputEmail
            className=""
            error=""
            handleChange={handleChange}
            id="email"
            label="Email"
            name="email"
            variant="one"
            placeholder="joshim@example.com"
            value={formData.email}
          />
        </div>
        <div>
          <InputText
            error=""
            handleChange={handleChange}
            id="name"
            label="Full Name"
            name="name"
            placeholder="Hero Joshim"
            type="text"
            variant="one"
            value={formData.name}
          />
        </div>
        <div>
          <InputPassword
            error=""
            handleChange={handleChange}
            id="password"
            label="Password"
            name="password"
            placeholder="**********"
            variant="one"
            value={formData.password}
          />
        </div>
        <div>
          <FormBtn onClick={handleSubmit} variant="one" type="submit">
            Register
          </FormBtn>
        </div>
      </form>
      <p className="mt-8 text-center font-tertiary text-lg font-normal text-secondary lg:max-w-[372px]">
        Already have an account?{" "}
        <Link
          className="cursor-pointer font-bold text-tertiary transition hover:text-primary-shade-1"
          to="/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
