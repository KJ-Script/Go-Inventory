import React, { useEffect, useState } from "react";
import List from "../components/List";
import axios from "axios";

function Customers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/getusers").then((response) => {
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
            <p>Id</p>
            <p>Full Name</p>
            <p>Company Name</p>
            <p>Email</p>
            <p>Quotations</p>
          </div>
          {users.map((user, index) => {
            return <List data1={user.id} data2={user.fullName} data3={user.companyName} data4={user.email}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Customers;
