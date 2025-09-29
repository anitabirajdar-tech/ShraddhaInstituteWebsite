import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

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
import GetInTouch from "./components/GetInTouch";

// Pages
import GalleryPage from "./pages/GalleryPage";
import BookDemoPage from "./pages/BookDemoPage";

// Program Subpages
import AbacusPage from "./pages/programs/AbacusPage";
import VedicMathPage from "./pages/programs/VedicMathPage";
import TeacherTrainingPage from "./pages/programs/TeacherTrainingPage";
import FTrainingPage from "./pages/programs/FTrainingPage";
import WorkshopsPage from "./pages/programs/WorkshopsPage";
import FranchiseTeacherTrainingPage from "./pages/programs/FranchiseTeacherTrainingPage";

// Franchise & About Subpages
import AboutFranchisePage from "./pages/Aboutusprograms/AboutFranchisePage";

// Franchise Folder
import FranchiseTeacherParent from "./pages/FranchiseFolder/FranchiseTeacherParent";
import FranchiseBusinessSchool from "./pages/FranchiseFolder/FranchiseBusinessSchool";

// Training Folder
import TeacherTraining from "./pages/TrainingFolder/TeacherTraining";
import SchoolTraining from "./pages/TrainingFolder/SchoolTraining";

// Admin
import AdminDashboard from './admin/AdminDashboard';
import './admin/AdminDashboard.css';

import 'aos/dist/aos.css';

// Gallery 2022 Pages
import StateLevelCompetition2022 from './pages/gallery/StateLevelCompetition2022';
import NationalLevelCompetition2022 from './pages/gallery/NationalLevelCompetition2022';

// Gallery 2023 Pages
import NationalLevelCompetition2023 from './pages/gallery/NationalLevelCompetition2023';
import StateLevelCompetition2023 from './pages/gallery/StateLevelCompetition2023';
import AnnualMeet2023 from './pages/gallery/AnnualMeet2023';

// Gallery 2024 Pages
import AnnualMeet2024 from './pages/gallery/AnnualMeet2024';
import StateLevelCompetition2024 from './pages/gallery/StateLevelCompetition2024';
import NationalLevelCompetition2024 from './pages/gallery/NationalLevelCompetition2024';

// Gallery 2025 Pages
import AnnualMeet2025 from './pages/gallery/AnnualMeet2025';
import StateLevelCompetition2025 from './pages/gallery/StateLevelCompetition2025';
import NationalLevelCompetition2025 from './pages/gallery/NationalLevelCompetition2025';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Remove or comment out this line if you have it anywhere:
  // window.scrollTo(0, document.body.scrollHeight);

  // If you have a custom ScrollToTop component, ensure it only scrolls to top on route change, not on initial load after WelcomeScreen.

  if (showWelcome) return <WelcomeScreen onSkip={() => setShowWelcome(false)} />;

  return (
    <Router>
      <ScrollToTop />
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
                <GetInTouch /> {/* Call GetInTouch instead of DemoAndContact */}
                <Footer />
                <WhatsAppButton />
              </>
            }
          />

          {/* About Pages */}
          
          <Route path="/about" element={<><AboutFranchisePage /><Footer /><WhatsAppButton /></>} />

          {/* Program Pages */}
        
          <Route path="/programs/abacus" element={<><AbacusPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/vedic-math" element={<><VedicMathPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/teacher-training" element={<><TeacherTrainingPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/franchise-training" element={<><FTrainingPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/workshops" element={<><WorkshopsPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/franchise-teacher-training" element={<><FranchiseTeacherTrainingPage /><Footer /><WhatsAppButton /></>} />

          {/* Franchise Pages */}
         
          <Route path="/franchise/teacher-parent" element={<><FranchiseTeacherParent /><Footer /><WhatsAppButton /></>} />
          <Route path="/franchise/business-school" element={<><FranchiseBusinessSchool /><Footer /><WhatsAppButton /></>} />

          {/* Training Pages */}
          <Route path="/training/teacher-training" element={<><TeacherTraining /><Footer /><WhatsAppButton /></>} />
          <Route path="/training/school-training" element={<><SchoolTraining /><Footer /><WhatsAppButton /></>} />

          {/* Gallery & Contact */}
          <Route path="/gallery" element={<><GalleryPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/contact" element={<><DemoAndContact /><Footer /><WhatsAppButton /></>} />

          {/* Book Demo Page Route */}
          <Route path="/book-demo" element={<><BookDemoPage /><Footer /><WhatsAppButton /></>} />

          {/* Admin Dashboard Route */}
          <Route path="/admin" element={<><AdminDashboard /><Footer /><WhatsAppButton /></>} />

         

          {/* New Gallery 2022 Pages */}
          <Route path="/gallery/2022/state-level-competition" element={<><StateLevelCompetition2022 /><Footer /><WhatsAppButton /></>} />
          <Route path="/gallery/2022/national-level-competition" element={<><NationalLevelCompetition2022 /><Footer /><WhatsAppButton /></>} />

          {/* New Gallery 2023 Pages */}
          <Route path="/gallery/2023/state-level-competition" element={<><StateLevelCompetition2023 /><Footer /><WhatsAppButton /></>} />
          <Route path="/gallery/2023/national-level-competition" element={<><NationalLevelCompetition2023 /><Footer /><WhatsAppButton /></>} />
          <Route path="/gallery/2023/annual-meet" element={<><AnnualMeet2023 /><Footer /><WhatsAppButton /></>} />

          {/* Gallery 2024 Pages */}
          <Route path="/gallery/2024/state-level-competition" element={<><StateLevelCompetition2024 /><Footer /><WhatsAppButton /></>} />
          <Route path="/gallery/2024/national-level-competition" element={<><NationalLevelCompetition2024 /><Footer /><WhatsAppButton /></>} />
          <Route path="/gallery/2024/annual-meet" element={<><AnnualMeet2024 /><Footer /><WhatsAppButton /></>} />

          {/* Gallery 2025 Pages */}
          <Route path="/gallery/2025/state-level-competition" element={<><StateLevelCompetition2025 /><Footer /><WhatsAppButton /></>} />
          <Route path="/gallery/2025/national-level-competition" element={<><NationalLevelCompetition2025 /><Footer /><WhatsAppButton /></>} />
          <Route path="/gallery/2025/annual-meet" element={<><AnnualMeet2025 /><Footer /><WhatsAppButton /></>} />
          <Route path="/gallery/StateLevelCompetition2025" element={<><StateLevelCompetition2025 /><Footer /><WhatsAppButton /></>} />



          {/* footer link */}

<Route path="/courses" element={<><FranchiseTeacherTrainingPage /><Footer /><WhatsAppButton /></>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;


