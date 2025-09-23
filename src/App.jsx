import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./Pages/Home/HomePages";
import Error from "./Pages/Error/Error";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Arrived from "./Pages/Arrived/Arrived";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Register/Login";
import SignUp from "./Pages/Register/SignUp";
import ProductInfo from "./Pages/ProductIfo/ProductInfo";
import User from "./Pages/User/User";
import Admin from "./Pages/Admin/Admin";
import AddItem from "./Pages/Admin/AddItem";
import UpdateItem from "./Pages/Admin/UpdateItem";
import State from "./components/context/State";
import { Toaster } from "react-hot-toast";
import Category from "./Pages/Category/Category";
import { ProtectedRouteUser } from "./ProtectedRoute/ProtectedRouteUser";
import {ProtectedRouteAdmin} from './ProtectedRoute/ProtectedRouteAdmin'
// import BuyPage from "./components/BuyPage/BuyPage";

function App() {
  return (
    <State>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/*" element={<Error />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allproducts" element={<Arrived />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="category/:categorytitle" element={<Category/>}/>
          {/* <Route path="/buypage" element={<BuyPage/>}/> */}
          <Route
            path="/user"
            element={
              <ProtectedRouteUser>
                <User />
              </ProtectedRouteUser>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRouteAdmin>
                <Admin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/additem"
            element={
              <ProtectedRouteAdmin>
                <AddItem />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/updateItem/:id"
            element={
              <ProtectedRouteAdmin>
                <UpdateItem />
              </ProtectedRouteAdmin>
            }
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </State>
  );
}

export default App;
