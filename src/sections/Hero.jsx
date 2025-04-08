import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"
import Cuby from "../components/Cuby"
import Stars from "../components/Stars"
import Robo from "../components/Robo"

const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440px)" })
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })

  const sizes = {
    deskScale: isSmall ? 0.27 : isMobile ? 0.33 : isTablet ? 0.375 : 0.45,
    deskPosition: [0, 0, 0],
  }

  return (
    <section className="min-h-screen w-full flex flex-col relative px-4 md:px-8" id="home">
      <div className="w-full h-full flex lg:flex-row flex-col items-center">
        {/* Left Side - Text Content */}
        <div
          className={`${isDesktop ? "lg:w-1/2" : "w-full"
            } flex flex-col justify-center lg:pl-0 px-6 pt-16 md:pt-24 lg:pt-0 z-10 bg-transparent`}
        >
          {/* Name Heading */}
          <h1 className="text-xs font-light text-gray-500 mb-4">Akhil</h1>

          {/* Changing Title */}
          <div className="changing-title-container mb-6">
            <p className="changing-title text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold text-white">
              Full-Stack Developer | UI/UX Designer | Tech Enthusiast | Graphic Designer
              {/* Intern @ Global Industrial Private Limited || Full Stack Developer || UI/UX Designer || Graphic designer */}
            </p>
          </div>

          {/* Description Section */}
          <div className="space-y-8">
            <p className="text-gray-300 text-medium sm:text-lg md:text-medium lg:text-medium leading-relaxed text-justify">
              I specialize in crafting <span className="font-medium text-white">scalable, high-performance</span>{" "}
              applications that prioritize
              <span className="font-medium text-white"> efficiency, usability,</span> and seamless user experiences.
              With expertise in{" "}
              <span className="font-medium text-white">React, Next.js, Three.js, Firebase, and Node.js</span>, I blend
              design and functionality to build intuitive digital solutions.
            </p>

            <p className="text-gray-300 text-sm sm:text-lg md:text-xl lg:text-xl leading-relaxed text-justify mt-4">
              Driven by <span className="font-medium text-white">problem-solving, innovation,</span> and a passion for
              continuous learning, I thrive on creating{" "}
              <span className="font-medium text-white">impactful, future-ready</span> applications that push the
              boundaries of technology.
            </p>

            
            <p className="text-gray-400 text-xs sm:text-sm md:text-medium lg:text-medium flex items-center">
              🚀 <span className="ml-2">Continuously innovating, endlessly evolving.</span>
              <a
                href="#projects"
                className="ml-3 text-white text-sm hover:text-gray-300 transition-all inline-flex items-center group">
                Check out what I'm working on
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </p>

          </div>

          {/* Centered & Lowered Button */}
          <div className="mt-12 flex justify-center">
            <a href="#contact">
              <Button name="Let's work together" isBeam containerClass="w-fit transition-transform hover:scale-105" />
            </a>
          </div>
        </div>

        {/* Right side - 3D Model - Now visible on Tablets & Desktops */}
        {(isTablet || isDesktop) && (
          <div className="lg:w-1/2 w-full h-[50vh] md:h-[60vh] lg:h-screen relative">
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, -0.6, 4]} />

                <HeroCamera syncWithMouse={true}>
                  <HackerRoom position={[-0.2, 0.3, 0]} scale={[0.4, 0.4, 0.4]} rotation={[0, Math.PI / 2, 0]} />
                </HeroCamera>

                <group>
                  <Cuby position={[-1, 0.2, 0]} scale={[0.2, 0.2, 0.2]} rotation={[0, 6, 0]} />
                  <Stars position={[1, 1, 0]} scale={[0.0015, 0.0015, 0.0015]} rotation={[0, 0, 0]} />
                  <Robo position={[0.02, -2.2, 0]} scale={[0.055, 0.055, 0.055]} rotation={[0, Math.PI, 0]} />
                </group>

                <ambientLight intensity={2.5} />
                <directionalLight position={[10, 10, 10]} intensity={2} />
                <directionalLight position={[-10, -10, -10]} intensity={1} />
              </Suspense>
            </Canvas>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero;