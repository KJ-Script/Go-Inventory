import React from 'react'
import storage from '../assets/why.png'

function Why() {
  return (
    <div className="h-screen">
        <div className='w-full flex justify-center h-[5%] items-center'>
        <div className="text-center text-2xl text-emerald-700 font-bold border shadow-lg w-[50%] flex justify-center items-center h-full">
            <p>WHY CHOOSE US?</p>
        </div>
        </div>
        <div className="w-full flex justify-center my-[5%] space-x-8">
            
            <div className="text-2xl text-emerald-700 p-4 border shadow-lg flex flex-col items-center">
            <p className="font-bold">STORAGE SOLUTIONS</p>
            <p className="text-xl">Custom storage temprature</p>
            <p className="text-xl">Safe and Secure</p>
            <p className="text-xl">State of the art technolgy and machinery</p>
            <p className="text-xl">Secure Transportation</p>
            <p className="text-xl">Secure Transportation</p>
            <p className="text-xl">Secure Transportation</p>
            <p className="text-xl">Secure Transportation</p>
            <p className="text-xl">Secure Transportation</p>
            <p className="text-xl">Custom storage temprature</p>
            <p className="text-xl">Safe and Secure</p>
            <p className="text-xl">State of the art technolgy and machinery</p>
            </div>

            <div>
            <img src={storage}/>
            </div>

        </div>
        <div className='w-full flex justify-center h-[15%] items-center'>
        <div className="text-center text-2xl text-emerald-700 border shadow-lg w-[80%] flex justify-center items-center h-full">
            <p>We employ highly qualified staff members to boost the efficiency and safety of the workplace. We provide our clients with the storage solutions they require wherever they need them in our wide network of warehouses across the Country. We collaborate with partners that provide temperature-controlled environments and highly equipped facilities that accommodate a variety of products with top-notch service quality. </p>
        </div>
        </div>
    </div>
  )
}

export default Why