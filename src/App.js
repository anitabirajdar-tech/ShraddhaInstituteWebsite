import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import WelcomeScreen from "./components/WelcomeScreen";

// Main Page Components
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Franchise from "./components/Franchise";
import Training from "./components/Training";
import Gallery from "./components/Gallery";
import DemoAndContact from "./components/DemoAndContact";

// Pages
import AboutUs from "./pages/AboutUs";
import ProgramsPage from "./pages/ProgramsPage";
import GalleryPage from "./pages/GalleryPage";

// Program Subpages
import AbacusPage from "./pages/programs/AbacusPage";
import VedicMathPage from "./pages/programs/VedicMathPage";
import DMITPage from "./pages/programs/DMITPage";
import TeacherTrainingPage from './pages/programs/TeacherTrainingPage';
import FTrainingPage from './pages/programs/FTrainingPage';

// Franchise & About Subpages
import FranchiseMainPage from './pages/FranchisePage';
import FounderPage from './pages/Aboutusprograms/FounderPage';
import AboutFranchisePage from './pages/Aboutusprograms/AboutFranchisePage';
import FranchiseTeacherParent from './pages/FranchiseFolder/FranchiseTeacherParent';
import FranchiseBusinessSchool from './pages/FranchiseFolder/FranchiseBusinessSchool';

import TeacherTraining from "./pages/TrainingFolder/TeacherTraining";
import SchoolTraining from "./pages/TrainingFolder/SchoolTraining";


import BlogPage from "./pages/blog/BlogPage"; // Add this import
import BlogPost from "./pages/blog/BlogPost"; // Add this for individual blog posts

import Chatbox from "./components/Chatbox";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) return <WelcomeScreen onSkip={() => setShowWelcome(false)} />;

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Programs />
              <Franchise />
              <Training />
              <Gallery />
              <DemoAndContact />
              <Footer />
              <WhatsAppButton />
            </>
          } />

          {/* About & Subpages */}
          <Route path="/about-us" element={<><AboutUs /><Footer /><WhatsAppButton /></>} />
          <Route path="/about/founder" element={<><FounderPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/about/about-franchise" element={<><AboutFranchisePage /><Footer /><WhatsAppButton /></>} />

          {/* Program Pages */}
          <Route path="/programs" element={<><ProgramsPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/abacus" element={<><AbacusPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/vedic-math" element={<><VedicMathPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/brain-development" element={<><DMITPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/teacher-training" element={<><TeacherTrainingPage /><Footer /><WhatsAppButton /></>} />
        <Route path="/programs/franchise-training" element={<><FTrainingPage /><Footer /><WhatsAppButton /></>} />



          {/* Franchise Main */}
          {/* Franchise Main */}
<Route path="/franchise" element={<><FranchiseMainPage /><Footer /><WhatsAppButton /></>} />
<Route path="/franchise/teacher-parent" element={<><FranchiseTeacherParent /><Footer /><WhatsAppButton /></>} />
<Route path="/franchise/business-school" element={<><FranchiseBusinessSchool /><Footer /><WhatsAppButton /></>} />

{/* Training */}
          <Route path="/training/teacher-training" element={<><TeacherTraining /><Footer /><WhatsAppButton /></>} />
<Route path="/training/school-training" element={<><SchoolTraining /><Footer /><WhatsAppButton /></>} />


          {/* Gallery & Contact */}
          <Route path="/gallery" element={<><GalleryPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/contact" element={<><DemoAndContact /><Footer /><WhatsAppButton /></>} />

            {/* Blog Routes */}
          <Route path="/blog" element={<><BlogPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/blog/:id" element={<><BlogPost /><Footer /><WhatsAppButton /></>} />




        </Routes>
        <Chatbox /> {/* Add this line */}
      </div>
    </Router>
  );
}

export default App;