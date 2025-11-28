import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/home";
import Store from "./pages/Store/Store.jsx";
import ProductDetails from "./pages/productDetails/ProductDetails.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/login/Login.jsx";
import AdminPanel from "./pages/adminPanel.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Purchase from "./pages/purchase/Purchase.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="adminPanel"
            element={
              <PrivateRoute requiredRole="admin">
                <AdminPanel />
              </PrivateRoute>
            }
          />

          <Route
            path="purchase"
            element={
              <PrivateRoute requiredRole="user">
                <Purchase />
              </PrivateRoute>
            }
          />
          <Route path="store" element={<Store />} />
          <Route path="productDetails/:id" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
