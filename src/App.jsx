import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from "./Components/footer";
import AboutMe from './pages/AboutMe';
import Projects from "./pages/Projects";
import Experience from "./pages/experience";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className='bg-black md:h-screen h-fit md:overflow-hidden text-white'>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
