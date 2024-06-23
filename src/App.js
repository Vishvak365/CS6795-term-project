import "./App.css";
import { Routes, Route } from "react-router-dom";

import WelcomePage from "./Pages/Welcome_Page";
import StandardPage from "./Pages/Standard_Page";
import ADHDPage from "./Pages/ADHD_Page";
import ADHDWelcomePage from "./Pages/ADHD_Intro_Page";
import EndPage from "./Pages/End_Page";
function App() {
  return (
    <Routes>
      <Route path="/" index="true" element={<WelcomePage />} />
      <Route path="standard" element={<StandardPage />} />
      <Route path="adhd" element={<ADHDPage />} />
      <Route path="adhd_intro" element={<ADHDWelcomePage />} />
      <Route path="end" element={<EndPage />} />
      <Route path="*" element={<WelcomePage />} />
    </Routes>
  );
}

export default App;
