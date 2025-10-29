import React from "react";
import instagramIcon from "../assets/icon/instagram_icon.png";
import linkedinIcon from "../assets/icon/linkedin_icon.png";
import mailIcon from "../assets/icon/mail_icon.png";
import profilePic from "../assets/images/icon.png";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-[1152px] mx-auto flex items-center justify-between h-20 px-6 md:px-8 lg:px-10">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-600 via-blue-300 to-sky-50 flex items-center justify-center shadow-sm">
            <img
              src={profilePic || 'https://placehold.co/40x40'}
              alt="Profile"
              className="w-9 h-9 rounded-full border-2 border-white shadow"
            />
          </div>
          <span className="text-gray-800 text-lg font-bold tracking-wide font-grotesk">
            nip✪rto
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-10 text-gray-600 text-base font-medium font-['Space_Grotesk']">
          <a
            href="#about"
            className="hover:text-[#1C92D2] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-[#1C92D2] transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="hover:text-[#1C92D2] transition-colors duration-200"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:text-[#1C92D2] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
          </a>
          <a
            href="mailto:thisisnisa@email.com"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img src={mailIcon} alt="Mail" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
