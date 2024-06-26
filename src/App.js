import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import statement
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/Signup";
import Login_customer from "./Components/Login/Login-customer";
import Login_police from "./Components/Login/Login-police";
import Complain from "./Components/Complaint-page/Complain";
import Complaint from "./Components/Complain-view/viewcomplaint";
import Services from "./Components/services/services";
import Aboutus from "./Components/about us/aboutus";
import Contactus from "./Components/contactus/contactus";
import Adminlogin from "./Components/Admin/Adminlogin";
import Navbar from "./Components/Nav/Navbar";
import Login from "./Components/Login/Login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Updated syntax for rendering components */}

        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-customer" element={<Login_customer />} />
        <Route path="/login-police" element={<Login_police />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/view-complaint" element={<Complaint />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
      </Routes>
    </Router>
  );
}
export default App;
