import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

function ProductForm({ setTab, setProductType }) {
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [selected, setSelected] = useState();
  const [option, setOption] = useState([])
  console.log("option", option)

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
                  setProductType(item.name)
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
              setProductType("chemicals")
            }}
          >
            Chemical goods
          </button> */}
          {/* <button
            className={
              selected == 2
                ? "p-3 px-5 rounded-lg border border-emerald-700 bg-emerald-700 text-white"
                : "p-3 px-5 rounded-lg border border-black"
            }
            onClick={() => {
              setSelected(2);
              setButtonVisibility(true);
              setProductType("machinery")
            }}
          >
            Heavy Machinery
          </button>
          <button
            className={
              selected == 3
                ? "p-3 px-5 rounded-lg border border-emerald-700 bg-emerald-700 text-white"
                : "p-3 px-5 rounded-lg border border-black"
            }
            onClick={() => {
              setSelected(3);
              setButtonVisibility(true);
              setProductType("electronics")
            }}
          >
            Electronic goods
          </button>
          <button
            className={
              selected == 4
                ? "p-3 px-5 rounded-lg border border-emerald-700 bg-emerald-700 text-white"
                : "p-3 px-5 rounded-lg border border-black"
            }
            onClick={() => {
              setSelected(4);
              setButtonVisibility(true);
              setProductType("beverages")
            }}
          >
            Food and Beverages
          </button>
          <button
            className={
              selected == 5
                ? "p-3 px-5 rounded-lg border border-emerald-700 bg-emerald-700 text-white"
                : "p-3 px-5 rounded-lg border border-black"
            }
            onClick={() => {
              setSelected(5);
              setButtonVisibility(true);
              setProductType("medical")
            }}
          >
            Medical goods
          </button>
          <button
            className={
              selected == 6
                ? "p-3 px-5 rounded-lg border border-emerald-700 bg-emerald-700 text-white"
                : "p-3 px-5 rounded-lg border border-black"
            }
            onClick={() => {
              setSelected(6);
              setButtonVisibility(true);
              setProductType("cosmetics")
            }}
          >
            Clothings and Cosmetics
          </button>
          <button
            className={
              selected == 7
                ? "p-3 px-5 rounded-lg border border-emerald-700 bg-emerald-700 text-white"
                : "p-3 px-5 rounded-lg border border-black"
            }
            onClick={() => {
              setSelected(7);
              setButtonVisibility(true);
              setProductType("miscellaneous")
            }}
          >
            Miscellaneous
          </button> */}
        </div>
      </div>

      {buttonVisibility ? (
        <div className="flex justify-center">
          <button
            className="py-3 px-5 bg-emerald-700 text-white text-sm rounded-lg"
            onClick={() => {
              setTab(3);
            }}
          >
            next
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProductForm;
