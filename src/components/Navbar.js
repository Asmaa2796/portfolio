import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = ({ scrollToSection, refs }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const showMobileNav = () => {
    setMobileNav(true);
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
            onClick={showMobileNav}
            style={{ borderColor: "#fdfdfd4d" }}
          >
            <i className="fa fa-gear"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto p-0">
              <li className="nav-item" onClick={() => scrollToSection(refs.heroRef)}>
                <span className="nav-link">Home</span>
              </li>
              <li className="nav-item" onClick={() => scrollToSection(refs.aboutRef)}>
                <span className="nav-link">About</span>
              </li>
              <li className="nav-item" onClick={() => scrollToSection(refs.servicesRef)}>
                <span className="nav-link">Services</span>
              </li>
              <li className="nav-item" onClick={() => scrollToSection(refs.skillsRef)}>
                <span className="nav-link">Skills</span>
              </li>
              <li className="nav-item" onClick={() => scrollToSection(refs.workRef)}>
                <span className="nav-link">Work</span>
              </li>
              <li className="nav-item" onClick={() => scrollToSection(refs.contactsRef)}>
                <span className="nav-link">Contacts</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* mobile nav */}
      {mobileNav && <MobileNav scrollToSection={scrollToSection} refs={refs} />}
    </>
  );
};

export default Navbar;
