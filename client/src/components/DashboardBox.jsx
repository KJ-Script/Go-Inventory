import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuotationDisplayBar from "./QuotationDisplayBar";
import axios from "axios";
import DataDisplayBox from "./DataDisplayBox";
import Details from "../pages/Details";

function DashboardBox({ userId }) {
  const companyName = "Go-technolgies";
  const navigate = useNavigate();

  const [post, setPost] = useState([]);
  const [data, setData] = useState([])
  const location = useLocation();

  useEffect(() => {
    if (userId == null) {
      userId == location.state.userId;
    } else {
      userId = userId;
    }
    axios
      .post("http://localhost:8080/getQuotationById", {
        userId: userId,
      })
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("Dashboard", userId);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-[90%] w-[90%] space-y-12">
        <div className="w-full flex justify-between">
          <p className="text-xl font-semibold">
            {companyName}'s Inventory Dashboard
          </p>
          <button
            className="bg-emerald-700 p-3 rounded-lg text-white"
            onClick={() => {
              navigate("/create", { state: { userId: userId } });
            }}
          >
            Create Quotation
          </button>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[20%] flex space-x-3 items-center">
            <p className="text-sm">Sort by</p>
            <select className="px-3 py-2 border border-emerald-700 rounded-lg text-sm bg-white font-light text-black">
              <option>Date</option>
              <option>Id</option>
              <option>Classification</option>
              <option>Pallet</option>
            </select>
          </div>
          <div className="w-[80%] flex space-x-3 justify-end">
            <input
              placeholder="SEARCH"
              type="text"
              className="w-[25%] border rounded-lg  px-5 py-1"
            />
            <button className="p-2 bg-emerald-700 text-white rounded-lg text-sm">
              Search
            </button>
          </div>
        </div>

        <div className="w-full flex">
          <DataDisplayBox post={post} userId={userId} setData={setData}/>
          <Details setData={setData} data={data}/>
        </div>
      </div>
    </div>
  );
}

export default DashboardBox;
