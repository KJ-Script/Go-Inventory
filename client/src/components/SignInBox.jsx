import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import axios from "axios"

function SignInBox() {
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useContext(LoginContext)
  
  const [companyName, setCompanyName] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = () => {
    axios.post("http://localhost:8080/login", {
      companyName,
      password
    }).then((response) => {
      console.log('Response: ', response)
      if(response.data.status == 200) {
        setSignedIn(true)
        console.log("signed In")
        // console.log(response.data.id)
        navigate("/dashboard" , {state:{signState: signedIn, userId: response.data.id}});
      } else {
        alert('Try again')
      }
    }).catch((err) => {
      console.log(err);
    })

  } 
  
  return (
    <div className="h-[60%] w-full md:w-[25%] border rounded-lg shadow-md shadow-emerald-400 bg-white">
      <div className="w-full flex flex-col items-center h-[15%] justify-center text-2xl font-bold text-emerald-700 space-y-2 my-4">
        <div>WELCOME BACK,</div>
        <div>PLEASE LOG IN</div>
        <div className="h-[2px] w-[80%] border border-emerald-700"></div>
      </div>

      <div className="h-[45%] w-full flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="companyName"
          className="w-[80%] p-4 h-[20%] border border-emerald-700"
          onChange={(e) => {setCompanyName(e.target.value)}}
        />
        <input
          type="Password"
          placeholder="password"
          className="w-[80%] p-4 h-[20%] border border-emerald-700"
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <button
          className="w-[80%] p-4 h-[20%] bg-emerald-700 text-center text-lg text-white font-semibold"
          onClick={() => {
            handleSubmit()
          }}
        >
          Sign in
        </button>
        <a>Forgot Password?</a>
        <div className="h-[2px] w-[80%] border border-emerald-700"></div>
      </div>
      <div className="h-[30%] w-full flex flex-col items-center space-y-4">
        <a>Dont have an account?</a>
        <button
          className="w-[80%] p-4 h-[30%] bg-emerald-700 text-center text-lg text-white font-semibold"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Create An account
        </button>
      </div>
    </div>
  );
}

export default SignInBox;
