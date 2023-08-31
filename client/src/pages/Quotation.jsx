import React, { useState } from "react";
import StorageForm from "../components/StorageForm";
import ProductForm from "../components/ProductForm";
import StateForm from "../components/StateForm";
import LocationForm from "../components/LocationForm";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Quotation() {
  const [tab, setTab] = useState(1);
  const [storageType, setStorageType] = useState(null)
  const [productType, setProductType] = useState(null)
  const [storageState, setStorageState] = useState(null)
  const [storageLocation, setStorageLocation] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()
  const userId = location.state?.userId
  console.log("qUserID: ", userId)

  const data = {
    userId,
    storageType,
    productType,
    storageState,
    storageLocation,
  }

  console.log("big Object", data)
  const handleSubmit = () => {
    axios.post('http://localhost:8080/createQuotation', {
      userId,
      storageType,
      productType,
      storageState,
      storageLocation,
    }).then((response) => {
      console.log(response.data)
      navigate('/dashboard', {state: {userId: userId}})
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="h-screen w-full">
      <div className="my-10 w-full flex justify-center">
        <div className="w-[50%] flex justify-between text-gray-700 text-sm">
          <div
            className={tab == 1 ? "text-emerald-700 underline" : ""}
            onClick={() => {
              setTab(1);
            }}
          >
            Storage
          </div>
          <div
            className={tab == 2 ? "text-emerald-700 underline" : ""}
            onClick={() => {
              setTab(2);
            }}
          >
            Product Type
          </div>
          <div
            className={tab == 3 ? "text-emerald-700 underline" : ""}
            onClick={() => {
              setTab(3);
            }}
          >
            Storage State
          </div>
          <div
            className={tab == 4 ? "text-emerald-700 underline" : ""}
            onClick={() => {
              setTab(4);
            }}
          >
            Storage Location
          </div>
        </div>
      </div>

      <div>
        {tab == 1 ? <StorageForm setTab={setTab} setStorageType={setStorageType}/> : <></>}
        {tab == 2 ? <ProductForm setTab={setTab} setProductType={setProductType}/> : <></>}
        {tab == 3 ? <StateForm  setTab={setTab} setStorageState={setStorageState}/> : <></>}
        {tab == 4 ? <LocationForm setTab={setTab} setStorageLocation={setStorageLocation} handleSubmit={handleSubmit}/> : <></>}
      </div>
    </div>
  );
}

export default Quotation;
