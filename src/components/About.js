import React, { useState } from "react";



function About() {

const [activeTab, setActiveTab] = useState("education")

const opentab = (tabname) =>{
    setActiveTab(tabname)
}



  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4 about-col-1">
            <p>my image</p>
          </div>
          <div className="col-md-8 about-col-2">
            <h1>About Me</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
            <div className="tab-titles">
              <p className={`tab-links ${activeTab==="education" ? "active-link" : ""}`} onClick={()=>opentab("education")}>Education</p>
              <p className={`tab-links ${activeTab==="experience" ? "active-link" : ""}`} onClick={()=>opentab('experience')}>Experience</p>
            </div>

            <div className={`tab-contents ${activeTab==="education"? "active-tab":""}`} id="education">
              <p>
                <span>Bachelor of technology 2015-2019</span>
                <br />
                Electronics and Communication Engineering - 58%
                <br />
                St.Mary's Engineering College, Hyderabad
              </p>
              <p>
                <span>Intermediate - 2013-2015</span>
                <br />
                M.P.C - 89%
                <br />
                Vikas Junior College, Peddapally
              </p>
              <p>
                <span>Secondary School Certificate - 2013</span>
                <br />
                Geethanjali High School, Peddapally - 9.0 GPA
              </p>
            </div>
            <div className={`tab-contents ${activeTab==="experience"?"active-tab":""}`} id="experience">
              <p>
                <span>IT Recruiter</span>
                <br />
                SCreatives Software Pvt Ltd.
                <br />
                July-2021 to Dec-2022
                <br />
                Description: 
                <ul>
                    <li>Identifying Job Requirements.</li>
                    <li>Sourcing and Attracting Candidates.</li>
                    <li>Screening and Evaluating Candidates.</li>
                    <li>Facilitating Interviews and Hiring Decisions.</li>
                    <li>Coordinating Interviews and Decision Making.</li>
                    <li>Managing Job Offers and Onboarding.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}


export default About;
