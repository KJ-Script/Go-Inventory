import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignInBox() {
    const navigate = useNavigate()
  return (
    <div className="h-[60%] w-full md:w-[25%] border rounded-lg shadow-md shadow-emerald-400 bg-white">
        <div className="w-full flex flex-col items-center h-[15%] justify-center text-2xl font-bold text-emerald-700 space-y-2 my-4">
          <div>WELCOME BACK,</div>
          <div>PLEASE LOG IN</div>
          <div className="h-[2px] w-[80%] border border-emerald-700"></div>
        </div>

        <div className="h-[45%] w-full flex flex-col items-center space-y-4">
            <input type="email" placeholder="email" className="w-[80%] p-4 h-[20%] border border-emerald-700"/>
            <input type="Password" placeholder="password" className="w-[80%] p-4 h-[20%] border border-emerald-700"/>
            <button className="w-[80%] p-4 h-[20%] bg-emerald-700 text-center text-lg text-white font-semibold">Sign in</button>
            <a>Forgot Password?</a>
            <div className="h-[2px] w-[80%] border border-emerald-700"></div>
        </div>
        <div className="h-[30%] w-full flex flex-col items-center space-y-4">
            <a>New to GO Inventory?</a>
            <button className="w-[80%] p-4 h-[30%] bg-emerald-700 text-center text-lg text-white font-semibold" onClick={() => {navigate('/signup')}}>Create An account</button>
        </div>
      </div>
  )
}

export default SignInBox