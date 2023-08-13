import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import NavBar from "./components/NavBar"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Dashboard from "./pages/Dashboard"
import { createContext, useState } from "react"
import Profile from "./pages/Profile"
import Quotation from "./pages/Quotation"

export const LoginContext = createContext()

function App() {
  const [signedIn, setSignedIn] = useState()
  return (
    <LoginContext.Provider value={[signedIn, setSignedIn]}>
    <div className="min-h-screen font-outfit">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/create" element={<Quotation />} />
          <Route exact path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </div>
      </LoginContext.Provider>
    
  )
}

export default App
