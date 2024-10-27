import { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Work from "./Work";
import Contacts from "./Contacts";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ heroRef, aboutRef, servicesRef, skillsRef, workRef, contactsRef }} 
      />
      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={workRef}><Work /></div>
      <div ref={contactsRef}><Contacts /></div>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Home;
