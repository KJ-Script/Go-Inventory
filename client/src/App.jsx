import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import NavBar from "./components/NavBar"


function App() {

  return (
    <div className="min-h-screen font-outfit">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route exact path="/shopping" element={<Shopping />} /> */}
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
