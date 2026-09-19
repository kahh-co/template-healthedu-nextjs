import React from "react";
import { AlertCircle, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisclaimerBoxProps {
  className?: string;
  variant?: "warning" | "info";
}

export default function DisclaimerBox({
  className,
  variant = "warning",
}: DisclaimerBoxProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4 border",
        variant === "warning"
          ? "bg-amber-50/70 border-amber-200/80 text-amber-950"
          : "bg-emerald-50/70 border-emerald-200/80 text-emerald-950",
        className
      )}
    >
      <div className="shrink-0 mt-0.5">
        {variant === "warning" ? (
          <ShieldAlert className="w-5 h-5 text-amber-600" />
        ) : (
          <AlertCircle className="w-5 h-5 text-emerald-600" />
        )}
      </div>
      <div className="text-xs sm:text-sm leading-relaxed">
        <p className="font-semibold mb-1 text-amber-900">
          Disclaimer Medis Penting:
        </p>
        <p className="text-amber-800/90">
          Seluruh artikel di website ini disusun untuk tujuan edukasi dan informasi umum. Konten ini tidak dimaksudkan sebagai pengganti diagnosis, perawatan, atau nasihat medis profesional dari dokter. Selalu konsultasikan keluhan fisik atau psikis Anda langsung dengan dokter atau fasilitas kesehatan berwenang.
        </p>
      </div>
    </div>
  );
}
