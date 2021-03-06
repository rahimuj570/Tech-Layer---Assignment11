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
import Update from "./Components/Products/Update";
import ManageProduct from "./Components/Products/ManageProducts";
import AddProduct from "./Components/Products/AddProduct";
import MyProducts from "./Components/Products/MyProducts";
import NotFound404 from "./Components/NotFound404/NotFound404";
import RequireAuth from "./Components/User_Management/RequireAuth";
import Blogs from "./Components/Blogs";

function App() {
  return (
    <div className="font-poppins">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/reset_pass" element={<ResetPass />}></Route>

        <Route
          path="/update/:id"
          element={
            <RequireAuth>
              <Update />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/manage_products"
          element={
            <RequireAuth>
              <ManageProduct />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/my_products"
          element={
            <RequireAuth>
              <MyProducts />
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
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
