import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white text-black py-9 fixed bottom-0 w-full shadow-emerald-950 shadow-md ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"> 
        {/* Div for the paragraph text */}
        <div className="">
          <p className="">Dont be shy, hit me up! 👉</p>
        </div>
        {/* Div for the icon links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/sbanati"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
            title= 'Clickable Github icon'
          >
            <Github size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-banati-a4172029b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
            title= 'Clickable LinkedIn icon'
            
          >
            <Linkedin size={30} />
          </a>
          <a
            href="https://twitter.com/TherealSLVR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
            title= 'Clickable Twitter icon'
          >
            <Twitter size={30} />
          </a>
          <a
            href="mailto:smbanati@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
            title= 'Clickable Email icon'
          >
            <Mail size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
