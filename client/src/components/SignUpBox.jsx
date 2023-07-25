import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpBox() {
    const navigate = useNavigate
  return (
    <div className="h-[80%] w-full md:w-[35%] border rounded-lg shadow-md shadow-emerald-400 bg-white">
        <div className="w-full flex flex-col items-center h-[15%] justify-center text-2xl font-bold text-emerald-700 space-y-2 my-4">
          <div>WELCOME TRAVELER,</div>
          <div>CREATE YOUR ACCOUNT</div>
          <div className="h-[2px] w-[80%] border border-emerald-700"></div>
        </div>

        <div className="h-[50%] w-full flex flex-col items-center space-y-4">
            <input type="text" placeholder="Full Name" className="w-[80%] p-4 h-[20%] border border-emerald-700"/>
            <input type="text" placeholder="Company Name" className="w-[80%] p-4 h-[20%] border border-emerald-700"/>
            <input type="email" placeholder="Email" className="w-[80%] p-4 h-[20%] border border-emerald-700"/>
            <input type="Password" placeholder="Password" className="w-[80%] p-4 h-[20%] border border-emerald-700"/>
            <button className="w-[80%] p-4 h-[20%] bg-emerald-700 text-center text-lg text-white font-semibold">Sign Up</button>
            <div className="h-[2px] w-[80%] border border-emerald-700"></div>
        </div>
        <div className="h-[30%] w-full flex flex-col items-center space-y-4 my-4">
            <a>Already have an account</a>
            <button className="w-[80%] p-4 h-[30%] bg-emerald-700 text-center text-lg text-white font-semibold" onClick={() => {
                navigate('/signin')
            }}>Sign in</button>
        </div>
      </div>
  )
}

export default SignUpBox