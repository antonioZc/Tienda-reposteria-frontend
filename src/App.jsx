import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout.jsx";
import About from "./pages/about";
import Home from "./pages/home";
import Store from "./pages/Store/Store.jsx";
import ProductDetails from "./pages/productDetails/ProductDetails.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/login/Login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
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
