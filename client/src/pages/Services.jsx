import React from 'react'
import servicesimage from '../assets/services.png'
function Services() {
  return (
    <div>
    <div className="h-screen w-full flex items-center justify-center">
      <div className="ml-24 w-[40%]">
        <p className="text-emerald-700 text-[40px] font-bold">
          STORAGE AND WAREHOUSING MADE SIMPLE
        </p>
        <br/>
        <p className="text-xl">
          We are the first Ethiopian on-demand warehousing platform that provides
          different storage options within multiple locations.With Go-Inventory
          services, warehouses can increase their utilization rate.On the
          other hand, businesses can benefit from flexible, dispersed storage
          and not worry about scalability issues with their inventory.{" "}
        </p>

        <button className="w-[200px] p-3 bg-emerald-700 text-white my-4">START HERE</button>
      </div>
      <div>
        <img src={servicesimage} />
      </div>
    </div>
  </div>
  )
}

export default Services