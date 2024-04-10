import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import "../styles/Navbar.css";

function Navbar() {
  const currentPage = useLocation().pathname;
  // This state will track the hamburger menu opening and closing 
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>{
    // menu state toggle
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative w-1/3">
      {/* Hamburger menu icon will render if menu is closed, otherwise render X */}
      <div className="lg:hidden">
        {menuOpen ? (
          <X className="" onClick={toggleMenu} />
        ) : (
          <Menu className="" onClick={toggleMenu} />
        )}
      </div>

      {/* Nav links for desktop screens */}
      <ul className="hidden lg:flex list-none justify-between">
        <li className="nav-item ">
          <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className={currentPage === "/About" ? "nav-link active" : "nav-link"}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Projects" className={currentPage === "/Projects" ? "nav-link active" : "nav-link"}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/Resume" className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}>Resume</Link>
        </li>
      </ul>

      {/* Nav links for mobile screens */}
      <ul className={menuOpen ? "lg:hidden list-none absolute top-full left-0 w-full bg-white" : "hidden"}>
        <li className="nav-item pt-4 pb-0.5">
          <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className={currentPage === "/About" ? "nav-link active" : "nav-link"}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Projects" className={currentPage === "/Projects" ? "nav-link active" : "nav-link"}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/Resume" className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}>Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
