import LoginRegistrationTemplate from "../../components/LoginRegistrationTemplate/LoginRegistrationTemplate";
import RegistrationForm from "./RegistrationForm";
import { useAuth } from "../../context/authContext/useAuth";


const Registration = () => {
  const { user } = useAuth();
  console.log("User in Registration:", user);


  
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
      <RegistrationForm />
    </LoginRegistrationTemplate>
  );
};

export default Registration;
