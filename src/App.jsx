// React Router Dom
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
// Component
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// Pages
import Home from "./pages/Home"


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
