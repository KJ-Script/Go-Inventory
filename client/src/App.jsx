import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import NavBar from "./components/NavBar"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Quotation from "./pages/Quotation"
import Details from "./pages/Details"
import { createContext, useState } from "react"
import Payment from "./pages/Payment"

export const LoginContext = createContext()

function App() {
  const [signedIn, setSignedIn] = useState()
  const [userId, setUserId] = useState()
  return (
    <LoginContext.Provider value={[signedIn, setSignedIn]}>
    <div className="min-h-screen font-outfit">
      <Router>
        <NavBar userId={userId}/>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/signin" element={<SignIn setUserId={setUserId}/>} />
          <Route exact path="/signup" element={<SignUp />} />

          {/* protected Routes */}
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/create" element={<Quotation />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
      </LoginContext.Provider>
    
  )
}

export default App
