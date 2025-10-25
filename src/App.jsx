import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./pages/about";
import Home from "./pages/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
