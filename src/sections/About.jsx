"use client"

import { useState } from "react"
import Globe from "react-globe.gl"
import Button from "../components/Button"
import * as THREE from "three"

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("akhilshettym2003@gmail.com")
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 2000)
  }

  return (
    <section className="c-space my-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-fill">
        {/* About Me */}
        <div className="col-span-1">
          <div className="grid-container">
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-black-300 flex items-center justify-center">
                <img src="/assets/grid1.png" alt="Akhil" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="grid-headtext text-center mb-4">Hi, I'm AKHIL</p>
              <p className="grid-subtext">
                I'm a Computer Science undergraduate with a strong technical background. With 3 years of experience, I
                specialize in frontend & backend development, bringing innovative ideas to life.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1">
          <div className="grid-container">
            <div className="flex justify-center items-center flex-wrap gap-4 mb-4">
              <div className="tech-icon-container">
                <img src="/assets/react.svg" alt="React" className="w-10 h-10" />
              </div>
              <div className="tech-icon-container">
                <img src="/assets/typescript.png" alt="TypeScript" className="w-10 h-10" />
              </div>
              <div className="tech-icon-container">
                <img src="/assets/tailwindcss.png" alt="Tailwind CSS" className="w-10 h-10" />
              </div>
              <div className="tech-icon-container">
                <img src="/assets/framer.png" alt="Framer Motion" className="w-10 h-10" />
              </div>
              <div className="tech-icon-container">
                <img src="/assets/next.svg" alt="Next.js" className="w-10 h-10" />
              </div>
            </div>
            <div>
              <p className="grid-headtext text-center mb-4">Tech Stack</p>
              <p className="grid-subtext">Specializing in JavaScript, with a focus on React and Next.js.</p>
            </div>
          </div>
        </div>

        {/* Passionate About Technology */}
        <div className="col-span-1">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain mb-4" />
            <div>
              <p className="grid-headtext">Passionate About Technology</p>
              <p className="grid-subtext">Solving problems and creating impactful digital solutions through code.</p>
            </div>
          </div>
        </div>

        {/* Globe Visualization */}
        <div className="lg:col-span-2 md:col-span-2 col-span-1">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                // Adding text label
                labelsData={[
                  {
                    lat: 12.9141, // Mangalore Latitude
                    lng: 74.856, // Mangalore Longitude
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
                // Adding a Red Dot Marker
                objectsData={[
                  {
                    lat: 12.9141,
                    lng: 74.856,
                    size: 10,
                    color: "red",
                  },
                ]}
                objectLabel={() => "Location: Mangalore, India"}
                objectThreeObject={(d) => {
                  const marker = new THREE.Mesh(
                    new THREE.SphereGeometry(0.5, 10, 10),
                    new THREE.MeshBasicMaterial({ color: d.color }),
                  )
                  return marker
                }}
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotely, collaborating across various time zones.</p>
              <p className="grid-subtext">Based in Mangalore, Karnataka, India.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-span-1">
          <div className="grid-container">
            <div className="flex justify-center items-center mb-4">
              <div className="flex flex-col items-center">
                <div className="flex space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-black-300 flex items-center justify-center">6</div>
                  <div className="w-12 h-12 rounded-full bg-black-300 flex items-center justify-center">7</div>
                  <div className="w-8 h-8 rounded-full bg-black-300 flex items-center justify-center">8</div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-black-300 flex items-center justify-center">9</div>
                  <div className="w-8 h-8 rounded-full bg-black-300 flex items-center justify-center">10</div>
                </div>
              </div>
            </div>
            <p className="grid-headtext text-center mb-2">Contact Me</p>
            <div className="copy-container" onClick={handleCopy}>
              <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" className="w-5 h-5" />
              <p className="lg:text-xl md:text-lg text-base font-medium text-gray_gradient">
                akhilshettym2003@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About