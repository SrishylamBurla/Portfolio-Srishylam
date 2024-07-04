import React from "react";
import Typical from 'react-typical'

function Home() {
  return (
    <div id="home-section" className="col-md-7">
      <h2>
        <Typical steps={
          ["MERN Stack Developer", 1000,
          "React Developer", 1000,
          "Frontend Developer", 1000,
          "Backend Developer", 1000]
        } 
        loop={Infinity} wrapper="b"/>
        
        
        </h2>
      <h1 >Hi, I'm <span>Srishylam</span> <br />
      Burla From Hyderabad</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="social-media">
        <a href="https://github.com/SrishylamBurla">
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        
        <a href="https://www.instagram.com">
          <i className="fa-brands fa-instagram fa-xl"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
