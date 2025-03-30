import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"
import Cuby from "../components/Cuby"


const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const sizes = {
    deskScale: isSmall ? 0.27 : isMobile ? 0.33 : isTablet ? 0.375 : 0.45,
    deskPosition: [0, 0, 0],
  };

  return (
    <section className="min-h-screen w-full flex flex-col relative px-4 md:px-8">
      <div className="w-full h-full flex lg:flex-row flex-col items-center">
        {/* Left side - Text content */}
        <div
          className={`${ isDesktop ? "lg:w-1/2" : "w-full"
          } flex flex-col justify-center lg:pl-16 px-5 pt-20 md:pt-28 lg:pt-0 z-10`}
        >
          <h1 className="text-xs font-thin mb-1 text-gray-600">
            <span>Akhil Shetty M</span>
          </h1>

          <div className="changing-title-container mb-6">
            <p className="changing-title text-lg md:text-3xl font-medium">
              Tech Enthusiast | FullStack Developer | UI/UX Designer | Graphic Designer
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-white-600 text-base md:text-xl md:max-w-2xl leading-relaxed text-justify">
              Crafting seamless digital experiences—from
              <span className="font-semibold text-white"> real-time systems</span> to
              <span className="font-semibold text-white"> immersive web apps</span>.
              Passionate about <span className="font-semibold text-white">leadership, innovation</span>, and building impactful digital solutions.
            </p>

            <p className="text-white-500 text-medium ">
              🚀 Always building, always learning.
              <a href="#projects" className="text-white text-medium hover:text-white-800 ml-2 inline-flex items-center group">
                Check out what I'm working on
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </p>
          </div>

          <div className="mt-4">
            <a href="#contact">
              <Button name="Let's work together" isBeam containerClass="w-fit" />
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
                  <HackerRoom position={[-0.3, 0.3, 0]} scale={sizes.deskScale} rotation={[0, Math.PI / 2, 0]} />
                </HeroCamera>

                <group>
                  <Cuby position={[-1.2, 0.2, 0]} scale={[0.2, 0.2, 0.2]} rotation={[0, 6, 0]} />
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
  );
};

export default Hero;