import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componrnt/Navbar";
import Footer from "./componrnt/Footer";
import './App.css'
import Register from "./pages/Register";
import Login from "./pages/Login";


const App = () => {
  return (
    <div className="nav-menu">
  <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/search" element={<Search />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;