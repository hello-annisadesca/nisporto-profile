import React from "react";
import instagramIcon from "../assets/icon/instagram_icon.png";
import linkedinIcon from "../assets/icon/linkedin_icon.png";
import logoIcon from "../assets/images/icon.png"; 

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[1152px] mx-auto flex justify-between items-center py-8 px-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
            <img
              src={logoIcon}
              alt="nip✪rto logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-gray-800 text-lg font-bold tracking-wide font-grotesk">
            nip✪rto
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-10 text-gray-400 text-sm font-normal font-['Space_Grotesk'] leading-4">
          <a href="#about" className="hover:text-gray-600 transition">
            About
          </a>
          <a href="#skills" className="hover:text-gray-600 transition">
            Skills
          </a>
          <a href="#portfolio" className="hover:text-gray-600 transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-gray-600 transition">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <img
            src={instagramIcon}
            alt="Instagram"
            className="w-5 h-5 cursor-pointer hover:opacity-80 transition"
          />
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-5 h-5 cursor-pointer hover:opacity-80 transition"
          />
        </div>
      </div>

      <div className="w-full border-t border-gray-100">
        <p className="text-center py-3 text-gray-300 text-xs font-normal font-['DM_Sans']">
          © 2025 Annisa Desca. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
