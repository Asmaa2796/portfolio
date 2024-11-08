const MobileNav = ({ scrollToSection, refs, closeNav }) => {
    return (
      <div className="mobile-nav">
        <ul className="list-unstyled p-0 mb-0">
          <li onClick={() => { scrollToSection(refs.heroRef); closeNav(); }}>
            <i className="fa fa-home"></i>
            <span>Home</span>
          </li>
          <li onClick={() => { scrollToSection(refs.aboutRef); closeNav(); }}>
            <i className="fa fa-info"></i>
            <span>About</span>
          </li>
          <li onClick={() => { scrollToSection(refs.servicesRef); closeNav(); }}>
            <i className="fa fa-gears"></i>
            <span>Services</span>
          </li>
          <li onClick={() => { scrollToSection(refs.skillsRef); closeNav(); }}>
            <i className="fa fa-code"></i>
            <span>Skills</span>
          </li>
          <li onClick={() => { scrollToSection(refs.workRef); closeNav(); }}>
            <i className="fa fa-link"></i>
            <span>Work</span>
          </li>
          <li onClick={() => { scrollToSection(refs.contactsRef); closeNav(); }}>
            <i className="fa fa-phone"></i>
            <span>Contact</span>
          </li>
        </ul>
      </div>
    );
  };
  
  export default MobileNav;
  