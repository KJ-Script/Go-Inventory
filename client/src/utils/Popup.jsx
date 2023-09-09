import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Popup({ setPopup, userId, id }) {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleWithdraw = () => {
    axios.delete(`http://localhost:8080/delete/${id}`).then((res) => {

    console.log(res)
    alert("Withdraw compelte");
    navigate("/dashboard", { state: { userId: userId } });
    }).catch((err) => {
        console.log(err)
    });
  };

  return (
    <div className="bg-transparent flex justify-center items-center my-2">
      <div className="rounded-lg space-y-4 text-center">
        <p>Are you sure you want to withdraw</p>
        <div className="flex space-x-3">
          <button
            className="bg-green-700 text-white p-2"
            onClick={() => {
              handleWithdraw();
            }}
          >
            Yes, withdraw
          </button>
          <button
            onClick={() => {
              setPopup(false);
            }}
            className="bg-red-700 text-white p-2"
          >
            No, keep Quotation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
