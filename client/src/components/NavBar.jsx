import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="w-full text-lg h-[60px] flex  items-center shadow-md fixed bg-white">
      <div className="flex w-[8%] ml-12">
        <div className="px-3 py-2 bg-emerald-800 text-white" onClick={() => {
          navigate("/")
        }}>Go-Inventory</div>
      </div>

      <div className="flex w-[22%] justify-between mx-12">
        <div
          className="hover:text-emerald-800"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div className="hover:text-emerald-800" onClick={() => {
          navigate("/about")
        }}>About us</div>
        <div className="hover:text-emerald-800" onClick={() => {
          navigate("/services")
        }}>Services</div>
        <div className="hover:text-emerald-800">Contact us</div>
      </div>

      <div className="w-[70%] flex justify-end space-x-3 mx-12">
        <a
          className="px-3 py-2 bg-emerald-800 text-white"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign in
        </a>
        <button
          className="px-3 py-2 bg-emerald-800 text-white"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default NavBar;
