"use client"

import { useState } from "react"
import Globe from "react-globe.gl"
import * as THREE from "three" // Import THREE directly

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("akhilshettym2003@gmail.com")
    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  return (
    <section className="c-space my-20" id="about">
      <p className="head-text pb-5">About Me</p>

      {/* About Me Section */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Who I Am */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="./assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain transition-all duration-500 filter grayscale hover:grayscale-0"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Akhil</p>
              <p className="grid-subtext text-justify">
              I'm a Computer Science undergraduate with a solid technical foundation and 3 years of hands-on experience in both frontend and backend development. I specialize in building efficient, user-centric solutions and enjoy transforming innovative ideas into impactful digital experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex flex-col items-center">
            {/* Tech Logos git */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 p-4">
              <img src="./assets/techstack/react.svg" alt="React" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/figma.svg" alt="Figma" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/firebase.svg" alt="Firebase" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/javascript.svg" alt="JavaScript" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/salesforce.svg" alt="Salesforce" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/tailwind.svg" alt="Tailwind CSS" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/typescript.svg" alt="TypeScript" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/next.svg" alt="Next.js" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/solidity.svg" alt="Solidity" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/blender.svg" alt="Blender" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/node.svg" alt="Node.js" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/git.svg" alt="Git" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/python.svg" alt="Python" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/java.svg" alt="Java" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/html.svg" alt="HTML" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/css.svg" alt="CSS" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/threejs.svg" alt="Three.js" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/mysql.svg" alt="MySQL" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/animate.svg" alt="Adobe Animate" className="w-10 h-10 object-contain" />
              <img src="./assets/techstack/maximo.png" alt="IBM Maximo" className="w-10 h-10 object-contain" />
            </div>

            {/* Tech Stack Description */}
            <div className="mt-4">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext text-justify">
              I specialize in building robust and scalable applications using React, Next.js, Three.js, Tailwind CSS, Firebase, and Node.js—delivering seamless performance and cutting-edge user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Globe Visualization */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container space-y-6">
            <div className="rounded-3xl w-full sm:h-[340px] h-fit flex justify-center items-center">
              <Globe
                height={340}
                width={340}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 12.9141, lng: 74.856, text: "I'm here!", color: "white", size: 18 }]}
                objectsData={[{ lat: 12.9141, lng: 74.856, size: 10, color: "red" }]}
                objectLabel={() => "Location: Mangalore, India"}
                objectThreeObject={(d) => {
                  // Use imported THREE directly
                  const marker = new THREE.Mesh(
                    new THREE.SphereGeometry(0.5, 10, 10),
                    new THREE.MeshBasicMaterial({ color: d.color }),
                  )
                  return marker
                }}
              />
            </div>

            {/* Globe Text Content */}
            <div>
              <p className="grid-headtext ">Locate me here</p>
              <p className="grid-subtext text-justify">
              I thrive in remote, cross-time-zone environments where adaptability and clear communication are key. With a strong commitment to collaboration and problem-solving, I ensure the delivery of seamless, high-quality digital solutions. I'm always ready to connect with teams, contribute meaningfully, and drive projects forward with precision and purpose.              </p>
              <span className="font-medium text-white">Mangalore, Karnataka, India</span>.{/* Contact Button */}
              <div className="mt-8 flex justify-center"></div>
            </div>
          </div>
        </div>

        {/* Passion for Coding */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext text-justify">
                I love solving real-world problems and building innovative solutions through code—it's more than a
                skill, it's my passion. One of my most impactful projects, <strong>BabySphere</strong>, reflects this
                drive. It's a smart baby monitoring system that uses Firebase for real-time communication and health
                data tracking, providing parents peace of mind through intelligent automation. This project challenged
                me to combine hardware with software, logic with creativity, and ultimately strengthened my love for
                building systems that make life easier and safer.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Me */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top rounded-lg"
            />

            {/* Contact Info */}
            <div className="space-y-4 text-center mt-4">
              <p className="grid-subtext text-sm sm:text-base text-gray-300">Contact Me</p>

              {/* Social Links */}
              <div className="flex flex-col items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/akhilshettym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all"
                >
                  <img src="assets/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                  <span className="text-sm sm:text-base font-medium">akhilshettym</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/akhilshettyym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-gray-400 transition-all"
                >
                  <img src="assets/github.svg" alt="GitHub" className="w-5 h-5" />
                  <span className="text-sm sm:text-base font-medium">akhilshettyym</span>
                </a>

                {/* Email Section */}
                <div
                  className="copy-container flex items-center justify-center gap-3 cursor-pointer"
                  onClick={handleCopy}
                >
                  <img src="assets/mail.png" alt="Email Icon" className="w-5 h-5" />
                  <p className="text-sm sm:text-base font-medium text-white">akhilshettym2003@gmail.com</p>
                  <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="Copy Icon" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="xl:col-span-3">
          <p className="head-text pt-10 pb-5">Education</p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
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
        </div>
      </div>
    </section>
  )
}

export default About
