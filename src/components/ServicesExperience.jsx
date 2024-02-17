import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",

      title: "UI Design",
      // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Branding",
      // desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience"> 
            
            <p id="skills">My Skills</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>HTML</h4>
            
              
            </div>
            <div className="portfolio">
              <h4>CSS</h4>
              
            </div>
            <div className="portfolio">
              <h4>Javascript</h4>
              
            </div>
            <div className="portfolio">
              <h4>React</h4>
              
            </div>
            <div className="portfolio">
              <h4>Bootstrap</h4>
              
            </div>
            <div className="portfolio">
              <h4>C/C++</h4>

               </div>
            <div className="portfolio">
              <h4>Oops</h4>
              
              </div>
            <div className="portfolio">
              <h4>DBMS</h4>
            
              </div>
              <div className="portfolio">
                <h4>Material UI</h4>

                </div>
              <div className="portfolio">
                <h4>Git & Github</h4>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;