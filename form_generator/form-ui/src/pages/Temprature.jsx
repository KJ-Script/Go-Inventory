import React, { useState } from "react";
import axios from "axios"

function Temprature() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  })

  const submitData = () => {
    axios.post("http://localhost:8080/addstate", {
      formData
    }).then((response) => {
      console.log(response)
    })
  }
  return (
<div>
      <div className="flex items-center justify-center ">
        <h1 className="text-xl text-white mb-2">Add a Storage State</h1>
      </div>
      <div className="flex items-center justify-center ">
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-xl">
          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="state"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full border border-gray-400 p-2"
              onChange={(e) => {setFormData({...formData, name: e.target.value})}}
            />
          </div>

          <div>
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="product"
            >
              Product Description
            </label>
            <textarea
              type="textarea"
              id="description"
              name="description"
              className="w-full border border-gray-400 p-2"
              onChange={(e) => {setFormData({...formData, description: e.target.value})}}
            />
          </div>

          <div>
            <button className="bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-gray-400 mt-3" onClick={submitData}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temprature;
