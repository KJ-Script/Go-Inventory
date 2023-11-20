import React from 'react'
import List from '../components/List'

function Admins() {
  return (
    <div>
    <div className="flex justify-center ">
      <div className="bg-white p-4 rounded-lg shadow-md w-[70%]">
        users
        <div className="w-full bg-slate-700 h-[40px] flex justify-between items-center p-2 text-white">
          <p>Id</p>
          <p>Full Name</p>
          <p>Email</p>
          <p>Quotations</p>
          <p>Role</p>
        </div>
          <p>No admins at the moment</p>
      </div>
    </div>
  </div>
  )
}

export default Admins