import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DetailBar from "../utils/detailBar";
import Popup from "../utils/Popup";
import HeaderBar from "../utils/HeaderBar";

function Details({ data, setData }) {
  const location = useLocation();
  // const data = location.state?.postData;
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  return (
    <div className="w-[50%]">
      <HeaderBar />
      {data != null ? (
        <div className="w-full mx-3 my-2">
          {popup === false ? (
            <>
              <div className="space-y-4">
                <DetailBar
                  title={"Quotation Identifcation Number"}
                  data={data.q_id}
                />
                <DetailBar title={"Storage Type"} data={data.storageType} />
                <DetailBar title={"Product Type"} data={data.productType} />
                <DetailBar title={"Storage State"} data={data.storageState} />
                <DetailBar
                  title={"Storage Location"}
                  data={data.storageLocation}
                />
              </div>
              <div className=" my-4 flex space-x-4">
                <button
                  className="bg-blue-700 w-[48%] h-[40px] text-white"
                  onClick={() => {
                    setData(null)
                  }}
                >
                  Clear Board
                </button>
                <button
                  className="bg-red-700 w-[48%] h-[40px] text-white"
                  onClick={() => setPopup(true)}
                >
                  Withdraw Quotation
                </button>
              </div>
            </>
          ) : (
            <Popup setPopup={setPopup} userId={data.user_id} id={data.q_id} />
          )}
        </div>
      ) : (
        <>
          <div className="w-full flex justify-center items-center "> Click for Data.......</div>
        </>
      )}
    </div>
  );
}

export default Details;
