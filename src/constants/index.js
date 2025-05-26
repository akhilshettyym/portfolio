// Navigation Links
export const navLinks = [
  { id: 1, name: "HOME", href: "#home" },
  { id: 2, name: "ABOUT", href: "#about" },
  { id: 3, name: "PROJECTS", href: "#projects" },
  { id: 4, name: "EXPERIENCE", href: "#experience" },
  { id: 5, name: "CONTACT", href: "#contact" },
];

// My Professional Journey
export const MyProfessionalJourney = [
  {
    id: 1,
    name: "Impact Highlights",
    positionLine1: "Trailblazing Through Initiative",
    positionLine2: "(👁️ click to view)",
    img: "/assets/My-Professional-Journey/Impact-Highlights.png",
    review: "A curated collection of key accomplishments, including impactful projects, competition recognition, and leadership roles showcasing initiative, collaboration, and execution.",
    link: "https://github.com/akhilshettyym/My-Professional-Journey/tree/main/01_ImpactHighlights",
  },
  {
    id: 2,
    name: "Technical Certifications",
    positionLine1: "Certified Academic Progress",
    positionLine2: "(👁️ click to view)",
    img: "/assets/My-Professional-Journey/Technical-Certifications.png",
    review: "Certifications earned through academic and professional development, reflecting a commitment to continuous learning and industry relevance.",
    link: "https://github.com/akhilshettyym/My-Professional-Journey/tree/main/02_TechnicalCertifications",
  },
  {
    id: 3,
    name: "Co-Curricular Recognition",
    positionLine1: "Co-Curricular Engagement Highlights",
    positionLine2: "(👁️ click to view)",
    img: "/assets/My-Professional-Journey/Co-Curricular-Recognition.png",
    review: "Awards and recognitions for co-curricular participation, showcasing leadership, teamwork, and a holistic skillset beyond academics.",
    link: "https://github.com/akhilshettyym/My-Professional-Journey/tree/main/03_Co-CurricularRecognition",
  },
  {
    id: 4,
    name: "Academic Records",
    positionLine1: "Authenticated Academic History",
    positionLine2: "(👁️ click to view)",
    img: "/assets/My-Professional-Journey/Academic-Records.png",
    review: "Verified academic transcripts from SSLC, PU, and undergraduate programs, highlighting consistency, growth, and achievements.",
    link: "https://github.com/akhilshettyym/My-Professional-Journey/tree/main/04_AcademicRecords",
  },
];

// My Projects
export const myProjects = [
  {
    // NodeSurge
    title: "NodeSurge: A Multi-Utility Platform",
    desc: "Maximize productivity with NodeSurge — your all-in-one platform for advanced text tools, real-time currency conversion, smart to-do lists, live weather updates, password generation, and an AI chatbot.",
    subdesc: "Built with modern web technologies for seamless user experience and enhanced productivity.",
    href: "https://akhilshettyym.github.io/NodeSurge/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/projects/project-logo/project-logo1.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/projects/project-stack/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/projects/project-stack/tailwind.svg" },
      { id: 3, name: "JavaScript", path: "/assets/projects/project-stack/javascript.svg" },
      { id: 4, name: "Firebase", path: "/assets/projects/project-stack/firebase.svg" },
    ],
  },
  // Promtlytic
  {
    title: "Promptlytic: An Open-Source AI Prompting Platform",
    desc: "Discover, create, and share AI prompts for content creation, coding, and creativity. Promptlytic fosters a vibrant community for AI enthusiasts to collaborate and inspire.",
    subdesc: "Fuel your imagination with curated prompts, real-time sharing, and community-driven innovation.",
    href: "https://promptlytic.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/projects/project-logo/project-logo2.svg",
    logoStyle: {
      backgroundColor: "#f5faff",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C302D",
    },
    spotlight: "/assets/spotlight/spotlight2.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/projects/project-stack/next.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/projects/project-stack/tailwind.svg" },
      { id: 3, name: "JavaScript", path: "/assets/projects/project-stack/javascript.svg" },
      { id: 4, name: "MongoDB", path: "/assets/projects/project-stack/MongoDB.svg" },
      { id: 5, name: "Vercel", path: "/assets/projects/project-stack/vercel.svg" },
    ],
  },
  // Currex
  {
    title: "Currex: Smart & Fast Currency Converter",
    desc: "Currex is a sleek and efficient currency converter web application designed to provide real-time exchange rates with a user-friendly interface. Built with React and optimized for performance, Currex allows users to quickly convert currencies with up-to-date rates from trusted sources.",
    subdesc: "Built with modern web technologies for seamless user experience and enhanced productivity.",
    href: "https://akhilshettyym.github.io/Currex/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/projects/project-logo/project-logo1.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight/spotlight3.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/projects/project-stack/react.svg" },
      { id: 3, name: "JavaScript", path: "/assets/projects/project-stack/javascript.svg" },
    ],
  },
  // PassKey
  // ToDoManager
  // Weathery
  // Weathery
  // ProReact
];

// Dynamic Sizes (based on device size)
export const calculateSizes = (isSmall, isMobile, isTablet) => ({
  deskScale: isSmall ? 0.27 : isMobile ? 0.33 : isTablet ? 0.375 : 0.45,
  deskPosition: [0, -0.5, 0],
  cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
  reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
  ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
  targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
});

// Work Experiences
export const workExperiences = [
  {
    id: 1,
    name: "Global Industrial Pvt. Ltd.",
    pos: "Full Stack Developer (Intern)",
    duration: "2025 - Present",
    title: "Excited to join GIC Global Industrial Pvt. Ltd. as an IT Intern! Ready to contribute to impactful projects and grow in a dynamic environment.",
    icon: "/assets/experience/gic.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "IUCEE Annual Student Expo 2025",
    pos: "Web Developer",
    duration: "7th - 8th Jan 2025",
    title: "Presented a Cloud-Based Smart Baby Monitoring System at VNRVJIET, Hyderabad, representing SJEC at ICTIEE 2025.",
    icon: "/assets/experience/iuceee.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "TEDx SJEC",
    pos: "Stage and Venue Committee Head",
    duration: "Dec 14th, 2024",
    title: "Led a team of 23 to design and build a captivating stage setup for TEDxSJEC, blending creativity, management, and execution.",
    icon: "/assets/experience/tedxsjec.svg",
    animation: "salute",
  },
  {
    id: 4,
    name: "Karanji Infotech Pvt. Ltd.",
    pos: "Junior Graphic Designer Intern",
    duration: "6th Nov - 5th Dec 2023",
    title: "Created marketing visuals, social media graphics, and brochures while collaborating with a creative team to meet client expectations.",
    icon: "/assets/experience/karanji.svg",
    animation: "idle",
  },
];

// Logo Icons
export const logoIconsList = [
  { imgPath: "/images/logos/akhilshettym.png" },
  { imgPath: "/images/logos/next.png" },
  { imgPath: "/images/logos/react.png" },
  { imgPath: "/images/logos/node.png" },
  { imgPath: "/images/logos/mongodb.png" },
  { imgPath: "/images/logos/three.png" },
  { imgPath: "/images/logos/tailwind.png" },
  { imgPath: "/images/logos/git.png" },
  { imgPath: "/images/logos/firebase.png" },
  { imgPath: "/images/logos/vercel.png" },
  { imgPath: "/images/logos/figma.png" },
  { imgPath: "/images/logos/blender.png" },
  { imgPath: "/images/logos/tedx.png" },
  { imgPath: "/images/logos/animate.png" },
];

// Abilities (Feature Cards)
export const abilities = [
  { imgPath: "/images/FeatureCards/1.png", title: "Adaptability", desc: "Quickly adjusts to changing environments and new challenges." },
  { imgPath: "/images/FeatureCards/2.png", title: "Effective Communication", desc: "Clear and respectful communicator enabling smooth collaboration." },
  { imgPath: "/images/FeatureCards/3.png", title: "Punctual & Organized", desc: "Manages time efficiently and consistently meets deadlines." },
  { imgPath: "/images/FeatureCards/4.png", title: "Team Building", desc: "Fosters positive group dynamics for strong team culture." },
];

// Animated Words
export const words = [
  { text: "FRAMEWORKS", imgPath: "/images/animate/1.png" },
  { text: "ALGORITHMS", imgPath: "/images/animate/2.png" },
  { text: "API INTEGRATIONS", imgPath: "/images/animate/3.png" },
  { text: "TOOLKITS", imgPath: "/images/animate/4.png" },
  { text: "VERSION CONTROL", imgPath: "/images/animate/5.png" },
  { text: "CI/CD", imgPath: "/images/animate/6.png" },
  { text: "ARCHITECTURES", imgPath: "/images/animate/7.png" },
  { text: "TEMPLATES", imgPath: "/images/animate/8.png" },
  { text: "DEPLOYMENT", imgPath: "/images/animate/9.png" },
  { text: "MICROSERVICES", imgPath: "/images/animate/10.png" },
];