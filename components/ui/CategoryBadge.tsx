import React from "react";
import Link from "next/link";
import { getKategoriBySlug } from "@/lib/data/kategori";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  slug: string;
  isLink?: boolean;
  className?: string;
  size?: "sm" | "md";
}

export default function CategoryBadge({
  slug,
  isLink = false,
  className,
  size = "sm",
}: CategoryBadgeProps) {
  const kategori = getKategoriBySlug(slug);
  const name = kategori ? kategori.nama : slug;
  const badgeClasses = kategori
    ? kategori.warnaBadge
    : "bg-emerald-100 text-emerald-800 border-emerald-300";

  const sizeClasses =
    size === "sm"
      ? "text-xs px-2.5 py-1"
      : "text-sm px-3.5 py-1.5";

  const content = (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border transition-all duration-200",
        sizeClasses,
        badgeClasses,
        isLink && "hover:opacity-85 hover:shadow-xs",
        className
      )}
    >
      {name}
    </span>
  );

  if (isLink) {
    return (
      <Link href={`/kategori/${slug}`} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
