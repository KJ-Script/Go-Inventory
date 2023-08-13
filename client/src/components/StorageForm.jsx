import React, { useState } from "react";
import pallet from "../assets/pallet.png";
import sqm from "../assets/sqm.png";

function StorageForm({ setTab, setStorageType }) {
  const [buttonVisibility, setButtonVisibility] = useState();
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[60%] flex justify-center items-center">
        <div className="flex space-x-12">
          <div>
            <img src={pallet} className="h-full" />
            <div className="flex space-x-4 justify-center">
              <p>Pallets</p>
              <input
                type="radio"
                name="pallet-type"
                onClick={() => {
                  setButtonVisibility(true);
                  setStorageType("pallets")
                }}
              />
            </div>
          </div>

          <div>
            <img src={sqm} className="h-full" />
            <div className="flex space-x-4 justify-center">
              <p>Square Meters</p>
              <input
                type="radio"
                name="pallet-type"
                onClick={() => {
                  setButtonVisibility(true);
                  setStorageType("sqm")
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {buttonVisibility ? (
        <div className="flex justify-center">
          <button
            className="py-3 px-5 bg-emerald-700 text-white text-sm rounded-lg"
            onClick={() => {
              setTab(2);
            }}
          >
            next
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default StorageForm;
