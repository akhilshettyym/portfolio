// import { Canvas, PerspectiveCamera, HackerRoom, Suspense, CanvasLoader, useMediaQuery, Button, HeroCamera, Cuby, Stars, Robo } from "../imports"

// const Hero = () => {
//   const isSmall = useMediaQuery({ query: "(max-width: 440px)" })
//   const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
//   const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })

//   const sizes = {
//     deskScale: isSmall ? 0.27 : isMobile ? 0.33 : isTablet ? 0.375 : 0.45,
//     deskPosition: [0, 0, 0],
//   }

//   return (
//     <section className="min-h-screen w-full flex flex-col relative px-4 md:px-8" id="home">
//       <div className="w-full h-full flex lg:flex-row flex-col items-center">
//         {/* Left Side - Text Content */}
//         <div
//           className={`${isDesktop ? "lg:w-1/2" : "w-full"
//             } flex flex-col justify-center lg:pl-0 px-6 pt-16 md:pt-24 lg:pt-0 z-10 bg-transparent`}
//         >
//           {/* Name Heading */}
//           <a
//             href="/assets/Resume/AkhilShettyM.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h1 className="text-[0.55rem] font-light text-gray-500 mb-4 hover:underline cursor-pointer">
//               AKHIL SHETTY M - RESUME
//             </h1>
//           </a>
//           {/* Changing Title */}
//           <div className="changing-title-container mb-6">
//             <p className="changing-title text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold text-white">
//               {/* Full-Stack Developer | UI/UX Designer | Tech Enthusiast | Graphic Designer */}
//               FULL-STACK DEVELOPER | UI/UX DESIGNER | TECH ENTHUSIAST | GRAPHIC DESIGNER
//               {/* Intern @ Global Industrial Private Limited || Full Stack Developer || UI/UX Designer || Graphic designer */}
//             </p>
//           </div>

//           {/* Description Section */}
//           <div className="space-y-8">

//             <p className="text-gray-300 text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed text-justify">
//               I specialize in building <span className="font-semibold text-white">scalable and high-performing web applications</span> using
//               <span className="font-semibold text-white"> React, Next.js, Three.js, Firebase,</span> and <span className="font-semibold text-white">Node.js</span>.
//               I focus on creating clean, intuitive interfaces with maintainable code that delivers seamless user experiences across platforms.
//             </p>

//             <p className="text-gray-300 text-sm sm:text-lg md:text-xl lg:text-xl leading-relaxed text-justify mt-4">
//               With a strong drive for <span className="font-semibold text-white">innovation</span> and <span className="font-semibold text-white">technical excellence</span>,
//               I’m passionate about developing <span className="font-semibold text-white">future-ready digital solutions</span> that combine design and functionality to create real impact.
//             </p>


//             <p className="text-gray-400 text-xs sm:text-sm md:text-medium lg:text-medium flex items-center">
//               🚀 <span className="ml-2">Continuously innovating, endlessly evolving.</span>
//               <a
//                 href="#projects"
//                 className="ml-3 text-white text-sm hover:text-gray-300 transition-all inline-flex items-center group">
//                 Check out what I'm working on
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </a>
//             </p>

//           </div>

//           {/* Centered & Lowered Button */}
//           <div className="mt-12 flex justify-center">
//             <a href="#contact">
//               <Button name="Let's work together" isBeam containerClass="w-fit transition-transform hover:scale-105" />
//             </a>
//           </div>
//         </div>

//         {/* Right side - 3D Model - Now visible on Tablets & Desktops */}
//         {(isTablet || isDesktop) && (
//           <div className="lg:w-1/2 w-full h-[50vh] md:h-[60vh] lg:h-screen relative">
//             <Canvas className="w-full h-full">
//               <Suspense fallback={<CanvasLoader />}>
//                 <PerspectiveCamera makeDefault position={[0, -0.6, 4]} />

//                 <HeroCamera syncWithMouse={true}>
//                   <HackerRoom position={[-0.2, 0.3, 0]} scale={[0.4, 0.4, 0.4]} rotation={[0, Math.PI / 2, 0]} />
//                 </HeroCamera>

//                 <group>
//                   <Cuby position={[-1, 0.2, 0]} scale={[0.2, 0.2, 0.2]} rotation={[0, 6, 0]} />
//                   <Stars position={[1, 1, 0]} scale={[0.0015, 0.0015, 0.0015]} rotation={[0, 0, 0]} />
//                   <Robo position={[0.02, -2.2, 0]} scale={[0.055, 0.055, 0.055]} rotation={[0, Math.PI, 0]} />
//                 </group>

//                 <ambientLight intensity={2.5} />
//                 <directionalLight position={[10, 10, 10]} intensity={2} />
//                 <directionalLight position={[-10, -10, -10]} intensity={1} />
//               </Suspense>
//             </Canvas>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default Hero;


import { useEffect, useState } from "react";
import {
  Canvas,
  PerspectiveCamera,
  HackerRoom,
  Suspense,
  CanvasLoader,
  useMediaQuery,
  Button,
  HeroCamera,
  Cuby,
  Stars,
  Robo,
} from "../imports";
import { words } from "../constants";

const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const scale = isSmall ? 0.27 : isMobile ? 0.33 : isTablet ? 0.375 : 0.45;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col relative px-4 md:px-8 bg-black"
    >
      <div className="flex flex-col lg:flex-row items-center w-full h-full">
        {/* Left Content */}
        <div
          className={`${isDesktop ? "lg:w-1/2" : "w-full"
            } flex flex-col justify-center px-6 pt-16 md:pt-24 lg:pt-0 z-10`}
        >
          <a
            href="/assets/Resume/AkhilShettyM.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 text-[0.55rem] font-light text-gray-500 hover:underline"
          >
            AKHIL SHETTY M - RESUME
          </a>

          {/* Changing Title */}
          <div className="changing-title-container mb-6">
            <p className="changing-title text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold text-white">
              {/* Full-Stack Developer | UI/UX Designer | Tech Enthusiast | Graphic Designer */}
              FULL-STACK DEVELOPER | UI/UX DESIGNER | TECH ENTHUSIAST | GRAPHIC DESIGNER
              {/* Intern @ Global Industrial Private Limited || Full Stack Developer || UI/UX Designer || Graphic designer */}
            </p>
          </div>

          {/* Animated Words Section */}
          <div className="flex flex-col gap-7 text-white">
            <div className="hero-text">
              <h1>Shaping</h1>

              <div className="relative h-12 overflow-hidden my-2">
                <div
                  className="absolute flex flex-col transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${currentIndex * 3}rem)` }}
                >
                  {words.map((word, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 md:gap-3 h-12"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                      /> 
                      <span className="text-xl sm:text-2xl md:text-3xl text-white">
                        {word.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base flex items-center">
              🚀 <span className="ml-2">Continuously innovating, endlessly evolving.</span>
              <a
                href="#projects"
                className="ml-3 text-white hover:text-gray-300 text-sm inline-flex items-center group"
              >
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

          <div className="mt-12">
            <a href="#contact">
              <Button
                name="Let's work together"
                isBeam
                containerClass="w-fit transition-transform hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Right 3D Canvas */}
        {(isTablet || isDesktop) && (
          <div className="lg:w-1/2 w-full h-[50vh] md:h-[60vh] lg:h-screen relative">
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, -0.6, 4]} />
                <HeroCamera syncWithMouse>
                  <HackerRoom position={[-0.2, 0.3, 0]} scale={[0.4, 0.4, 0.4]} rotation={[0, Math.PI / 2, 0]} />
                </HeroCamera>
                <group>
                  <Cuby position={[-1, 0.2, 0]} scale={[0.2, 0.2, 0.2]} rotation={[0, 6, 0]} />
                  <Stars position={[1, 1, 0]} scale={[0.0015, 0.0015, 0.0015]} />
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
  );
};

export default Hero;
