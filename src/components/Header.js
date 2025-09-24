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
 
  faSquareRootAlt, 
  faTimes,
  faChalkboardTeacher,
  faStore,
  faUsers,
 
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null); // ✅ state for logo

  // Track which dropdown is open (for mobile/touch)
  const [openDropdown, setOpenDropdown] = useState(null);

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

  // Update toggleMenu to close dropdowns on mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null); // Close any open dropdown when toggling menu
  };

  // Close all dropdowns
  const closeMenu = () => {
    setIsOpen(false);
    setHoveredDropdown(null);
    setOpenDropdown(null);
  };

  // Handle dropdown click for mobile
  const handleDropdownClick = (dropdownName) => {
    if (window.innerWidth <= 991) {
      setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    }
  };

  const eventYears = [
    { year: 2022, events: ["State Level Competition", "National Level Competition"] },
    { year: 2023, events: ["State Level Competition", "National Level Competition", "Annual Meet"] },
    { year: 2024, events: ["State Level Competition", "National Level Competition", "Annual Meet"] },
    { year: 2025, events: ["State Level Competition", "National Level Competition", "Annual Meet"] }
  ];

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

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.25)",
            zIndex: 1040
          }}
          onClick={closeMenu}
        />
      )}

      {/* Main Navigation */}
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled shadow-sm' : 'navbar-light bg-white'} py-2 py-lg-1`}
        style={isOpen ? { position: "fixed", top: 0, left: 0, width: "100vw", zIndex: 1050 } : {}}
      >
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
            className={`navbar-toggler${isOpen ? ' d-none' : ''}`}
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
                onClick={() => handleDropdownClick('programs')}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="programsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={hoveredDropdown === 'programs' || openDropdown === 'programs'}
                >
                  Courses <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                </a>
                <div 
                  className={`dropdown-menu mega-dropdown p-4 ${(hoveredDropdown === 'programs' || openDropdown === 'programs') ? 'show' : ''}`}
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
                          
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="program-category">
                        <h5 className="category-title">Teacher Programs</h5>
                        <div className="program-list">
                         
                          {/* Add Franchise Teacher Training as a separate item */}
                          <Link to="/programs/franchise-teacher-training" className="dropdown-item program-item" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2 text-orange" />
                            <div>
                              <div className="program-title">Franchise Teacher Training</div>
                              <div className="program-desc">Specialized Teacher Franchise Program</div>
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
  onClick={() => handleDropdownClick('franchise')}
>
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="franchiseDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded={hoveredDropdown === 'franchise' || openDropdown === 'franchise'}
  >
    Franchise <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
  </a>
  <ul 
    className={`dropdown-menu ${(hoveredDropdown === 'franchise' || openDropdown === 'franchise') ? 'show' : ''}`}
    aria-labelledby="franchiseDropdown"
  >
    <li>
      <Link to="/franchise/teacher-parent" className="dropdown-item" onClick={closeMenu}>
        <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2 text-orange" />
        <span className="fw-bold">Teacher/Parent Franchise</span>
      </Link>
    </li>
    <li>
      <Link to="/franchise/business-school" className="dropdown-item" onClick={closeMenu}>
        <FontAwesomeIcon icon={faStore} className="me-2 text-blue" />
        <span className="fw-bold">School/Business Franchise</span>
      </Link>
    </li>
    <li>
      <Link to="/programs/franchise-training" className="dropdown-item" onClick={closeMenu}>
        <FontAwesomeIcon icon={faStore} className="me-2 text-red" />
        <span className="fw-bold">Franchise Training</span>
      </Link>
    </li>
  </ul>
</li>


              {/* Events Dropdown */}
<li
  className="nav-item dropdown"
  onMouseEnter={() => setHoveredDropdown('events')}
  onMouseLeave={() => setHoveredDropdown(null)}
  onClick={() => handleDropdownClick('events')}
>
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="eventsDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded={hoveredDropdown === 'events' || openDropdown === 'events'}
  >
    Events <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
  </a>
  <ul
    className={`dropdown-menu ${(hoveredDropdown === 'events' || openDropdown === 'events') ? 'show' : ''}`}
    aria-labelledby="eventsDropdown"
  >
    {eventYears.map((yearData, index, arr) => (
      <React.Fragment key={yearData.year}>
        <li>
          <span
            className="dropdown-header fw-bold text-orange"
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {yearData.year}
          </span>
        </li>
        {yearData.events.map((eventName) => (
          <li key={eventName}>
            <Link
              to={`/gallery/${yearData.year}/${eventName.toLowerCase().replace(/\s+/g, "-")}`}
              className="dropdown-item"
              onClick={closeMenu}
            >
              {eventName}
            </Link>
          </li>
        ))}
        {index < arr.length - 1 && <li><hr className="dropdown-divider" /></li>}
      </React.Fragment>
    ))}
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