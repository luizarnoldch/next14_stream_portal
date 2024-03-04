import React from "react";
import FormSignIn from "../_components/FormSignIn";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
      <div>
        <FormSignIn />
      </div>
    </div>
  );
};

export default SignIn;
