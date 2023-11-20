import React from 'react'

function ItemsList({data1, data2, data3, data4, data5, data6}) {
    return (
        <div className="w-full h-[40px] grid grid-cols-6 p-3 text-black bg-slate-200 shadow-sm">
        <p>{data1}</p>
        <p>{data2}</p>
        <p>{data3}</p>
        <p>{data4}</p>
        <p>{data5}</p>
        <p>{data6}</p>
    
        </div>
      )
}

export default ItemsList