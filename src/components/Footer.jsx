/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";  
import {BiLogoGmail}  from 'react-icons/bi'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {IoIosCreate}  from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">mohit.</span>
        <div className="links">
          <a href="mailto:mohitsolanki2088@gmail.com">
            <BiLogoGmail/>
          </a>
          <a href="https://www.linkedin.com/in/mohit-solanki-09a136233/">
            <FaLinkedin/>
          </a>
          <a href="https://github.com/Mohitsolanki-1">
            <FaGithub/>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          created a portfolio.
          <IoIosCreate/>
        </p>
      </div>
    </footer>
  );
}

export default Footer;