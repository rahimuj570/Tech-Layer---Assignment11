import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
import Menu from "./Components/Header/Menu";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/User_Management/Login";
import Signup from "./Components/User_Management/Signup";
import ResetPass from "./Components/User_Management/ResetPass";

function App() {
  return (
    <div className="font-poppins">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/reset_pass" element={<ResetPass />}></Route>
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
