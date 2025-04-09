import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import IndexPage from "./components/index";
import VideoSection from "./components/video";
import Testimonials from "./components/rating";
import Footer from "./components/footer";
import Login from "./pages/login";
import ListProperty from "./pages/ListProperty";
import Home from "./pages/home"; 

function PageLayout() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/login" ||
    location.pathname === "/list-property" ||
    location.pathname === "/home";

  return (
    <>
      {!hideHeaderFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<><IndexPage /><VideoSection /><Testimonials /></>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list-property" element={<ListProperty />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <PageLayout />
    </Router>
  );
}

export default App;
