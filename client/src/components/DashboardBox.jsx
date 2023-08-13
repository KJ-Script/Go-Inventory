import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuotationDisplayBar from './QuotationDisplayBar'
import axios from 'axios'



function DashboardBox({userId}) {
  const companyName = "Go-technolgies"
  const navigate = useNavigate()

  const [post, setPost] = useState([])

  useEffect(() => {
    axios.post('http://localhost:8080/getQuotationById', {
      userId: userId,
    }).then((response) => {
      console.log(response.data)
      setPost(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  console.log("Dashboard", userId)

  const displayData = [
    {
      id:"K8907",
      date: "10/11/12",
      class: "safe",
      storage: "pallet",
      status: "Approved"
    },
    {
      id:"K8908",
      date: "10/11/12",
      class: "safe",
      storage: "pallet",
      status: "Approved"
    },
    {
      id:"K8909",
      date: "10/11/12",
      class: "safe",
      storage: "pallet",
      status: "Pending"
    },
    {
      id:"K8910",
      date: "10/11/12",
      class: "safe",
      storage: "pallet",
      status: "Approved"
    },
    {
      id: "K89011",
      date: "10/11/12",
      class: "Hazardous",
      storage: "pallet",
      status: "Pending"
    }
  ]
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-[90%] w-[90%] space-y-12">
          <div className="w-full flex justify-between">
            <p className="text-xl font-semibold">{companyName}'s Inventory Dashboard</p>
            <button className='bg-emerald-700 p-3 rounded-lg text-white' onClick={() => {navigate('/create', {state:{userId: userId}})}}>Create Quotation</button>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[20%] flex space-x-3 items-center">
              <p className="text-sm">Sort by</p>
              <select className="px-3 py-2 border border-emerald-700 rounded-lg text-sm bg-white font-light text-black">
                <option>Date</option>
                <option>Id</option>
                <option>Classification</option>
                <option>Pallet</option>
              </select>
            </div>
            <div className="w-[80%] flex space-x-3 justify-end">
            <input placeholder="SEARCH" type="text" className="w-[25%] border rounded-lg  px-5 py-1"/>
            <button className="p-2 bg-emerald-700 text-white rounded-lg text-sm">Search</button>
            </div>
          </div>

          <div className="w-full rounded-lg">
            <div className="w-full flex justify-center">
              <div className="w-[90%] border border-emerald-700 rounded-lg text-center flex flex-col justify-center text-xl  h-[150px] bg-white">
                <p>Quotation Details go here</p>
              </div>
            </div>
            <div className="w-full flex justify-center mt-12">
              <div className="w-[80%] flex justify-center text-gray-700 text-sm">
                <div className="w-full flex justify-between">
                  <div>Id</div>
                  <div>Location</div>
                  <div>Item Classification</div>
                  <div>Storage</div>
                  <div>Status</div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
            <hr className="my-4 flex w-[83%] "></hr>
            </div>

            {post.map((item, index) => {
              return (
                <QuotationDisplayBar key={index} data={item}/>
              )
            })

            }
           

          </div>

      </div>

    </div>
  )
}

export default DashboardBox