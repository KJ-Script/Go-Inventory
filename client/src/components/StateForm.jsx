import React, {useState, useEffect} from 'react'
import axios from "axios"

function StateForm({setTab, setStorageState}) {
    const [buttonVisibility, setButtonVisibility] = useState(false);
    const [selected, setSelected] = useState();

    const [option, setOption] = useState([])
    console.log("option", option)
  
    useEffect(() => {
      axios
      .get("http://localhost:8080/getstate")
      .then((response) => {
        console.log(response.data);
        setOption(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, [])
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[60%] flex justify-center items-center">
        <div className="flex space-x-12">

        {
            option.map((item, index) => {
              console.log("item", item)
              return (
                <button
                className={
                     "p-3 px-5 rounded-lg border focus:border-emerald-700 focus:bg-emerald-700 focus:text-white -3 border-black"
                }
                onClick={() => {
                  setSelected(0);
                  setButtonVisibility(true);
                  setStorageState(item.name)
                }}
              >
                {item.name}
              </button>
              )
            })
          }
          {/* <button
            className={
              selected == 1
                ? "p-3 px-5 rounded-lg border border-emerald-700 bg-emerald-700 text-white"
                : "p-3 px-5 rounded-lg border border-black"
            }
            onClick={() => {
              setSelected(1);
              setButtonVisibility(true);
              setStorageState("ambient")
            }}
          >
            Ambient(18-25 celsius)
          </button>
          <button
            className={
              selected == 2
                ? "p-3 px-5 rounded-lg border border-emerald-700 bg-emerald-700 text-white"
                : "p-3 px-5 rounded-lg border border-black"
            }
            onClick={() => {
              setSelected(2);
              setButtonVisibility(true);
              setStorageState("dry")
            }}
          >
            Dry
          </button>
          */}
      </div>
      </div>

      {buttonVisibility ? (
        <div className="flex justify-center">
          <button
            className="py-3 px-5 bg-emerald-700 text-white text-sm rounded-lg"
            onClick={() => {
              setTab(4);
            }}
          >
            next
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default StateForm