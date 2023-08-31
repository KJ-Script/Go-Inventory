import React from 'react'

function DetailsDispalyBar({data}) {
  return (
    <>
    <div className="w-full flex justify-center">
      <div className="w-[80%] flex justify-center text-gray-700 text-sm hover:bg-gray-200 hover:w-full hover:p-3 hover:duration-300">
        <div className="w-full flex justify-between">
          <div>{data.q_id}</div>
          <div>{data.storageType}</div>
          <div>{data.productType}</div>
          <div>{data.storageState}</div>
          <div className={"Approved" == "Approved"? "text-green-500 font-semibold" : "text-yellow-500 font-semibold"}>Pending</div>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-center">
      <hr className="my-4 flex w-[83%] "></hr>
    </div>
  </>
  )
}

export default DetailsDispalyBar