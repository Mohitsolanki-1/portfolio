/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";  
 import image1 from "../images/Portfolio.jpg" 
 import image2 from "../images/Todo.png"
 import image3 from "../images/unitconverter.jpg"
 import image4 from "../images/contactmanage.png"  
 
 import {FaGithub } from 'react-icons/fa'


function Projects() {
  const [projects] = useState([
    {
      title: "Portfolio",

      img: image1,
      gLink: "https://github.com/Mohitsolanki-1/portfolio"
      
    },
    {
      title: "Todo",
      img: image2,
      gLink: "https://github.com/Mohitsolanki-1/Todo"
      
    },  

    {
      title: "Unit_Converter",
      img: image3,
      gLink: "https://github.com/Mohitsolanki-1/javascript"
      
    },
    {
      title: "contact_manage",
      img: image4,
      gLink: "https://github.com/Mohitsolanki-1/contact_manage_app"
      
    },
    // {
    //   title: "Project 5",
    //   img: "/projects/5.png",
    //   gLink: "https://github.com/hafizjavaid",
    //   lLink: "https://me-hafiz.netlify.app/",
    // },
    // {
    //   title: "Project 6",
    //   img: "/projects/6.png",
    //   gLink: "https://github.com/hafizjavaid",
    //   lLink: "https://me-hafiz.netlify.app/",
    // },
  ]);
  return (    

    
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Mohitsolanki-1"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>  
              
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">   
                  <a href={project.gLink} target="_blank" rel="noreferrer">  
                  
                    <FaGithub className="github"/>
                  </a>
                  
                  
                  
                </div>
              </div>
              
         
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;