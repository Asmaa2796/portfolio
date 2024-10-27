import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = ({ scrollToSection, refs }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((prev) => !prev); // Toggle the state
  };

  const closeMobileNav = () => {
    setMobileNav(false); // Close the mobile nav
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <span className="navbar-brand">
            <img src={"/logo.png"} alt="Logo" />
          </span>
          <button
            className="btn text-white onMob"
            onClick={toggleMobileNav}
            style={{ borderColor: "#fdfdfd4d" }}
          >
            <i className="fa fa-gear"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto p-0">
              <li className="nav-item" onClick={() => { scrollToSection(refs.heroRef); closeMobileNav(); }}>
                <span className="nav-link">Home</span>
              </li>
              <li className="nav-item" onClick={() => { scrollToSection(refs.aboutRef); closeMobileNav(); }}>
                <span className="nav-link">About</span>
              </li>
              <li className="nav-item" onClick={() => { scrollToSection(refs.servicesRef); closeMobileNav(); }}>
                <span className="nav-link">Services</span>
              </li>
              <li className="nav-item" onClick={() => { scrollToSection(refs.skillsRef); closeMobileNav(); }}>
                <span className="nav-link">Skills</span>
              </li>
              <li className="nav-item" onClick={() => { scrollToSection(refs.workRef); closeMobileNav(); }}>
                <span className="nav-link">Work</span>
              </li>
              <li className="nav-item" onClick={() => { scrollToSection(refs.contactsRef); closeMobileNav(); }}>
                <span className="nav-link">Contacts</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile Nav */}
      {mobileNav && <MobileNav scrollToSection={scrollToSection} refs={refs} closeNav={closeMobileNav} />}
    </>
  );
};

export default Navbar;
