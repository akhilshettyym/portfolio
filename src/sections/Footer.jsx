const Footer = () => {
    return (
      <footer className="c-space py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-5 text-gray-400">
        
        {/* Terms & Privacy */}
        <div className="flex gap-3 text-sm">
          <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
          <span>|</span>
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
        </div>
  
        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/akhilshettyym" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/akhilshettym/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com/akhil_shetty_m/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
        </div>
  
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © 2025 <span className="font-semibold">Akhil Shetty M</span>. All rights reserved.
        </p>
  
      </footer>
    );
  };
  
  export default Footer;
  