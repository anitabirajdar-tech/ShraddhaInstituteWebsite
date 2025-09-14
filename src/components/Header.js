import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';
// ✅ Firestore imports
import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseApp from "../firebase"; // your firebase.js config
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalculator, 
  faBrain, 
  faSquareRootAlt, 
  faTimes,
  faChalkboardTeacher,
  faStore,
  faUsers,
  faSchool,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null); // ✅ state for logo

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);

    // Fetch logo from Firestore
    const fetchLogo = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const docRef = doc(db, "websiteAssets", "header"); // adjust collection/doc name
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setLogoUrl(docSnap.data().logo);
        } else {
          console.log("No logo found in Firestore!");
        }
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };
    fetchLogo();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setHoveredDropdown(null);
  };

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="announcement-content">
            <span className="sparkle">✨</span> 
            <span className="announcement-text">
              Elevate Your Teaching with <strong>Maker Abacus and Vedic Math</strong>
            </span>
            <span className="sparkle">✨</span>
          </div>

          <div className="social-icons no-circle">
            <a href="https://www.facebook.com/share/1FXuy9uHEW/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/shraddhainstitute?igsh=a2sxY2M3bTRqNWx5" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@ShraddhaInstitute" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://wa.me/919168756060" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled shadow-sm' : 'navbar-light bg-white'} py-2 py-lg-1`}>
        <div className="container">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <div className="logo-container d-flex align-items-center">
              <img 
                src={logoUrl || "https://via.placeholder.com/150"} 
                alt="Shraddha Institute Logo" 
                className="main-logo" 
              />
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {isOpen && (
            <button className="mobile-menu-close d-lg-none" onClick={closeMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
              </li>

              {/* About Us Dropdown */}
              <li className="nav-item">
  <Link to="/about" className="nav-link" onClick={closeMenu}>
    About Us
  </Link>
</li>


              {/* Programs Mega Menu */}
              <li 
                className="nav-item dropdown mega-menu"
                onMouseEnter={() => setHoveredDropdown('programs')}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="programsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={hoveredDropdown === 'programs'}
                >
                  Programs <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                </a>
                <div 
                  className={`dropdown-menu mega-dropdown p-4 ${hoveredDropdown === 'programs' ? 'show' : ''}`}
                  aria-labelledby="programsDropdown"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="program-category">
                        <h5 className="category-title">Student Programs</h5>
                        <div className="program-list">
                          <Link to="/programs/abacus" className="dropdown-item program-item" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faCalculator} className="me-2 text-orange" />
                            <div>
                              <div className="program-title">Abacus</div>
                              <div className="program-desc">Ages 5-15 • Mental Math Mastery</div>
                            </div>
                          </Link>
                          <Link to="/programs/vedic-math" className="dropdown-item program-item" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faSquareRootAlt} className="me-2 text-blue" />
                            <div>
                              <div className="program-title">Vedic Math</div>
                              <div className="program-desc">Ancient Techniques • Faster Calculations</div>
                            </div>
                          </Link>
                          <Link to="/programs/brain-development" className="dropdown-item program-item" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faBrain} className="me-2 text-purple" />
                            <div>
                              <div className="program-title">DMIT Program</div>
                              <div className="program-desc">Brain Mapping • Career Guidance</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="program-category">
                        <h5 className="category-title">Teacher Programs</h5>
                        <div className="program-list">
                          <Link to="/programs/teacher-training" className="dropdown-item program-item" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2 text-green" />
                            <div>
                              <div className="program-title">Teacher Training</div>
                              <div className="program-desc">Certification • 120 Hours</div>
                            </div>
                          </Link>
                          <Link to="/programs/franchise-training" className="dropdown-item program-item" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faStore} className="me-2 text-red" />
                            <div>
                              <div className="program-title">Franchise Training</div>
                              <div className="program-desc">Business Setup • Support</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="program-category mt-3">
                        <h5 className="category-title">Special Programs</h5>
                        <div className="program-list">
                          <Link to="/programs/workshops" className="dropdown-item program-item" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faUsers} className="me-2 text-teal" />
                            <div>
                              <div className="program-title">Workshops</div>
                              <div className="program-desc">Short-term • Intensive</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Franchise Dropdown */}
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => setHoveredDropdown('franchise')}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="franchiseDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={hoveredDropdown === 'franchise'}
                >
                  Franchise <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                </a>
                <ul 
                  className={`dropdown-menu ${hoveredDropdown === 'franchise' ? 'show' : ''}`}
                  aria-labelledby="franchiseDropdown"
                >
                 
                  <li>
                    <Link to="/franchise/teacher-parent" className="dropdown-item" onClick={closeMenu}>
                      <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
                      For Teachers & Parents
                    </Link>
                  </li>
                  <li>
                    <Link to="/franchise/business-school" className="dropdown-item" onClick={closeMenu}>
                      <FontAwesomeIcon icon={faStore} className="me-2" />
                      For Schools & Business Owners
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Training Dropdown */}
              <li 
                className="nav-item dropdown"
                onMouseEnter={() => setHoveredDropdown('training')}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="trainingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={hoveredDropdown === 'training'}
                >
                  Training <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                </a>
                <ul 
                  className={`dropdown-menu ${hoveredDropdown === 'training' ? 'show' : ''}`}
                  aria-labelledby="trainingDropdown"
                >
                  <li>
                    <Link to="/training/teacher-training" className="dropdown-item" onClick={closeMenu}>
                      <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
                      For Teachers & Individuals
                    </Link>
                  </li>
                  <li>
                    <Link to="/training/school-training" className="dropdown-item" onClick={closeMenu}>
                      <FontAwesomeIcon icon={faSchool} className="me-2" />
                      For Schools & Institutions
                    </Link>
                  </li>
                </ul>
              </li>

             
              <li className="nav-item">
                <Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>

            <div className="d-none d-lg-flex ms-lg-3">
              <Link to="/contact" className="btn btn-primary btn-join-now btn-sm px-2 py-1">Join Now</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;