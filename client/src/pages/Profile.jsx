import React, { useContext } from "react";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [signedIn, setSignedIn] = useContext(LoginContext);
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center space-x-3">
      <div className="p-20 bg-gray-800 text-white space-y-2 rounded-lg">

        <p className="text-xl">Profile Page coming soon</p>
        <button
          className="px-3 py-2 bg-emerald-800 text-white mx-14"
          onClick={() => {
            navigate("/signin");
            setSignedIn(false);
          }}
          >
          Log out
        </button>
          </div>
    </div>
  );
}

export default Profile;
