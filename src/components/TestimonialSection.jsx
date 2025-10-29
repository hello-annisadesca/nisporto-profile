import React from "react";
import client1 from "../assets/images/client_citra.jpg";
import client2 from "../assets/images/client_rama.jpg";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Citra Nadya",
      role: "Product Manager, Fintech",
      message:
        "Arie mampu memahami kebutuhan tim kami dan menerjemahkannya menjadi desain yang sangat user-friendly. Komunikasi dan delivery selalu on time!",
      color: "border-blue-400",
      image: client1,
    },
    {
      id: 2,
      name: "Rama Putra",
      role: "CEO, EduStartup",
      message:
        "Kreativitas dan kecepatan kerja Arie luar biasa. Landing page yang dibuatkan sangat modern dan efektif meningkatkan konversi produk kami.",
      color: "border-pink-400",
      image: client2,
    },
  ];

  return (
    <section className="flex flex-col items-center py-24 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-gray-800 leading-8">
          <span className="text-sky-600">Testimoni</span> Klien
        </h2>
        <p className="text-lg text-gray-500 font-normal font-['DM_Sans'] leading-5 mt-2 max-w-[600px]">
          Apa kata mereka yang pernah bekerja sama dengan saya.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1000px]">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative hover:shadow-2xl transition"
        >
            {/* Header */}
            <div className="flex items-center mb-6">
              <img
                src={t.image}
                alt={t.name}
                className={`w-14 h-14 rounded-full border-2 ${t.color} mr-4`}
              />
              <div>
                <h4 className="text-gray-800 font-bold font-['Space_Grotesk'] text-base">
                  {t.name}
                </h4>
                <p className="text-gray-400 text-sm font-['DM_Sans']">
                  {t.role}
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-lg font-['DM_Sans'] leading-relaxed">
              “{t.message}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
