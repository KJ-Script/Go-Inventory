import { useEffect, useState } from "react";
import axios from "axios"

const FormUi = () => {
  const [option, setOption] = useState()
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: "",
    pallets: null,
    size: null,
    product: null,
  });

  console.log(option)
  
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  console.log("formData", formData);

  const submitData = () => {
    axios.post("http://localhost:8080/addstore", {
      formData
    }).then((response) => {
      console.log(response)
    })
  }

  useEffect(() => {
    axios
    .get("http://localhost:8080/getproduct")
    .then((response) => {
      console.log(response.data);
      setOption(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])
  
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-xl text-white mb-2">Create a warehouse</h1>
      </div>
      <div className="flex items-center justify-center ">
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-xl">
          <h2 className="text-lg font-medium mb-4">Step {step} of 2</h2>
          <div className="flex mb-4">
            <div
              className={`w-1/2 border-r border-gray-400 ${
                step === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              } p-2 text-center cursor-pointer`}
              onClick={() => setStep(1)}
            >
              Step 1
            </div>
            <div
              className={`w-1/2 ${
                step === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
              } p-2 text-center cursor-pointer`}
              onClick={() => setStep(2)}
            >
              Step 2
            </div>
          </div>
          {step === 1 ? (
            <div>
              <h3 className="text-lg font-medium mb-4">Step 1</h3>
              <div className="mb-4">
                <label
                  className="block font-medium mb-2 text-gray-700"
                  htmlFor="location"
                >
                  Add Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="w-full border border-gray-400 p-2"
                  onChange={(e) => {
                    setFormData({ ...formData, location: e.target.value });
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-medium mb-2 text-gray-700"
                  htmlFor="pallets"
                >
                  Add Storage type( in pallets)
                </label>
                <input
                  type="number"
                  id="pallets"
                  name="pallets"
                  className="w-full border border-gray-400 p-2"
                  onChange={(e) => {
                    setFormData({ ...formData, pallets: e.target.value });
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-medium mb-2 text-gray-700"
                  htmlFor="size"
                >
                  Add Storage type( in sm)
                </label>
                <input
                  type="number"
                  id="size"
                  name="size"
                  className="w-full border border-gray-400 p-2"
                  onChange={(e) => {
                    setFormData({ ...formData, size: e.target.value });
                  }}
                />
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-medium mb-4">Step 2</h3>
              <div className="mb-4 space-y-2">
                <label
                  className="block font-medium mb-2 text-gray-700"
                  htmlFor="product"
                >
                  Add Storable products
                </label>
                <select
                  id="product"
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                    product: e.target.value,
                    });
                  }}
                >
                  {
                    option.map((item, index) => {
                      console.log(index)
                      return (
                        <option value={item.name}>{item.name}</option>
                      )
                    })
                  }
                </select>            
              </div>
            </div>
          )}
          <div className="flex justify-between mt-6">
            {step > 1 && (
                <button
                  className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                  onClick={handleBack}
                >
                  Back
                </button>
              ) && (
                <div className="ml-10 space-x-3 ">
                  <button
                    className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                    onClick={handleBack}
                  >
                    Back
                  </button>

                  <button
                    className="bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-gray-400"
                    onClick={submitData}
                  >
                    Submit
                  </button>
                </div>
              )}
            {step < 2 && (
              <button
                className="bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default FormUi;
