"use client";

import Link from "next/link";

interface CollegeCardProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  fees: number;
  placement: number;
  nirf: number;
  selected: boolean;
  onCompare: (id: number) => void;
}

export default function CollegeCard({
  id,
  name,
  location,
  rating,
  fees,
  placement,
  nirf,
  selected,
  onCompare,
}: CollegeCardProps) {
  return (
    <div
      className={`group bg-white/90 backdrop-blur-xl rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${
        selected
          ? "border-[#0071E3] ring-2 ring-blue-100"
          : "border-[#E5E5EA]"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-[#1D1D1F]">
            {name}
          </h3>

          <p className="text-sm text-[#86868B] mt-1">
            📍 {location}
          </p>
        </div>

        <div className="px-3 py-1 rounded-full bg-[#F5F5F7] text-xs font-semibold text-[#1D1D1F]">
          NIRF #{nirf}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mt-5 pt-4 border-t border-[#F2F2F7]">
        <div>
          <span className="text-[11px] uppercase tracking-wide text-[#86868B] block">
            Fees
          </span>

          <span className="text-sm font-semibold text-[#1D1D1F]">
            ₹{fees.toLocaleString("en-IN")}
          </span>
        </div>

        <div>
          <span className="text-[11px] uppercase tracking-wide text-[#86868B] block">
            Package
          </span>

          <span className="text-sm font-semibold text-[#1D1D1F]">
            ₹{(placement / 100000).toFixed(1)} LPA
          </span>
        </div>

        <div>
          <span className="text-[11px] uppercase tracking-wide text-[#86868B] block">
            Rating
          </span>

          <span className="text-sm font-semibold text-[#FF9500]">
            ★ {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-5 pt-4 border-t border-[#F2F2F7]">
        <Link
          href={`/college/${id}`}
          className="flex-1 h-10 rounded-xl bg-[#F5F5F7] text-[#1D1D1F] text-sm font-medium flex items-center justify-center hover:bg-[#EAEAEC] transition"
        >
          Details
        </Link>

        <button
          onClick={() => onCompare(id)}
          className={`flex-1 h-10 rounded-xl text-sm font-medium transition ${
            selected
              ? "bg-[#0071E3] text-white"
              : "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#EAEAEC]"
          }`}
        >
          {selected ? "Selected" : "Compare"}
        </button>
      </div>
    </div>
  );
}
