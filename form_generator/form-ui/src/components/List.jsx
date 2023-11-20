import React from 'react'

function List({id, data1, data2, data3, data4, data5, data6, data7}) {
  return (
    <div className="w-full h-[40px] grid grid-cols-5 p-2 text-black bg-slate-200 shadow-sm">
    <p>{data1}</p>
    <p>{data2}</p>
    <p>{data3}</p>
    <p>{data4}</p>


    </div>
  )
}

export default List