import React from "react";
import { useNavigate } from "react-router-dom";

function QuotationDisplayBar({data, userId, setData}) {
  const navigate = useNavigate()
  console.log("Data: ", data)
  console.log("userID: ", userId)
  return (
    <>
      <div className="w-full flex justify-center h-[40px]" onClick={()=>{
        setData(data)
        // navigate('/details', {state:{postData:data, userId:userId}})
      }}>
        <button className="w-[98%] flex justify-center text-gray-700 text-sm h-full hover:bg-gray-200 items-center">
          <div className="w-full mx-2 flex justify-between">
            <div>{data.q_id}</div>
            <div>{data.storageLocation}</div>
            <div>{data.productType}</div>
            <div>{data.storageType}</div>
            <div className={"Approved" == "Approved"? "text-green-500 font-semibold" : "text-yellow-500 font-semibold"}>Approved</div>
          </div>
        </button>
      </div>

      <div className="w-full flex justify-center">
        <hr className="flex w-[98%] "></hr>
      </div>
    </>
  );
}

export default QuotationDisplayBar;
