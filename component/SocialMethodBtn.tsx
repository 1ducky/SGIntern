"use client";

import { useSignIn } from "@clerk/nextjs";
import type { OAuthStrategy } from "@clerk/types";

export default function SocialButtons() {
  const { signIn } = useSignIn();

  if (!signIn) return null;

  const oauthLogin = (strategy: OAuthStrategy) =>
    signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/",
      redirectUrlComplete: "/",
    });

  return (
    <>
      <button
        onClick={() => oauthLogin("oauth_google")}
        className="w-16 h-16 bg-blue-500 text-white rounded-full"
      >
        <i className="fa-brands fa-google"></i>
      </button>

      <button
        onClick={() => oauthLogin("oauth_github")}
        className="w-16 h-16 bg-blue-400 text-white rounded-full"
      >
        <i className="fa-brands fa-github"></i>
      </button>
    </>
  );
}
