import React from 'react';

const Education = () => {
  return (
    <section className="c-space my-20" id="education">
      <p className="head-text pb-5">Education</p>
      
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Bachelor's Degree */}
        <div className="grid-container">
          <div>
            <p className="grid-headtext">Bachelor of Engineering</p>
            <p className="grid-subtext">St. Joseph Engineering College, Mangaluru</p>
            <p className="grid-subtext">Computer Science and Engineering</p>
            <p className="grid-subtext">CGPA: 8.66/10</p>
            <p className="grid-subtext">2021 - 2025</p>
          </div>
        </div>

        {/* Higher Secondary */}
        <div className="grid-container">
          <div>
            <p className="grid-headtext">Higher Secondary</p>
            <p className="grid-subtext">Boscoss PU College, Mangaluru</p>
            <p className="grid-subtext">PCMB</p>
            <p className="grid-subtext">Percentage: 95.17%</p>
            <p className="grid-subtext">2019 - 2021</p>
          </div>
        </div>

        {/* High School */}
        <div className="grid-container">
          <div>
            <p className="grid-headtext">High School</p>
            <p className="grid-subtext">Canara High School, Urwa, Mangaluru</p>
            <p className="grid-subtext">Percentage: 87.84%</p>
            <p className="grid-subtext">2009 - 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
