import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/PageLayout/Header/navbar.jsx";
import HomePage from "./modules/home";
import About from "./modules/about/about.jsx";
import Detail from "./modules/detail/detail.jsx";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:kanji" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
