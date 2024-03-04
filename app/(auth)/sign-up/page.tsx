import FormSignUp from "../_components/FormSignUp";
type Props = {};

const SignIn = (props: Props) => {
  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
      <div>
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignIn;
