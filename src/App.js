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

//import ProgramsPage from "./pages/ProgramsPage";
import GalleryPage from "./pages/GalleryPage";
import BookDemoPage from "./pages/BookDemoPage";

// Program Subpages
import AbacusPage from "./pages/programs/AbacusPage";
import VedicMathPage from "./pages/programs/VedicMathPage";
import DMITPage from "./pages/programs/DMITPage";
import TeacherTrainingPage from "./pages/programs/TeacherTrainingPage";
import FTrainingPage from "./pages/programs/FTrainingPage";
import WorkshopsPage from "./pages/programs/WorkshopsPage";

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

// Events
 import Events2019Page from "./pages/events/Events2019Page";
// import Events2020Page from "./pages/events/Events2020Page";
// import Events2021Page from "./pages/events/Events2021Page";
// import Events2022Page from "./pages/events/Events2022Page";
// import Events2023Page from "./pages/events/Events2023Page";
// import Events2024Page from "./pages/events/Events2024Page";

// Gallery 2022 Pages
import StateLevelCompetition2022 from './pages/gallery/StateLevelCompetition2022';
import NationalLevelCompetition2022 from './pages/gallery/NationalLevelCompetition2022';

// Gallery 2023 Pages
import NationalLevelCompetition2023 from './pages/gallery/NationalLevelCompetition2023';
import StateLevelCompetition2023 from './pages/gallery/StateLevelCompetition2023';
import AnnualMeet2023 from './pages/gallery/AnnualMeet2023';

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
          <Route path="/programs/brain-development" element={<><DMITPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/teacher-training" element={<><TeacherTrainingPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/franchise-training" element={<><FTrainingPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/programs/workshops" element={<><WorkshopsPage /><Footer /><WhatsAppButton /></>} />

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

          {/* Events Pages */}
          <Route path="/events/2019" element={<><Events2019Page /><Footer /><WhatsAppButton /></>} />
          {/* <Route path="/events/2020" element={<><Events2020Page /><Footer /><WhatsAppButton /></>} /> */}
          {/* <Route path="/events/2021" element={<><Events2021Page /><Footer /><WhatsAppButton /></>} /> */}
          {/* <Route path="/events/2022" element={<><Events2022Page /><Footer /><WhatsAppButton /></>} /> */}
          {/* <Route path="/events/2023" element={<><Events2023Page /><Footer /><WhatsAppButton /></>} /> */}
          {/* <Route path="/events/2024" element={<><Events2024Page /><Footer /><WhatsAppButton /></>} /> */}

          {/* New Gallery 2022 Pages */}
          <Route path="/gallery/2022/state-level-competition" element={<StateLevelCompetition2022 />} />
          <Route path="/gallery/2022/national-level-competition" element={<NationalLevelCompetition2022 />} />

          {/* New Gallery 2023 Pages */}
          <Route path="/gallery/2023/state-level-competition" element={<StateLevelCompetition2023 />} />
          <Route path="/gallery/2023/national-level-competition" element={<NationalLevelCompetition2023 />} />
          <Route path="/gallery/2023/annual-meet" element={<AnnualMeet2023 />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
