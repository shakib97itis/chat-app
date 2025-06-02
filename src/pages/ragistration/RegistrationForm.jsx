import InputEmail from "../../components/common/formComponents/InputEmail";
import InputPassword from "../../components/common/formComponents/InputPassword";
import InputText from "../../components/common/formComponents/InputText";

const RegistrationForm = () => {
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
            handleChange={() => {}}
            id="email"
            label="Email"
            name="email"
            variant="one"
            placeholder="joshim@example.com"
          />
        </div>
        <div>
          <InputText
            error=""
            handleChange={() => {}}
            id="name"
            label="Full Name"
            name="name"
            placeholder="Hero Joshim"
            type="text"
            variant="one"
          />
        </div>
        <div>
          <InputPassword
            error=""
            handleChange={() => {}}
            id="password"
            label="Password"
            name="password"
            placeholder="**********"
            type="password"
            variant="one"
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
