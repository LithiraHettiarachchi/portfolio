import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "/public/Logo.svg";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll to top when clicking logo
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "conference", label: "Conference" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-4 md:px-6 lg:px-8 py-3 md:py-4 bg-gray-800 text-white fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] max-w-none lg:max-w-5xl rounded-xl md:rounded-2xl shadow-lg z-50 backdrop-blur-md bg-opacity-90 border-b-4 border-blue-500">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
        <img
          src={Logo}
          alt="Logo"
          className="w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex space-x-4 xl:space-x-6 items-center">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`transition-colors duration-300 ${activeSection === link.id
              ? "text-blue-400 font-semibold border-b-2 border-blue-600 text-lg xl:text-xl"
              : "hover:text-blue-400 text-base"
              }`}
          >
            {link.label}
          </a>
        ))}

        {/* Resume Download - Desktop */}
        <a
          href="/portfolio/LithiraHettiarachchi_Resume.pdf"
          download="LithiraHettiarachchi_Resume.pdf"
          className="bg-gradient-to-r from-blue-600 to-purple-600 !text-white font-bold px-4 py-2 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 md:w-7 md:h-7" />
        ) : (
          <Menu className="w-6 h-6 md:w-7 md:h-7" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 md:mx-4 bg-gray-800 rounded-xl shadow-2xl backdrop-blur-md bg-opacity-95 border-2 border-blue-500 overflow-hidden transition-all duration-300 ${isMobileMenuOpen
          ? "max-h-[28rem] opacity-100"
          : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavClick}
              className={`px-4 py-3 rounded-lg transition-all duration-300 text-center ${activeSection === link.id
                ? "bg-blue-600 text-white font-semibold"
                : "hover:bg-gray-700 text-gray-200"
                }`}
            >
              {link.label}
            </a>
          ))}

          {/* Resume Download - Mobile */}
          <a
            href="/portfolio/LithiraHettiarachchi_Resume.pdf"
            download="LithiraHettiarachchi_Resume.pdf"
            onClick={handleNavClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 !text-white font-bold px-4 py-3 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 text-center mt-2"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
