import { about,langIcons } from "../data";
const About = () => {

  return (
    <div className="about py-5">
      <div className="container">
        <h4 className="text-white title">About Me</h4>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <p className="line-height text-lighter">
              As a dedicated front-end developer, I specialize in crafting
              intuitive and visually appealing user interfaces.
            </p>
            <ul data-aos="fade-up">
              {about.length >= 1 ? (
                about.map((item) => (
                  <li key={item.id}>
                    <b>{item.label}:</b> {item.text}
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="lang-icons">
            {langIcons.length >= 1 ? (
                langIcons.map((item) => (
                  <div 
                  data-aos={
                    item.id === 1 || item.id === 2 ? "fade-down" : "fade-up"
                  }
                  data-aos-delay={
                    item.id === 1 || item.id === 2 ? "200" : "400"
                  }
                  key={item.id}>
                    <img src={item.img} alt={item.alt}/>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
