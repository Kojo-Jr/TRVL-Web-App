import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  Services,
  SignUp
} from "../src/components/Pages/PageIndex";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
