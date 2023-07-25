import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import NavBar from "./components/NavBar"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"


function App() {

  return (
    <div className="min-h-screen font-outfit">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
