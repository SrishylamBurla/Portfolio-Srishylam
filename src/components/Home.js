import React from "react";
// import Typical from "react-typical";

function Home() {
  return (
    <div id="home-section">
      <div className="home-first col-md-8">
        <h2>
          MERN Full Stack Developer
          {/* <Typical
            steps={[
              "MERN Stack Developer",
              1000,
              "React Developer",
              1000,
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          /> */}
        </h2>
        <h1>
          Hi, I'm <span>Srishylam</span> <br />
          Burla From Hyderabad
        </h1>
        <p className="description">
          A dedicated developer with an interest in latest technologies and
          tools. I enjoy solving complex problems. I can be relied upon to help
          company achieve its goals by providing sustainable and scalable
          solutions.
        </p>
        <div className="social-media">
          <a href="https://github.com/SrishylamBurla">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>

          <a href="https://www.instagram.com">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>

          <a href="https://drive.google.com/file/d/1vpN__SAhtUw_iHCXLylTtwipojfQSvou/view">
            <button className="resume-btn">Resume</button>
          </a>
        </div>
      </div>
      <div className="home-second col-md-4">
        <img
          className="home-image"
          src="https://c4.wallpaperflare.com/wallpaper/601/605/316/water-colorful-liquid-minimalism-wallpaper-preview.jpg"
          alt="home-image"
        />
      </div>
    </div>
  );
}

export default Home;
