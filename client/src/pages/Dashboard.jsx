import React, { useContext } from "react";
import { LoginContext } from "../App";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashboardBox from "../components/DashboardBox";

function Dashboard() {
  const [signedIn, setSignedIn] = useContext(LoginContext);
  const location = useLocation();

  const signState = location.state?.signState;
  const userId = location.state?.userId;

  console.log("userId", userId);

  return (
    <>
      {signedIn ? (
        <DashboardBox userId={userId} />
      ) : (
        <Link
          className="w-full flex justify-center text-pruple-500 underline hover:text-blue-500"
          to="/signin"
        >
          Login Please
        </Link>
      )}
    </>
  );
}

export default Dashboard;
