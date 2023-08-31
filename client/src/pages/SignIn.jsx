import React, { useContext, useEffect } from "react";
import SignInBox from "../components/SignInBox";
import { LoginContext } from "../App";

function SignIn({setUserId}) {
  const [signedIn, setSignedIn] = useContext(LoginContext)
  
  useEffect(() => {
    setSignedIn(false)
  }, [])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <SignInBox setUserId={setUserId}/>
    </div>
  );
}

export default SignIn;
