
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import Footer from "./components/Footer/Footer";
import MatrixCursor from "./components/MouseCursor/Mouse";
import SkillsPage from "./Pages/SkillsPage";
function App() {
  return (
    <>
      <BrowserRouter basename="https://arturrdix.github.io/new_porfolio_page/">
      <MatrixCursor/>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
