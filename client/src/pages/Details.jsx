import React from "react";
import QuotationDisplayBar from "../components/QuotationDisplayBar";
import DetailsDispalyBar from "../components/DetailsDispalyBar";
import { useLocation } from "react-router-dom";
import DetailBar from "../utils/detailBar";

function Details() {
  const location = useLocation();

  const data = location.state?.postData;
  console.log(data);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="md:w-[50%] w-full bg-gray-300 rounded-lg">
        <div className="flex flex-col items-center space-y-5 my-4">
          <DetailBar title={"Quotation Identifcation Number"} data={data.q_id}/> 
          <DetailBar title={"Storage Type"} data={data.storageType}/>
          <DetailBar title={"Product Type"} data={data.productType}/>
          <DetailBar title={"Storage State"} data={data.storageState}/>
          <DetailBar title={"Storage Location"} data={data.storageLocation}/>
        </div>
        <div className="w-full flex justify-center space-x-6">
          <button className="bg-red-700 text-white p-3 w-[30%]">Back to Dashboard</button>
          <button>Delete Quotation</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
