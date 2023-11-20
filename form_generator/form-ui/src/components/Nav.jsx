import React from 'react'
import { useNavigate } from 'react-router-dom'


function Nav() {
    const navigate = useNavigate()
  return (
    <nav className='w-full flex justify-center py-3 space-x-7 text-md text-gray-400'>
        <div className='hover:bg-white hover:text-slate-800 p-3 text-center' onClick={()=>navigate('/')}>Warehouse</div>
        {/* <div className='hover:bg-white hover:text-slate-800 p-3 text-center' onClick={()=>navigate('/storage')}>Storage</div> */}
        <div className='hover:bg-white hover:text-slate-800 p-3 text-center' onClick={()=>navigate('/product')}>Product</div>
        <div className='hover:bg-white hover:text-slate-800 p-3 text-center' onClick={()=>navigate('/temprature')}>Temprature</div>
        <div className='hover:bg-white hover:text-slate-800 p-3 text-center' onClick={()=>navigate('/user')}>Users</div>
        <div className='hover:bg-white hover:text-slate-800 p-3 text-center' onClick={()=>navigate('/quotations')}>Quotations</div>
        <div className='hover:bg-white hover:text-slate-800 p-3 text-center' onClick={()=>navigate('/admins')}>Admins</div>
        <div className='hover:bg-white hover:text-slate-800 p-3 text-center' onClick={()=>navigate('/store')}>store</div>



    </nav>
  )
}

export default Nav