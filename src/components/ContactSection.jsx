import React from "react";
import locationIcon from "../assets/icon/location_icon.png";
import phoneIcon from "../assets/icon/phone_icon.png";
import mailIcon from "../assets/icon/mailtext_icon.png";
import sendIcon from "../assets/icon/send_icon.png";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-gradient-to-r from-blue-100 via-white to-purple-100 rounded-3xl shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] mt-24 mb-24 overflow-hidden">
      <div className="hidden lg:block relative w-[896px] h-[564px] mx-auto">
        
        {/* LEFT TEXT */}
        <div className="absolute left-[64px] top-[64px] w-[360px]">
          <h2 className="text-3xl font-bold font-['Space_Grotesk'] leading-8 text-gray-800">
            Tertarik{" "}
            <span className="text-sky-600">bekerja sama</span>
            <span className="text-gray-800">? Saya siap <br /></span>
            <span className="text-sky-600">membantu.</span>
          </h2>

          <p className="absolute w-[200px] left-0 top-[137px] text-gray-600 text-base font-normal font-['DM_Sans'] leading-[1.35rem]">
            Yuk, diskusikan project impianmu. Saya siap membantu mewujudkan
            produk digital yang impactful buat bisnismu.
          </p>
        </div>

        {/* FORM */}
        <div className="absolute left-[260px] top-[112px] w-[690px] h-auto bg-white rounded-2xl shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] border border-gray-200 px-[32px] pt-[32px] pb-[40px]">
          <div className="flex gap-[32px]">
            <div className="w-[310px] h-12 bg-gray-100 rounded-lg outline outline-1 outline-gray-200 flex items-center px-4">
              <span className="text-gray-400 text-base font-normal font-['DM_Sans'] leading-6">
                Nama
              </span>
            </div>
            <div className="w-[310px] h-12 bg-gray-100 rounded-lg outline outline-1 outline-gray-200 flex items-center px-4">
              <span className="text-gray-400 text-base font-normal font-['DM_Sans'] leading-6">
                Email
              </span>
            </div>
          </div>
          <div className="mt-[38px] h-[128px] bg-gray-100 rounded-lg outline outline-1 outline-gray-200 p-4">
            <span className="text-gray-400 text-base font-normal font-['DM_Sans'] leading-6">
              Pesan
            </span>
          </div>

          {/* BUTTON */}
          <div className="mt-[32px] h-12 bg-gradient-to-r from-sky-300 to-sky-700 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition">
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Kirim Pesan
            </span>
            <img src={sendIcon} alt="send" className="w-4 h-4" />
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="absolute left-[142px] top-[500px] w-[612px] h-[36px] flex justify-between items-center text-gray-600 font-['Poppins'] text-base">
          <div className="flex items-center gap-2">
            <img src={locationIcon} alt="location" className="w-4 h-4" />
            <span>Surabaya, Indonesia</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={phoneIcon} alt="phone" className="w-4 h-4" />
            <span>0812-3456-7890</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={mailIcon} alt="mail" className="w-4 h-4" />
            <span>thisisnisa@email.com</span>
          </div>
        </div>
      </div>

      {/* === MOBILE / TABLET LAYOUT === */}
      <div className="block lg:hidden flex flex-col items-center text-center px-6 py-12 gap-8">
        <div>
          <h2 className="text-2xl font-bold font-['Space_Grotesk'] text-gray-800 leading-snug">
            Tertarik <span className="text-sky-600">bekerja sama</span>? <br />
            Saya siap <span className="text-sky-600">membantu.</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base font-normal font-['DM_Sans'] leading-6 max-w-md mx-auto">
            Yuk, diskusikan project impianmu. Saya siap membantu mewujudkan
            produk digital yang impactful buat bisnismu.
          </p>
        </div>

        {/* FORM */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nama"
            className="h-12 bg-gray-100 rounded-lg outline outline-1 outline-gray-200 px-4 text-gray-600 text-sm font-['DM_Sans']"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-12 bg-gray-100 rounded-lg outline outline-1 outline-gray-200 px-4 text-gray-600 text-sm font-['DM_Sans']"
          />
          <textarea
            placeholder="Pesan"
            className="h-32 bg-gray-100 rounded-lg outline outline-1 outline-gray-200 p-4 text-gray-600 text-sm font-['DM_Sans']"
          />
          <button className="w-full h-12 bg-gradient-to-r from-sky-300 to-sky-700 rounded-xl text-white font-bold font-['Space_Grotesk'] flex items-center justify-center gap-2 hover:opacity-90 transition">
            Kirim Pesan
            <img src={sendIcon} alt="send" className="w-4 h-4" />
          </button>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-10 gap-3 mt-6 text-gray-600 font-['Poppins'] text-sm">
          <div className="flex items-center justify-center gap-2">
            <img src={locationIcon} alt="location" className="w-4 h-4" />
            <span>Surabaya, Indonesia</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={phoneIcon} alt="phone" className="w-4 h-4" />
            <span>0812-3456-7890</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={mailIcon} alt="mail" className="w-4 h-4" />
            <span>thisisnisa@email.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
