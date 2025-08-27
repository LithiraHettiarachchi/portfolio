import LinkedIn from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Researchgate from "../assets/researchgate.png";

export default function Footer() {
  return (
    <footer className="bg-black-200 text-center py-4 mt-auto">
      <div className="flex gap-4 justify-center mb-2">
        <a href="https://linkedin.com/in/lithirahettiarachchi" target="_blank" rel="noreferrer">
          <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://github.com/LithiraHettiarachchi" target="_blank" rel="noreferrer">
          <img src={Github} alt="GitHub" className="w-6 h-6" />
        </a>
        <a href="https://www.researchgate.net/profile/Lithira-Hettiarachchi?ev=hdr_xprf" target="_blank" rel="noreferrer">
          <img src={Researchgate} alt="ResearchGate" className="w-6 h-6" />
        </a>
      </div>
      <p className="text-sm">All Rights Reserved ©2025</p>
    </footer>
  );
}
