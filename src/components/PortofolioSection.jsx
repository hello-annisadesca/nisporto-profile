import React from "react";
import gofinanceImg from "../assets/images/gofinance_app.png";
import edusmartImg from "../assets/images/edusmart_landing.png";
import datahubImg from "../assets/images/datahub_dashboard.png";

// import icon tambahan
import mobileIcon from "../assets/icon/mobile_icon.png";
import webIcon from "../assets/icon/web_icon.png";
import dashboardIcon from "../assets/icon/dashboard_icon.png";
import arrowIcon from "../assets/icon/arrow_icon.png";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "GoFinance App",
      desc: "Aplikasi manajemen keuangan dengan desain yang clean, modern, dan mudah digunakan.",
      tag: "Mobile App",
      tagColor: "text-blue-500",
      gradient: "from-blue-200 to-purple-200",
      image: gofinanceImg,
      icon: mobileIcon,
    },
    {
      id: 2,
      title: "EduSmart Landing Page",
      desc: "Landing page untuk platform pendidikan dengan fokus pada visual storytelling & UX.",
      tag: "Website",
      tagColor: "text-pink-600",
      gradient: "from-pink-200 to-yellow-100",
      image: edusmartImg,
      icon: webIcon,
    },
    {
      id: 3,
      title: "DataHub Dashboard",
      desc: "Dashboard analytics untuk SaaS dengan visual data yang interaktif & engaging.",
      tag: "Dashboard",
      tagColor: "text-purple-600",
      gradient: "from-purple-200 to-blue-100",
      image: datahubImg,
      icon: dashboardIcon,
    },
  ];

  return (
    <section id="portfolio" className="flex flex-col items-center py-24 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-gray-800 leading-8">
          Portfolio <span className="text-sky-600">Pilihan</span>
        </h2>
        <p className="text-lg text-gray-500 font-normal font-['DM_Sans'] leading-5 mt-2 max-w-[650px]">
          Beberapa project terbaik yang pernah saya kerjakan untuk klien lokal maupun internasional.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1100px]">
        {projects.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div
              className={`relative w-full h-56 bg-gradient-to-r ${item.gradient}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Kategori label */}
              <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 shadow-sm flex items-center gap-2">
                <img src={item.icon} alt={item.tag} className="w-4 h-4" />
                <span
                  className={`text-xs font-semibold font-['Poppins'] ${item.tagColor}`}
                >
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 font-['DM_Sans'] text-base leading-5">
                {item.desc}
              </p>

              {/* Lihat Detail */}
              <div className="flex items-center gap-2 mt-4 text-sky-700 cursor-pointer hover:underline">
                <span className="font-['Space_Grotesk'] font-medium">
                  Lihat Detail
                </span>
                <img src={arrowIcon} alt="arrow icon" className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
