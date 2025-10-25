import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import About from "./pages/about";
import Home from "./pages/home";
import Store from "./pages/store";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
