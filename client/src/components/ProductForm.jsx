import React, { useState } from "react";

function ProductForm({ setTab, setProductType }) {
  const [buttonVisibility, setButtonVisibility] = useState(false);
  const [selected, setSelected] = useState();
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[60%] flex justify-center items-center">
        <div className="flex space-x-12">
          <button
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
          </button>
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
