import { Routes, Route } from "react-router-dom";
import ACMLinksBar from "./components/ACMLinksBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SocialRail from "./components/SocialRail";
import HomePage from "./pages/HomePage";
import InfoPage, { pageContent } from "./pages/InfoPage";
import ResourcesPage from "./pages/ResourcesPage";
import TeamPage from "./pages/TeamPage";

export default function App() {
  return (
    <div>
      <Navbar />
      <ACMLinksBar />
      <SocialRail />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        {Object.keys(pageContent).map((path) => (
          <Route key={path} path={path} element={<InfoPage path={path} />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
