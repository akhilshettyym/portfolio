import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(' adrian@jsmastery.pro');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I’m Akhil</p>
                            <p className="grid-subtext">
                                I'm a Computer Science undergraduate with a strong technical background. With 3 years of experience, I
                                specialize in frontend & backend development, bringing innovative ideas to life.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tech stack */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext"> I specialize in building robust and scalable applications usingReact, Next.js, Three.js, Tailwind CSS, Firebase, and Node.js. With a focus on seamless user experiences and interactive 3D visuals, I create efficient and dynamic solutions. </p>
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
                                labelsData={[
                                    { lat: 12.9141, lng: 74.856, text: "I'm here!", color: "white", size: 18 }
                                ]}
                                objectsData={[
                                    { lat: 12.9141, lng: 74.856, size: 10, color: "red" }
                                ]}
                                objectLabel={() => "Location: Mangalore, India"}
                                objectThreeObject={(d) => {
                                    const marker = new THREE.Mesh(
                                        new THREE.SphereGeometry(0.5, 10, 10),
                                        new THREE.MeshBasicMaterial({ color: d.color })
                                    )
                                    return marker
                                }} />
                        </div>


                        {/* Globe Text Content */}
                        <div>
                            <p className="grid-headtext">Locate me here</p>
                            <p className="grid-subtext">
                                I work remotely across time zones, ensuring seamless digital solutions through adaptability and strong communication. Always ready to connect, contribute, and deliver quality results.</p>
                            <span className="font-medium text-white">Mangalore, Karnataka, India</span>.


                            {/* Contact Button */}
                            <div className="mt-8 flex justify-center">
                                <Button name="Contact Me" isBeam containerClass="w-fit transition-transform hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>



                {/* Passion for Coding */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just my profession—it&apos;s my passion.
                                I enjoy exploring new technologies, enhancing my skills, and pushing creative boundaries.
                                Whether it's crafting seamless user experiences or building scalable solutions, I thrive on challenges that blend logic and innovation.
                                I believe in continuous learning and staying ahead in the ever-evolving tech landscape.
                            </p>


                        </div>
                    </div>
                </div>



                {/* Contact Me
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">adrian@jsmastery.pro</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Contact Me */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">

                        {/* Image */}
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top rounded-lg"
                        />

                        {/* Contact Info */}
                        <div className="space-y-4 text-center mt-4">

                            {/* Section Title */}
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
                                    className="flex items-center gap-3 text-gray-300 hover:text-gray-400 transition-all">
                                    <img src="assets/github.svg" alt="GitHub" className="w-5 h-5" />
                                    <span className="text-sm sm:text-base font-medium">akhilshettyym</span>
                                </a>

                                {/* Email Section */}
                                <div className="copy-container flex items-center justify-center gap-3 cursor-pointer" onClick={handleCopy}>
                                    <img src="assets/mail.png" alt="Email Icon" className="w-5 h-5" />
                                    <p className="text-sm sm:text-base font-medium text-white">akhilshettym2003@gmail.com</p>
                                    <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="Copy Icon" className="w-4 h-4" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;