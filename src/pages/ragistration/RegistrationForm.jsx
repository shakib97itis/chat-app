import Input from "../../components/common/formComponents/InputV1";

const RegistrationForm = () => {
  return (
    <form>
      <div>
        <Input
          className=""
          error=""
          handleChange={() => {}}
          id="email"
          label="Email"
          name="email"
          type="email"
          varient="one"
          placeholder="joshim@example.com"
        />
      </div>
      <div>
        <Input
          error=""
          handleChange={() => {}}
          id="name"
          label="Full Name"
          name="name"
          placeholder="Hero Joshim"
          type="text"
        />
      </div>
      <div>
        <Input
          error=""
          handleChange={() => {}}
          id="password"
          label="Password"
          name="password"
          placeholder="**********"
          type="password"
        />
      </div>
    </form>
  );
};

export default RegistrationForm;
