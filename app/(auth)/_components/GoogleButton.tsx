"use client";
import { Button } from "keep-react";
import { GoogleLogo } from "phosphor-react";
import {
  signInWithRedirect,
} from "aws-amplify/auth";

type Props = {}

const GoogleButton = (props: Props) => {

    const handleSignWithGoogle = async () => {
        try {
            await signInWithRedirect({
              provider: 'Google'
            });
          } catch (error) {
            console.log('error signing up:', error);
          }
      };


  return (
    <Button 
        type="primary"
        size="md"
        onClick={handleSignWithGoogle}
    >
        <span className="pr-2">
            <GoogleLogo size={32} />
        </span>
        Google Sigin
    </Button>
  )
}

export default GoogleButton