import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ApproveSeller from "./pages/admin/ApproveSeller";
import Sellerprofile from "./pages/admin/Sellerprofile";
import ApproveProduct from "./pages/admin/ApproveProduct";
import Viewproduct from "./pages/admin/Viewproduct";
import Addproduct from "./pages/seller/Addproduct";
import Manageproduct from "./pages/seller/Manageproduct";
import Searchresult from "./pages/user/Searchresult";
import Manageorder from "./pages/seller/Manageorder";
import Viewproductseller from "./pages/seller/Viewproductseller";
import Viewproductuser from "./pages/user/Viewproductuser";
import Cart from "./pages/user/Cart";
import Ordersummary from "./pages/user/Ordersummary";
import Account from "./pages/user/Account";
import Order from "./pages/user/Order";
import Processorder from "./pages/seller/Processorder";
import Buyproduct from "./pages/user/Buyproduct";
import Payment from "./pages/user/Payment";
import Admindashboard from "./pages/admin/Admindashboard";
import Selleraccount from "./pages/seller/Selleraccount";
import Vieworder from "./pages/user/Vieworder";
import Wishlist from "./pages/user/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signin" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/approveseller" element={<ApproveSeller />}></Route>
        <Route path="/sellerprofile/:id" element={<Sellerprofile />}></Route>
        <Route path="/approveproduct" element={<ApproveProduct />}></Route>
        <Route path="/viewproduct/:id" element={<Viewproduct />}></Route>
        <Route path="/addproduct" element={<Addproduct />}></Route>
        <Route path="/manageproducts" element={<Manageproduct />}></Route>
        <Route path="/searchresult/:searchterm" element={<Searchresult />}></Route>
        <Route path="/manageorder" element={<Manageorder />}></Route>
        <Route path="/viewproductseller/:id" element={<Viewproductseller />}></Route>
        <Route path="/viewproductuser/:id" element={<Viewproductuser />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/* <Route path="/payment" element={<Ordersummary />}></Route> */}
        <Route path="/buyproduct/:id" element={<Buyproduct />}></Route>
        <Route path="/payment/:id/:quantity" element={<Payment />}></Route>
        <Route path="/profile" element={<Account />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/processorder/:id" element={<Processorder />}></Route>
        <Route path="/admindashboard" element={<Admindashboard />}></Route>
        <Route path="/selleraccount" element={<Selleraccount />}></Route>
        <Route path="/viewuserorder/:id" element={<Vieworder />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
