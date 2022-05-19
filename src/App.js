import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Navbar from "./componrnt/Navbar";
import Footer from "./componrnt/Footer";
import './App.css'
import ContactList from "./pages/ContactList";

const App = () => {
  return (
    <div className="nav-menu">
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/search" element={<Search />} />
       {/* <Route path="/" component={Home} exact />
      <Route path="/search" component={Search} /> */}

      {/* Footer */}
      <Route path="/contactlist" element={<ContactList />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;