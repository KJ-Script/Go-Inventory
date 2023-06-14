import React from 'react'

function NavBar() {
  return (
    <div className="w-full text-lg h-[60px] flex  items-center shadow-md fixed bg-white">
        <div className="flex w-[8%] ml-12">
        <div className="px-3 py-2 bg-emerald-800 text-white">Go-Inventory</div>
        </div>

        <div className="flex w-[22%] justify-between mx-12">
            <div className="hover:text-emerald-800">Home</div>
            <div className="hover:text-emerald-800">About us</div>
            <div className="hover:text-emerald-800">Services</div>
            <div className="hover:text-emerald-800">Contact us</div>            
        </div>

        <div className="w-[70%] flex justify-end space-x-3 mx-12">
            <button className="px-3 py-2 bg-emerald-800 text-white">Sign in</button>
            <button className="px-3 py-2 bg-emerald-800 text-white">Sign up</button>
        </div>
    </div>
  )
}

export default NavBar