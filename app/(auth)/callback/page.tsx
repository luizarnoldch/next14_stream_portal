"use client";
import "aws-amplify/auth/enable-oauth-listener";
import { fetchUserAttributes } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useState, useEffect } from "react";
import useAuth from "@/lib/auth-store";
import { useRouter } from 'next/navigation';

export default function Callback() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const setUserAuth = useAuth((state) => state.setUserAuth);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", async ({ payload }) => {
      switch (payload.event) {
        case "signInWithRedirect":
          const userAttributes = await fetchUserAttributes();
          const name = userAttributes?.name ?? "";
          const email = userAttributes?.email ?? "";

          if (name !== "" && email !== "") {
            setUserAuth({ name, email });
          }
          setLoading(false);
          break;
        case "signInWithRedirect_failure":
          setLoading(false);
          break;
        case "customOAuthState":
          const state = payload.data;
          console.log(state);
          setLoading(false);
          break;
      }
    });
    return unsubscribe;
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      router.push("/portal");
    }
  }, [loading, router]);

  return <div>Loading...</div>;
}
