import { Routes, Route } from "react-router-dom";
import ACMLinksBar from "./components/ACMLinksBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SocialRail from "./components/SocialRail";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <Navbar />
      <ACMLinksBar />
      <SocialRail />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
