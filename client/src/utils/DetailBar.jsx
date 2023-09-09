import React from 'react'

function DetailBar({data, title}) {
  return (
    <div className="flex space-x-4">
    <div className="bg-gray-700 h-[40px] w-[46%] text-white flex items-center justify-center shadow-md">{title}</div>
    <div className="h-[40px] justify-center w-[46%] flex items-center shadow-inner border rounded-lg border-emerald-700">{data}</div>
  </div>
  )
}

export default DetailBar