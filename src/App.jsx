import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import FloatingLines from "./components/FloatingLines";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import GradeNotes from "./pages/GradeNotes";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <div className="app-shell">
      <div className="site-background" aria-hidden="true">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[4, 5, 4]}
          lineDistance={[8, 8, 8]}
          animationSpeed={0.35}
          interactive={false}
          parallax
          parallaxStrength={0.05}
          linesGradient={["#2563eb", "#7c3aed", "#e945f5", "#ffffff"]}
          mixBlendMode="screen"
        />
      </div>

      <div className="site-background-overlay" aria-hidden="true" />

      <div className="site-content">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:gradeId" element={<GradeNotes />} />
          <Route path="/notes/:gradeId/:courseId" element={<CourseDetail />} />
          <Route path="/notlar" element={<Navigate to="/notes" replace />} />
          <Route path="/notlar/:gradeId" element={<GradeNotes />} />
          <Route path="/notlar/:gradeId/:courseId" element={<CourseDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
