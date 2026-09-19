import React from "react";
import { Droplet, Moon, Dumbbell, SunMedium } from "lucide-react";

const TIPS = [
  {
    icon: <Droplet className="w-6 h-6 text-sky-600" />,
    bg: "bg-sky-50 border-sky-100",
    title: "Minum 8 Gelas Air Sehari",
    desc: "Cukupi hidrasi tubuh untuk memelihara fungsi ginjal, kelembapan kulit, dan konsentrasi kerja prima.",
  },
  {
    icon: <Moon className="w-6 h-6 text-indigo-600" />,
    bg: "bg-indigo-50 border-indigo-100",
    title: "Tidur Berkualitas 7-8 Jam",
    desc: "Beri waktu sel tubuh beregenerasi serta seimbangkan hormon stres dengan tidur lelap setiap malam.",
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-emerald-600" />,
    bg: "bg-emerald-50 border-emerald-100",
    title: "Aktivitas Fisik 30 Menit",
    desc: "Jalan santai, peregangan ringan, atau bersepeda dapat menjaga kestabilan tekanan darah dan metabolisme.",
  },
];

export default function TipsHarian() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-health-primaryDark text-xs font-semibold mb-2">
            <SunMedium className="w-3.5 h-3.5 text-health-primary" />
            <span>Panduan Ringkas</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-health-textMain">
            Tips Sehat Harian Sederhana
          </h2>
          <p className="text-sm sm:text-base text-health-textMuted mt-1">
            Langkah kecil konsisten yang memberi dampak besar bagi kesehatan jangka panjang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TIPS.map((tip, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border ${tip.bg} flex flex-col items-start transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5`}
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center mb-4">
                {tip.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-health-textMain mb-2">
                {tip.title}
              </h3>
              <p className="text-sm text-health-textMuted leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
