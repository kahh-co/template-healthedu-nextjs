"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-3">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-health-primary flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="font-heading font-bold text-lg text-health-textMain">
          Pesan Berhasil Terkirim!
        </h4>
        <p className="text-xs sm:text-sm text-health-textMuted max-w-xs mx-auto">
          Terima kasih telah menghubungi redaksi SehatInfo. Kami akan meninjau pesan Anda secepatnya.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-semibold text-health-primary hover:underline pt-2 inline-block"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-xs font-semibold text-health-textMain mb-1">
          Nama Lengkap
        </label>
        <input
          required
          type="text"
          placeholder="Contoh: Budi Santoso"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-health-primary focus:ring-2 focus:ring-emerald-100"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-health-textMain mb-1">
          Alamat Email
        </label>
        <input
          required
          type="email"
          placeholder="nama@email.com"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-health-primary focus:ring-2 focus:ring-emerald-100"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-health-textMain mb-1">
          Pesan / Usulan Topik
        </label>
        <textarea
          required
          rows={3}
          placeholder="Tuliskan masukan atau usulan topik kesehatan Anda di sini..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-health-primary focus:ring-2 focus:ring-emerald-100 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 px-4 rounded-xl bg-health-primary hover:bg-health-primaryDark text-white font-semibold text-sm transition-colors shadow-xs flex items-center justify-center gap-2 disabled:opacity-75"
      >
        <Send className="w-4 h-4" />
        <span>{loading ? "Mengirimkan..." : "Kirim Pesan ke Redaksi"}</span>
      </button>
    </form>
  );
}
