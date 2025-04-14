export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Experience",
    href: "#experience",
  },

  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
]

export const MyProfessionalJourney = [

  {
    id: 1,
    name: "Impact Highlights",
    positionLine1: "Trailblazing Through Initiative",
    positionLine2: "(👁️  click to view)",
    img: "assets/My-Professional-Journey/Impact-Highlights.png",
    review:
      "A curated collection of key accomplishments, including contributions to impactful projects, recognition in technical competitions, and leadership roles that reflect initiative, collaboration, and effective execution.",
    link: "https://github.com/akhilshettyym/My-Professional-Journey/tree/main/01_ImpactHighlights",
  },
  {
    id: 2,
    name: "Technical Certifications",
    positionLine1: "Certified Academic Progress",
    positionLine2: "(👁️  click to view)",
    img: "assets/My-Professional-Journey/Technical-Certifications.png",
    review:
      "Certifications earned through academic and professional development, reflecting a commitment to continuous learning and staying updated with industry trends.",
    link: "https://github.com/akhilshettyym/My-Professional-Journey/tree/main/02_TechnicalCertifications",
  },
  {
    id: 3,
    name: "Co-Curricular Recognition",
    positionLine1: `Co-Curricular Engagement Highlights`,
    positionLine2: "(👁️  click to view)",
    img: "assets/My-Professional-Journey/Co-Curricular-Recognition.png",
    review:
      "Certificates and recognitions awarded for active participation in co-curricular initiatives, showcasing leadership, teamwork, and a well-rounded skillset beyond academics.",
    link: "https://github.com/akhilshettyym/My-Professional-Journey/tree/main/03_Co-CurricularRecognition",
  },
  {
    id: 4,
    name: "Academic Records",
    positionLine1: "Authenticated Academic History",
    positionLine2: "(👁️  click to view)",
    img: "assets/My-Professional-Journey/Academic-Records.png",
    review:
      "Authenticated academic transcripts and mark cards from SSLC, Pre-University, and Undergraduate programs—highlighting academic consistency, performance, and growth across formal education.",
    link: "https://github.com/akhilshettyym/My-Professional-Journey/tree/main/04_AcademicRecords",
  },
  
]

export const myProjects = [

  // NodeSurge Start
  {
    title: "NodeSurge : A Multi-Utility Platform",
    desc: "Maximize productivity with NodeSurge — your all-in-one platform for advanced text tools, real-time currency conversion, smart to-do lists, live weather updates, secure password generation, and an intelligent chatbot. Seamlessly organize your tasks and enhance precision in every aspect of your day!",
    subdesc:
      "Built as a powerful productivity platform with modern web technologies, NodeSurge is designed for efficiency and seamless user experience.",
    spotlight: "/path/to/nodesurge-spotlight.jpg",
    href: "https://akhilshettyym.github.io/NodeSurge/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/projects/project-logo/project-logo1.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/projects/project-stack/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/projects/project-stack/tailwind.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/projects/project-stack/javascript.svg",
      },
      {
        id: 4,
        name: "FireBase",
        path: "/assets/projects/project-stack/firebase.svg",
      },
    ],
  },

  // NodeSurge end


  // Promptlytic Start
  {
    title: "Promptlytic : An open-source AI prompting platform",
    desc: "Promptlytic is an open-source platform to discover, create, and share AI prompts with ease. Whether you're crafting content, coding, or exploring creativity, Promptlytic connects you to a growing community of AI enthusiasts — helping you find inspiration, build ideas, and share your own.",
    subdesc:
      "Fuel your imagination with curated prompts, real-time sharing, and a vibrant AI-driven community — all in one place.",
    spotlight: "/path/to/nodesurge-spotlight.jpg",
    href: "https://promptlytic.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/projects/project-logo/project-logo2.svg",
    logoStyle: {
      backgroundColor: "#f5faff",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C302D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/projects/project-stack/next.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/projects/project-stack/tailwind.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/projects/project-stack/javascript.svg",
      },
      {
        id: 4,
        name: "FireBase",
        path: "/assets/projects/project-stack/MongoDB.svg",
      },
      {
        id: 4,
        name: "FireBase",
        path: "/assets/projects/project-stack/vercel.svg",
      },
    ],
  },

  // Promptlytic end


]

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.27 : isMobile ? 0.33 : isTablet ? 0.375 : 0.45,
    deskPosition: isMobile ? [0, -0.5, 0] : [0, -0.5, 0],
    // Keep other values for backward compatibility
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  }
}

export const workExperiences = [
  {
    id: 1,
    name: "Global Industrial Pvt. Ltd.",
    pos: "Full Stack Developer (Intern)",
    duration: "2025 - Present",
    title:
      "Excited to join GIC Global Industrial Pvt. Ltd. as an IT Intern (Full Stack Developer)! Looking forward to contributing to impactful projects, collaborating with talented colleagues, and growing in a dynamic environment.",
    icon: "/assets/experience/gic.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "IUCEE Annual Student Expo 2025",
    pos: "Web Developer",
    duration: "7th - 8th Jan 2025",
    title:
      "Presented Cloud-Based Smart Monitor- ing System for Baby Health and Safety at VNRVJIET, Hyderabad. Represented SJEC at the event. Participated in the International Conference on Transformations in Engineering Education (ICTIEE 2025).",
    icon: "/assets/experience/iuceee.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "TEDX SJEC",
    pos: "Stage and Venue Committee Head",
    duration: "Dec 14th - 2024",
    title:
      "As the Stage and Venue Committee Head at TEDxSJEC, I led a team of 23 to design and set up a captivating stage from scratch. I conceptualized and executed an extraordinary design, highlighting my artistic skills, creativity, and attention to detail for an immersive event experience.",
    icon: "/assets/experience/tedxsjec.svg",
    animation: "salute",
  },
  {
    id: 4,
    name: "Karanji Infotech Pvt. Ltd.",
    pos: "Junior Graphic Designer Intern",
    duration: "6th Nov - 5th Dec 2023",
    title:
      "Completed my graphic design internship at Karanji Infotech, creating marketing visuals, social media content, and brochures. Collaborated with the team to meet client expectations and enhance visual storytelling",
    icon: "/assets/experience/karanji.svg",
    animation: "idle",
  },
]

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/FeatureCards/seo.png",
    title: "Adaptability",
    desc: "Quick to adjust to changing environments and new challenges with ease and confidence.",
  },
  {
    imgPath: "/images/FeatureCards/chat.png",
    title: "Effective Communication",
    desc: "Clear and respectful communicator, enabling smooth collaboration.",
  },
  {
    imgPath: "/images/FeatureCards/time.png",
    title: "Punctual & Organized",
    desc: "Consistently meets deadlines and manages time efficiently to ensure timely results.",
  },
  {
    imgPath: "/images/FeatureCards/chat.png",
    title: "Team Building",
    desc: "Encourages collaboration and fosters positive group dynamics for a stronger team culture.",
  },
];


export { logoIconsList, abilities };