const Footer = () => {
  return (
    <footer className="c-space py-10 border-t border-gray-700 flex flex-col items-center gap-6 text-gray-400 text-center">

      {/* Social Icons - Now wrapped on small screens */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
        {/* GITHUB */}
        <a
          href="https://github.com/akhilshettyym"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition">
          <img src="/assets/github.svg" alt="GITHUB" className="w-4 h-4 hover:scale-110 transition-transform" />
          GITHUB
        </a>

        {/* RESUME */}
        <a
          href="/assets/Resume/AkhilShettyM.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Akhil_Shetty_M.pdf"
          className="flex items-center gap-2 hover:text-white transition border-gray-400 rounded-lg px-3 py-1">
          <img src="/assets/resume.png" alt="RESUME" className="w-4 h-4 hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">RESUME</span>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/akhilshettym"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition">
          <img src="/assets/linkedin.png" alt="LINKEDIN" className="w-4 h-4 hover:scale-110 transition-transform" />
          LINKEDIN
        </a>

        {/* SALESFORCE */}
        <a
          href="https://www.salesforce.com/trailblazer/akhilshettym"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition">
          <img src="/assets/techstack/salesforce.svg" alt="SALESFORCE" className="w-4 h-4 hover:scale-110 transition-transform" />
          SALESFORCE
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/akhil_shetty_m"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition">
          <img src="/assets/instagram.svg" alt="INSTAGRAM" className="w-4 h-4 hover:scale-110 transition-transform" />
          INSTAGRAM
        </a>
      </div>

      {/* Acknowledgment */}
      <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
        Crafting experiences, one line of code at a time.
      </p>
      <p className="text-xs text-gray-500 max-w-xl leading-relaxed">
        Passionate about building clean, efficient, and scalable systems, I turn ideas into user-focused solutions that drive real impact. My development approach emphasizes performance, seamless user experience, and long-term reliability.
      </p>

      {/* Copyright */}
      <p className="text-sm mt-2">
        © {new Date().getFullYear()} <span className="font-semibold">Akhil Shetty M</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;