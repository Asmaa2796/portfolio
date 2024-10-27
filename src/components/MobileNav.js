const MobileNav = ({ scrollToSection, refs }) => {
    return (
      <div className="mobile-nav" data-aos="fade-up">
        <ul className="list-unstyled p-0 mb-0">
          <li onClick={() => scrollToSection(refs.heroRef)}>
            <i className="fa fa-home"></i>
            <span>Home</span>
          </li>
          <li onClick={() => scrollToSection(refs.aboutRef)}>
            <i className="fa fa-info"></i>
            <span>About</span>
          </li>
          <li onClick={() => scrollToSection(refs.servicesRef)}>
            <i className="fa fa-gears"></i>
            <span>Services</span>
          </li>
          <li onClick={() => scrollToSection(refs.skillsRef)}>
            <i className="fa fa-code"></i>
            <span>Skills</span>
          </li>
          <li onClick={() => scrollToSection(refs.workRef)}>
            <i className="fa fa-link"></i>
            <span>Work</span>
          </li>
          <li onClick={() => scrollToSection(refs.contactsRef)}>
            <i className="fa fa-phone"></i>
            <span>Contact</span>
          </li>
        </ul>
      </div>
    );
  };
  
  export default MobileNav;
  