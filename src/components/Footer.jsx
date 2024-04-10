import { Github, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-center items-center">
        <p className="mr-4">Dont be Shy, Hit me up! 👇:</p>
        <a href="https://github.com/sbanati" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mr-4">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/sahil-banati-a4172029b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mr-4">
          <Linkedin size={24} />
        </a>
        <a href="https://twitter.com/TherealSLVR" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <Twitter size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
