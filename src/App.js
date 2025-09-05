import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import WelcomeScreen from "./components/WelcomeScreen";


// Main Page Sections
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Franchise from "./components/Franchise";
import Training from "./components/Training";
import Gallery from "./components/Gallery";
import DemoAndContact from "./components/DemoAndContact";

// Pages

//import ProgramsPage from "./pages/ProgramsPage";
import GalleryPage from "./pages/GalleryPage";
import BookDemoPage from "./pages/BookDemoPage";

// Program Subpages
import AbacusPage from "./pages/programs/AbacusPage";
import VedicMathPage from "./pages/programs/VedicMathPage";
import DMITPage from "./pages/programs/DMITPage";
import TeacherTrainingPage from "./pages/programs/TeacherTrainingPage";
import FTrainingPage from "./pages/programs/FTrainingPage";

// Franchise & About Subpages

import AboutFranchisePage from "./pages/Aboutusprograms/AboutFranchisePage";

// Franchise Folder
import FranchiseTeacherParent from "./pages/FranchiseFolder/FranchiseTeacherParent";
import FranchiseBusinessSchool from "./pages/FranchiseFolder/FranchiseBusinessSchool";

// Training Folder
import TeacherTraining from "./pages/TrainingFolder/TeacherTraining";
import SchoolTraining from "./pages/TrainingFolder/SchoolTraining";

// Blog
import BlogPage from "./pages/blog/BlogPage";
import BlogPost from "./pages/blog/BlogPost";

// Admin
import AdminDashboard from './admin/AdminDashboard';
import './admin/AdminDashboard.css';

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
          <Route
            path="/"
            element={
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
            }
          />

          {/* About Pages */}
          
          <Route path="/about" element={<><AboutFranchisePage /><Footer /><WhatsAppButton /></>} />

          {/* Program Pages */}
        
          //<Route path="/programs/abacus" element={<><AbacusPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/vedic-math" element={<><VedicMathPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/brain-development" element={<><DMITPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/teacher-training" element={<><TeacherTrainingPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/franchise-training" element={<><FTrainingPage /><Footer /><WhatsAppButton /></>} />

          {/* Franchise Pages */}
         
          <Route path="/franchise/teacher-parent" element={<><FranchiseTeacherParent /><Footer /><WhatsAppButton /></>} />
          <Route path="/franchise/business-school" element={<><FranchiseBusinessSchool /><Footer /><WhatsAppButton /></>} />

          {/* Training Pages */}
          <Route path="/training/teacher-training" element={<><TeacherTraining /><Footer /><WhatsAppButton /></>} />
          <Route path="/training/school-training" element={<><SchoolTraining /><Footer /><WhatsAppButton /></>} />

          {/* Gallery & Contact */}
          <Route path="/gallery" element={<><GalleryPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/contact" element={<><DemoAndContact /><Footer /><WhatsAppButton /></>} />

          {/* Blog */}
          <Route path="/blog" element={<><BlogPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/blog/:id" element={<><BlogPost /><Footer /><WhatsAppButton /></>} />

          {/* Book Demo Page Route */}
          <Route path="/book-demo" element={<><BookDemoPage /><Footer /><WhatsAppButton /></>} />

          {/* Admin Dashboard Route */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
