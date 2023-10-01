/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./person.png";
function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src={logo} alt="" />
          </div>
          <div className="banner-content">
            <h6 className="typewriter">Hello, I'm Mohit Solanki</h6>
            <h3>Web Developer</h3>
            <p>
            I am Mohit Solanki, a proficient Frontend Developer with expertise in React and UI design. With a passion for crafting exceptional user experiences, I bring a creative flair to web development. 
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;