import { services } from "../data";
const Services = () => {
  return (
    <div className="services py-5">
      <div className="container">
        <h4 className="text-white title">Services</h4>
        <p className="line-height text-lighter mb-5 mt-2">
          As a front-end developer, I offer a range of services designed to
          bring your digital projects to life.
          <br /> I specialize in creating responsive, user-friendly websites and
          applications that engage users and drive results. <br /> My services
          include:
        </p>
        <div className="row">
          {services.length >= 1 ? (
            services.map((item) => (
              <div 
              data-aos="fade-up"
              data-aos-delay={
                item.id === 1 || item.id === 2 ? "200" : "400"
              }
              className="col-lg-6 col-md-6 col-12" key={item.id}>
                <div className="service_card my-2">
                  <div className="d-flex align-items-start">
                    <div className="icon">
                      <div className="icon-img">
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                    <div className="text mx-3">
                      <h5 className="text-white">{item.label}</h5>
                      <p className="line-height text-lighter text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
