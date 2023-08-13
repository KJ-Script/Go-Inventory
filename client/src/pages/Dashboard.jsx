import React, { useContext } from 'react'
import { LoginContext } from '../App'
import { useLocation } from 'react-router-dom'
import DashboardBox from '../components/DashboardBox'

function Dashboard() {
    const [signedIn, setSignedIn] = useContext(LoginContext)
    const location  = useLocation()

    const signState = location.state?.signState
    const userId = location.state?.userId


    console.log("userId" , userId)

  return (
    <>
    { signState != null ? (
        <>
        <DashboardBox userId={userId}/>
        </>
        ) :  setSignedIn(false)       
            
        }
        </>
  )
}

export default Dashboard