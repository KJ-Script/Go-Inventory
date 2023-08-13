import React, { useContext } from 'react'
import { LoginContext } from '../App';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const [signedIn, setSignedIn] = useContext(LoginContext)
    const navigate = useNavigate()
  return (
    <div>Profile
    
    <button
    className="px-3 py-2 bg-emerald-800 text-white"
    onClick={() => {
      navigate("/signin");
      setSignedIn(false);
    }}
  >
    Log out
  </button>
  </div>
  )
}

export default Profile