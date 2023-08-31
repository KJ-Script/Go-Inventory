import React from 'react'
import { useNavigate } from 'react-router-dom'

function Popup({setPopup, userId}) {
    const navigate = useNavigate()
  return (
    <div className="bg-transparent flex justify-center items-center my-2">
        <div className="rounded-lg space-y-4 text-center">
            <p>Are you sure you want to withdraw</p>
            <div className='flex space-x-3'>
            <button className="bg-green-700 text-white p-2" onClick={() => {alert('Withdraw compelte')
        navigate('/dashboard', {state:{userId: userId}})}}>Yes, withdraw</button>
            <button onClick={() => {
                setPopup(false)}} className="bg-red-700 text-white p-2">No, keep Quotation</button>
            </div>

        </div>
    </div>
  )
}

export default Popup