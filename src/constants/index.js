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
    title: "NodeSurge: A Multi-Utility Platform",
    desc: "A powerful all-in-one platform featuring an AI chatbot, advanced text utilities, live weather, currency converter, password generator, and a smart to-do list—engineered for everyday productivity.",
    subdesc: "Built with cutting-edge web technologies to unify essential utilities into a seamless, user-friendly experience.",
    href: "https://akhilshettyym.github.io/NodeSurge/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/projects/project-logo/project-logo1.svg",
    logoStyle: {
      backgroundColor: "#A9A9A9",
      border: "0.2px solid #808080",
      boxShadow: "0px 0px 60px 0px #80808033",
    },
    spotlight: "/assets/spotlight/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/projects/project-stack/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/projects/project-stack/tailwind.svg" },
      { id: 3, name: "JavaScript", path: "/assets/projects/project-stack/javascript.svg" },
      { id: 4, name: "Firebase", path: "/assets/projects/project-stack/firebase.svg" },
    ],
  },
  {
    title: "Promptlytic: An Open-Source AI Prompting Platform",
    desc: "A collaborative platform to discover, craft, and share AI prompts for writing, coding, design, and content creation—empowering users through smart workflows and community-driven insight.",
    subdesc: "Designed to inspire creativity and innovation through prompt sharing, powered by modern frameworks and a vibrant community.",
    href: "https://promptlytic.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/projects/project-logo/project-logo2.svg",
    logoStyle: {
      backgroundColor: "#696969",
      border: "0.2px solid #505050",
      boxShadow: "0px 0px 60px 0px #50505033",
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
  {
    title: "Currex: Smart & Fast Currency Converter",
    desc: "An intuitive currency converter delivering real-time exchange rates and fast performance—ideal for travel, trading, budgeting, and seamless global financial transactions.",
    subdesc: "Lightweight, responsive, and highly accurate—designed to simplify international currency conversions on any device.",
    href: "https://akhilshettyym.github.io/Currex/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/projects/project-logo/project-logo3.png",
    logoStyle: {
      backgroundColor: "#6E6E38",
      border: "0.2px solid #515124",
      boxShadow: "0px 0px 60px 0px #51512433",
    },
    spotlight: "/assets/spotlight/spotlight3.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/projects/project-stack/react.svg" },
      { id: 3, name: "JavaScript", path: "/assets/projects/project-stack/javascript.svg" },
    ],
  },
  {
    title: "PassKey: Secure Password Generator",
    desc: "Generate strong, customizable passwords instantly with control over character types and length—built for both simplicity and top-tier security in a clean UI.",
    subdesc: "Created for users who value security and speed, leveraging modern UI frameworks for maximum usability.",
    href: "https://akhilshettyym.github.io/PassKey/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/projects/project-logo/project-logo4.png",
    logoStyle: {
      backgroundColor: "#D8BFD8",
      border: "0.2px solid #C71585",
      boxShadow: "0px 0px 60px 0px #C7158533",
    },
    spotlight: "/assets/spotlight/spotlight4.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/projects/project-stack/react.svg" },
      { id: 3, name: "JavaScript", path: "/assets/projects/project-stack/javascript.svg" },
    ],
  },
  {
    title: "ToDoManager: A Sleek and Responsive To-Do Manager",
    desc: "Organize tasks with a smooth, intuitive UI that supports real-time updates, priority tagging, and efficient task tracking—perfect for daily planning.",
    subdesc: "Focused on productivity with a modern design system and a minimal learning curve for users on the go.",
    href: "https://akhilshettyym.github.io/ToDoManager/",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/projects/project-logo/project-logo5.png",
    logoStyle: {
      backgroundColor: "#FFE5B4",
      border: "0.2px solid #FFB347",
      boxShadow: "0px 0px 60px 0px #FFA50033",
    },
    spotlight: "/assets/spotlight/spotlight5.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/projects/project-stack/react.svg" },
      { id: 3, name: "JavaScript", path: "/assets/projects/project-stack/javascript.svg" },
    ],
  },
  {
    title: "Weathery: Accurate & Real-Time Weather Forecast",
    desc: "Stay ahead of the forecast with real-time temperature, wind, and humidity updates in a sleek and responsive weather app built for precision.",
    subdesc: "Built to be lightweight and informative, delivering accurate climate insights with a clean user experience.",
    href: "https://akhilshettyym.github.io/Weathery/",
    texture: "/textures/project/project6.mp4",
    logo: "/assets/projects/project-logo/project-logo6.png",
    logoStyle: {
      backgroundColor: "#E6E6FA",
      border: "0.2px solid #D8BFD8",
      boxShadow: "0px 0px 60px 0px #80008033",
    },
    spotlight: "/assets/spotlight/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/projects/project-stack/react.svg" },
      { id: 3, name: "JavaScript", path: "/assets/projects/project-stack/javascript.svg" },
    ],
  },
  {
    title: "ProReact: Accurate Text Utility App",
    desc: "Enhance your writing workflow with a real-time text utility app offering smart case converters, counters, and formatting tools in a distraction-free UI.",
    subdesc: "Fast, focused, and accessible—built for users needing accurate and quick text processing features on the web.",
    href: "https://akhilshettyym.github.io/Proreact/",
    texture: "/textures/project/project7.mp4",
    logo: "/assets/projects/project-logo/project-logo7.png",
    logoStyle: {
      backgroundColor: "#F8F8F0",
      border: "0.2px solid #D3D3D3",
      boxShadow: "0px 0px 60px 0px #F8F8F033",
    },
    spotlight: "/assets/spotlight/spotlight2.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/projects/project-stack/react.svg" },
      { id: 3, name: "JavaScript", path: "/assets/projects/project-stack/javascript.svg" },
    ],
  },
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
    pos: "Information Technology (Trainee)",
    duration: "2025 - Present",
    icon: "/assets/experience/gic.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Global Industrial Pvt. Ltd.",
    pos: "Information Technology (Intern)",
    duration: "2025 (3rd Feb - 16th June)",
    title: "Excited to join GIC Global Industrial Pvt. Ltd. as an IT Intern! Ready to contribute to impactful projects and grow in a dynamic environment.",
    icon: "/assets/experience/gic.svg",
    animation: "victory",
  },
  {
    id: 3,
    name: "IUCEE Annual Student Expo 2025",
    pos: "Web Developer",
    duration: "7th - 8th Jan 2025",
    title: "Presented a Cloud-Based Smart Baby Monitoring System at VNRVJIET, Hyderabad, representing SJEC at ICTIEE 2025.",
    icon: "/assets/experience/iuceee.svg",
    animation: "clapping",
  },
  {
    id: 4,
    name: "TEDx SJEC",
    pos: "Stage and Venue Committee Head",
    duration: "Dec 14th, 2024",
    title: "Led a team of 23 to design and build a captivating stage setup for TEDxSJEC, blending creativity, management, and execution.",
    icon: "/assets/experience/tedxsjec.svg",
    animation: "salute",
  },
  {
    id: 5,
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
  { text: "SALESFORCE", imgPath: "/images/animate/6.png" },
  { text: "ARCHITECTURES", imgPath: "/images/animate/7.png" },
  { text: "TEMPLATES", imgPath: "/images/animate/8.png" },
  { text: "DEPLOYMENT", imgPath: "/images/animate/9.png" },
  // { text: "MICROSERVICES", imgPath: "/images/animate/10.png" },
];