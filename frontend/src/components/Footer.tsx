import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className="bg-[#0d1117] text-[#8b949e] w-full py-8 border-t border-[#21262d] mt-5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="src/assets/logo.png" alt="GitChat Logo" className="w-8 h-8" />
          <span className="text-white font-semibold text-lg">GitChat</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/documentation');
          }}
      className="hover:text-purple-400"
    >
      Docs
    </a>
          <a href="#" className="hover:text-purple-400">Features</a>
          <a href="#" className="hover:text-purple-400">About</a>
        </div>

        {/* Contact Icons */}
        <div className="flex items-center space-x-5 text-lg">
          <a
            href="https://github.com/codesbyvikas/GitChat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/vikaskewat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:vikaskewat025@gmail.com"
            className="hover:text-purple-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-[#6e7681] mt-6">
        © 2025 GitChat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
