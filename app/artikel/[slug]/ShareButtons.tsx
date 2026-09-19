"use client";

import React, { useState } from "react";
import { Share2, Check, Copy, MessageCircle } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/artikel/${slug}`;
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/artikel/${slug}`;
      const text = encodeURIComponent(`*${title}*\nBaca selengkapnya di SehatInfo:\n${url}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-health-textMain">
        <Share2 className="w-4 h-4 text-health-primary" />
        <span>Bagikan Artikel Ini:</span>
      </div>

      <div className="flex items-center gap-2.5 flex-wrap">
        {/* WhatsApp Share */}
        <button
          onClick={handleShareWhatsApp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium shadow-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </button>

        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Tautan Tersalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-500" />
              <span>Salin Tautan</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
