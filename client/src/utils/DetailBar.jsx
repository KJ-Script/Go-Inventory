import React from 'react'

function DetailBar({data, title}) {
  return (
    <div className="space-x-4 flex">
    <div className="bg-emerald-700 text-white p-3 rounded-lg shadow-lg">{title}</div>
    <div className="bg-gray-200 text-black shadow-inner p-3 text-center rounded-lg">{data}</div>
  </div>
  )
}

export default DetailBar