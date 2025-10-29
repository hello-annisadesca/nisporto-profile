import React from "react";
import figmaIcon from "../assets/icon/figma_icon.png";
import jsIcon from "../assets/icon/javascript_icon.png";
import reactIcon from "../assets/icon/react_icon.png";
import htmlcssIcon from "../assets/icon/htmlcss_icon.png";

export default function SkillsSection() {
  const skills = [
    {
      name: "Figma",
      desc: "UI Design, Prototyping",
      color: "bg-blue-100",
      icon: figmaIcon,
    },
    {
      name: "JavaScript",
      desc: "Front-End Development",
      color: "bg-yellow-100",
      icon: jsIcon,
    },
    {
      name: "React",
      desc: "Web Apps & SPA",
      color: "bg-purple-100",
      icon: reactIcon,
    },
    {
      name: "HTML & CSS",
      desc: "Responsive Design",
      color: "bg-pink-100",
      icon: htmlcssIcon,
    },
  ];

  return (
    <section id="skills" className="flex flex-col items-center py-24 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-gray-800 leading-8">
          Keahlian
        </h2>
        <p className="text-lg text-gray-500 font-normal font-['DM_Sans'] leading-5 mt-2 max-w-[580px]">
          Saya menguasai berbagai tools dan teknologi untuk membangun produk digital yang modern.
        </p>
      </div>

      {/* Skill cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1100px]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center border border-gray-100"
          >
            <div
              className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center mb-4`}
            >
              <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold font-['Poppins'] text-gray-800 mb-2">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-400 font-normal font-['DM_Sans']">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
