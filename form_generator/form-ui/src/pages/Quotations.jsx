import React, { useEffect, useState } from 'react'
import axios from "axios";
import ItemsList from '../components/ItemsList';

function Quotations() {
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/getquotations").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);
  console.log("users: ", users);

  return (
    <div>
    <div className="flex justify-center ">
      <div className="bg-white p-4 rounded-lg shadow-md w-[70%]">
        users
        <div className="w-full bg-slate-700 h-[40px] flex justify-between items-center p-2 text-white">
          <p>quotationId</p>
          <p>user_Id</p>
          <p>Storage Type</p>
          <p>Product Type</p>
          <p>Storage State</p>
          <p>Storage Location</p>
        </div>
        {users.map((user, index) => {
            return <ItemsList data1={user.q_id} data2={user.user_id} data3={user.storageType} data4={user.productType} data5={user.storageState} data6={user.storageLocation}/>;
          })}
      </div>
    </div>
  </div>
  )
}

export default Quotations