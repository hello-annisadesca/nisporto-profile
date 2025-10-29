import React from "react";
import aboutmeProfile from "../assets/images/aboutme_profile.png";
import chatIcon from "../assets/icon/chat.png"; 
import checkIcon from "../assets/icon/check_icon.png"; 

export default function AboutMe() {
  return (
    <section id="about" className="flex justify-center py-24 bg-gray-50">
      <div className="w-[1024px] relative bg-white rounded-3xl shadow-xl border border-gray-200 px-10 py-10 flex items-center gap-12">
        
        <div className="flex-shrink-0 relative">
          <img
            src={aboutmeProfile}
            alt="About Me Profile"
            className="w-40 h-40 rounded-full border-2 border-sky-600 object-cover"
          />
        </div>

        {/* Konten teks */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-gray-800 leading-6">
            Tentang <span className="text-sky-600">Saya</span>
          </h2>

          <p className="text-lg text-gray-600 font-normal font-['DM_Sans'] leading-5 max-w-[640px]">
            Saya adalah seorang mahasiswa dengan pengalaman UI/UX Designer & Web Developer serta dapat menganalisis kebutuhan bisnis bagi perusahaan. 
            Disertai berbagai pengalaman dan keahlian untuk menciptakan hasil kerja yang berdampak.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-2">
            {["Problem Solver", "Team Player", "Fast Learner", "Kreatif & Adaptif"].map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={checkIcon} alt="check icon" className="w-3 h-3" />
                <span className="text-gray-500 text-base font-normal font-['Space_Grotesk']">{skill}</span>
              </div>
            ))}
          </div>
          
          <button className="mt-6 flex items-center gap-2 bg-sky-700 text-white text-base font-semibold font-['Poppins'] px-8 py-3 rounded-lg shadow-lg hover:bg-sky-800 transition">
            <img src={chatIcon} alt="chat icon" className="w-5 h-5" />
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
}
