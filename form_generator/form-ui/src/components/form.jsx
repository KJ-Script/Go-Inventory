import { useState } from "react";

const FormUi = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
      setStep(step + 1);
    };
  
    const handleBack = () => {
      setStep(step - 1);
    };
  
    return ( 
    <div>
        <div className="flex items-center justify-center mt-20">
            <h1>Create a warehouse</h1>
        </div>
       < div className="flex items-center justify-center ">
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
          {step === 1 ? <Step1 /> : <Step2 />}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                onClick={handleBack}
              >
                Back
              </button>
              
            ) &&

    (
        <div className="ml-10">
        <button
        className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
        onClick={handleBack}
      >
        Back
      </button>   
      </div>
    )
            
            }
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
  
  const Step1 = () => (
    <div>
      <h3 className="text-lg font-medium mb-4">Step 1</h3>
      <div className="mb-4">
        <label className="block font-medium mb-2 text-gray-700" htmlFor="name">
         Add Location
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border border-gray-400 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2 text-gray-700" htmlFor="email">
          Add Storage type
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border border-gray-400 p-2"
        />
      </div>
    </div>
  );
  
  const Step2 = () => (
    <div>
      <h3 className="text-lg font-medium mb-4">Step 2</h3>
      <div className="mb-4">
        <label
          className="block font-medium mb-2 text-gray-700"
          htmlFor="password"
        >
          Add Stored Item
        </label>
        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
      </div>
    </div>
  );

 
export default FormUi;