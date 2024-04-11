import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import "../styles/Navbar.css";

function Navbar() {
  const currentPage = useLocation().pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative w-1/3 bg-white">
      <div className="fixed top-0 right-0 mt-2 mr-2 z-10">
        <X className={`${menuOpen ? "" : "hidden"} lg:hidden`} onClick={toggleMenu} />
        <Menu className={`${menuOpen ? "hidden" : ""} lg:hidden`} onClick={toggleMenu} />
      </div>

      <ul className="hidden lg:flex list-none justify-between ">
        <li className="nav-item ">
          <Link to="/" className={currentPage === "/" ? "nav-link active text-red-500 hover:text-blue-600" : "nav-link hover:text-blue-600"} onClick={closeMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className={currentPage === "/About" ? "nav-link active text-red-500 hover:text-blue-600" : "nav-link hover:text-blue-600"} onClick={closeMenu}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Projects" className={currentPage === "/Projects" ? "nav-link active text-red-500 hover:text-blue-600" : "nav-link hover:text-blue-600"} onClick={closeMenu}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className={currentPage === "/Contact" ? "nav-link active text-red-500 hover:text-blue-600" : "nav-link hover:text-blue-600"} onClick={closeMenu}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/Resume" className={currentPage === "/Resume" ? "nav-link active text-red-500 hover:text-blue-600" : "nav-link hover:text-blue-600"} onClick={closeMenu}>Resume</Link>
        </li>
      </ul>

      <div className={menuOpen ? "fixed top-0 left-0 w-full h-full bg-white transition-all duration-300 ease-in-out transform translate-x-0" : "fixed top-0 left-0 w-64 h-full bg-white transition-all duration-300 ease-in-out transform -translate-x-full"}>
        <ul className="list-none flex flex-col items-center justify-center space-y-10 pt-20">
          <li className="nav-item pt-4 pb-0.5">
            <Link to="/" className={currentPage === "/" ? "nav-link active  text-red-500 hover:text-blue-600" : "nav-link hover:text-blue-600"} onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className={currentPage === "/About" ? "nav-link active  text-red-500 hover:text-blue-600" : "nav-link hover:text-blue-600"} onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Projects" className={currentPage === "/Projects" ? "nav-link active text-red-500 hover:text-blue-600" : "nav-link hover:text-blue-600"} onClick={closeMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className={currentPage === "/Contact" ? "nav-link active text-red-500 hover:text-blue-600" : "nav-link hover:text-blue-600"} onClick={closeMenu}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/Resume" className={currentPage === "/Resume" ? "nav-link active text-red-500 hover:text-blue-600" : "nav-link hover:text-blue-600"} onClick={closeMenu}>Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
