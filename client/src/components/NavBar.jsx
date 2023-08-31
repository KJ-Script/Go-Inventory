import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

function NavBar({userId}) {
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useContext(LoginContext);
  return (
    <div className="w-full text-lg h-[70px] flex items-center shadow-md bg-white">
      <div className="flex w-[8%] ml-12">
        <div
          className="px-3 py-2 bg-emerald-800 text-white md:flex hidden"
          onClick={() => {
            navigate("/");
          }}
        >
          Go-Inventory
        </div>
      </div>

      <div className="flex w-[22%] justify-between mx-12 text-gray-700">
        <div
          className="hover:text-emerald-800"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div
          className="hover:text-emerald-800"
          onClick={() => {
            navigate("/about");
          }}
        >
          About us
        </div>
        <div
          className="hover:text-emerald-800"
          onClick={() => {
            navigate("/services");
          }}
        >
          Services
        </div>
        <div className="hover:text-emerald-800">Contact us</div>
      </div>

      <div className="w-[70%] flex justify-end space-x-3 mx-12">
        {signedIn ? (
          <>
            <div
              className="hover:text-emerald-800 my-2 text-gray-700"
              onClick={() => {
                navigate("/dashboard" , {state:{signState: signedIn, userId: userId}});
              }}
            >
              Dashboard
            </div>
            <div className="hover:text-emerald-800 my-2 text-gray-700" onClick={()=>{navigate('/payment')}}>Payment</div>
            <div className="hover:text-emerald-800 my-2 text-gray-700" onClick={()=>{navigate('/profile')}}>Profile</div>

          </>
        ) : (
          <button
            className="px-3 py-2 bg-emerald-800 text-white"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
