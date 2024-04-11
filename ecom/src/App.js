import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ApproveSeller from "./pages/admin/ApproveSeller";
import Sellerprofile from "./pages/admin/Sellerprofile";
import ApproveProduct from "./pages/admin/ApproveProduct";
import Viewproduct from "./pages/admin/Viewproduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signin" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/approveseller" element={<ApproveSeller />}></Route>
        <Route path="/sellerprofile" element={<Sellerprofile />}></Route>
        <Route path="/approveproduct" element={<ApproveProduct />}></Route>
        <Route path="/viewproduct" element={<Viewproduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
