import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./Components/header/Header";
import SalesList from "./pages/Sales/SalesList";
import ReportList from "./pages/AllReports/ReportList";
import CustomerList from "./pages/AllCustomers/CustomerList";
import SellersList from "./pages/AllSellers/SellersList";
import AllplicationList from "./pages/UserAlpplication/AllplicationList";
import CoupenList from "./pages/Coupens/CoupenList";
import UsersList from "./pages/Users/UsersList";
import AllCategories from "./pages/Categories/AllCategories";
import SettingList from "./pages/Settings/SettingList";
import AddCoupen from "./pages/Coupens/AddCoupen";
import AddNewUser from "./pages/Users/AddNewUser";
import AddNewCategory from "./pages/Categories/AddNewCategory";
import AuthLogin from "./Components/AuthComponent/AuthLogin";

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Sidebar />
       <div className="right-container">

        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/AllSales" element={<SalesList />} />
          <Route exact path="/AllReports" element={<ReportList />} /> 
          <Route exact path="/AllCustomers" element={<CustomerList />} /> 
          <Route exact path="/AllSellers" element={<SellersList />} /> 
          <Route exact path="/AllUserApplicationSetup" element={<AllplicationList />} /> 

          <Route exact path="/AllCategories" element={<AllCategories />} /> 
          <Route exact path="/add-new-category" element={<AddNewCategory />} /> 

          <Route exact path="/AllSettings" element={<SettingList />} /> 

          <Route exact path="/AllCoupens" element={<CoupenList />} /> 
          <Route exact path="/add-new-coupen" element={<AddCoupen />} /> 

          <Route exact path="/AllUsers" element={<UsersList />} /> 
          <Route exact path="/create-new-user" element={<AddNewUser />} /> 

        </Routes>
        </div> 
      </div>
      
    </div>
  );
}

export default App;
