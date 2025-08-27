import { useEffect, useState } from "react";
import Logo from "/public/Logo.svg"; // Make sure the path matches your file structure

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

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
      { threshold: 0.6 } // 60% of section visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl rounded-2xl shadow-lg z-50 backdrop-blur-md bg-opacity-90 border-b-4 border-blue-500">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-14 h-14 hover:scale-125 transition-transform duration-300" />
      </div>

      {/* Nav Links */}
      <div className="flex space-x-6 items-center">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`transition-colors duration-300 ${
              activeSection === link.id
                ? "text-blue-400 font-semibold border-b-2 border-blue-600 text-xl"
                : "hover:text-blue-400"
            }`}
          >
            {link.label}
          </a>
        ))}

        {/* Resume Download */}
        <a
          href="/portfolio/LithiraHettiarachchi.pdf" 
          download="LithiraHettiarachchi.pdf"
          className="bg-gradient-to-r from-blue-600 to-purple-600 !text-white font-bold px-4 py-2 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
