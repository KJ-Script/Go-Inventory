import React from "react";
import request from "../assets/request.png";
import approve from "../assets/approve.png";
import pick from "../assets/pick.png";
import ship from "../assets/ship.png";
import store from "../assets/store.png";

function How() {
  return (
    <div className="h-screen">
      <div className="w-full flex justify-center h-[7%] items-center">
        <div className="text-center text-2xl text-emerald-700 font-bold border shadow-lg w-[50%] flex justify-center items-center h-full">
          <p>HOW DO WE WORK</p>
        </div>
      </div>

      <div className="flex w-full justify-center my-[10%]">
        <div className="flex justify-between w-[80%]">
          <div>
            <img src={request} className="w-[80%]"/>
            <p className="w-full text-center text-2xl text-emerald-700">
              Request
            </p>
          </div>
          <div>
            <img src={approve} className="w-[80%]"/>{" "}
            <p className="w-full text-center text-2xl text-emerald-700">
              Approve
            </p>
          </div>
          <div>
            <img src={pick} />{" "}
            <p className="w-full text-center text-2xl text-emerald-700">Pick</p>
          </div>
          <div>
            <img src={ship} />{" "}
            <p className="w-full text-center text-2xl text-emerald-700">Ship</p>
          </div>
          <div>
            <img src={store} />{" "}
            <p className="w-full text-center text-2xl text-emerald-700">
              Store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
