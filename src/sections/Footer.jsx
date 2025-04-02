// const Footer = () => {
//     return (
//       <footer className="c-space py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-5 text-gray-400">

//         {/* Terms & Privacy */}
//         <div className="flex gap-3 text-sm">
//           <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
//           <span>|</span>
//           <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4">
//           <a href="https://github.com/akhilshettyym" target="_blank" rel="noopener noreferrer">
//             <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform" />
//           </a>
//           <a href="https://www.linkedin.com/in/akhilshettym/" target="_blank" rel="noopener noreferrer">
//             <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
//           </a>
//           <a href="https://www.instagram.com/akhil_shetty_m/" target="_blank" rel="noopener noreferrer">
//             <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
//           </a>
//         </div>

//         {/* Copyright */}
//         <p className="text-sm text-center md:text-left">
//           © 2025 <span className="font-semibold">Akhil Shetty M</span>. All rights reserved.
//         </p>

//       </footer>
//     );
//   };

//   export default Footer;


const Footer = () => {
  return (
    <footer className="c-space py-10 border-t border-gray-700 flex flex-col items-center gap-5 text-gray-400 text-center">

      {/* Social Icons */}


      <div className="flex gap-6 text-sm">


        {/* GITHUB */}
        <a href="https://github.com/akhilshettyym"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition">
          <img src="/assets/github.svg" alt="Github" className="w-4 h-4 hover:scale-110 transition-transform" />
          GITHUB </a>

          {/* RESUME */}
        <a href="/assets/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition border-gray-400 rounded-lg p-2"
          download="Akhil_Shetty_M.pdf">
          <img src="/assets/resume.png" alt="Resume" className="w-4 h-4 hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">RESUME</span>
        </a>

        {/* LINKEDIN */}
        <a href="https://linkedin.com/in/akhilshettym"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition">
          <img src="/assets/linkedin.png" alt="LinkedIn" className="w-4 h-4 hover:scale-110 transition-transform" />
          LINKEDIN </a>

        {/* INSTAGRAM */}
        <a href="https://www.instagram.com/akhil_shetty_m"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition">
          <img src="/assets/instagram.svg" alt="Instagram" className="w-4 h-4 hover:scale-110 transition-transform" />
          INSTAGRAM </a>

        


      </div>

      {/* Acknowledgment */}
      <p className="text-s text-gray-500 max-w-2xl leading-relaxed">
        Crafting experiences, one line of code at a time.
      </p>
      <p className="text-xs text-gray-500 max-w-2xl leading-relaxed">
        Passionate about clean, efficient, and scalable development, I turn ideas into intuitive, high-impact solutions. Every line of code enhances user experience, boosts performance, and pushes technological boundaries.
      </p>

      {/* Copyright */}
      {/* Creator Note */}
      <p className="text-sm mt-2">
        © {new Date().getFullYear()} <span className="font-semibold">Akhil Shetty M</span>. All rights reserved.</p>

    </footer>
  );
};

export default Footer;

