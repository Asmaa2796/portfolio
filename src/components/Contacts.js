import { contacts } from "../data";
const Contacts = () => {
  return (
    <div className="contact py-5">
      <div className="container">
        <h4 className="mb-0 text-white title">Contact me</h4>
        <p className="line-height text-lighter text-md my-4">
          I’d love to hear from you! Whether you have a question feel free to
          reach out. <br /> Use the contact ways below.
        </p>
        <div className="row">
          {contacts ? (
            contacts.map((item) => (
              <div
                data-aos="fade-up"
                data-aos-delay={item.id === 1 || item.id === 2 ? "200" : "400"}
                className="col-lg-3 col-md-6 col-12"
                key={item.id}
              >
                <div className="contact_card my-2 text-center">
                  <div className="icon">
                    <i className={item.icon}></i>
                  </div>
                  <h5 className="text-lighter">{item.label}</h5>
                  {item.id === 1 || item.id === 2 ? (
                    <span className="d-block text-lighter text-sm">
                      {item.txt}
                    </span>
                  ) : (
                    <a target="_blank" rel="noopener noreferrer" href={item.to}>
                      <span className="d-block text-lighter text-sm">
                        {item.txt}
                      </span>
                    </a>
                  )}
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

export default Contacts;
