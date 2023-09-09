import React from "react";

function HeaderBar({id, location, classification, storage, status}) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[98%] flex justify-center text-gray-100 text-sm h-[40px] bg-gray-700">
          <div className="w-full flex justify-between mx-2 h-full items-center">
            <div>{id}</div>
            <div>{location}</div>
            <div>{classification}</div>
            <div>{storage}</div>
            <div>{status}</div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <hr className="flex w-[98%] "></hr>
      </div>
    </>
  );
}

export default HeaderBar;
