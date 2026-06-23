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
      className={`group bg-white rounded-2xl border p-6 flex flex-col justify-between min-h-[260px] transition-all duration-300 ${
        selected
          ? "border-[#06C] ring-2 ring-blue-100 shadow-[0_4px_24px_rgba(0,102,204,0.06)] bg-[#F5F9FF]/40"
          : "border-[#E8E8ED] shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#D2D2D7] hover:shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:scale-[1.002]"
      }`}
    >
      <div>
        <div className="flex justify-between items-start gap-2 mb-3">
          <div className="flex items-center gap-1.5 text-xs text-[#86868B] font-normal tracking-tight">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <span>{location}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#E8E8ED]/60 px-2 py-0.5 rounded-md text-[11px] font-semibold text-[#1D1D1F]">
            <span>NIRF #{nirf}</span>
          </div>
        </div>

        <h3 className="text-base font-semibold tracking-tight text-[#1D1D1F] line-clamp-2 leading-snug group-hover:text-[#06C] transition-colors duration-200">
          {name}
        </h3>

        <div className="mt-4 grid grid-cols-3 gap-x-2 border-t border-[#F5F5F7] pt-3 text-xs">
          <div>
            <span className="text-[#86868B] block font-normal">
              Annual Fees
            </span>

            <span className="font-semibold text-[#1D1D1F] mt-0.5 block truncate">
              ₹{fees.toLocaleString("en-IN")}
            </span>
          </div>

          <div>
            <span className="text-[#86868B] block font-normal">
              Highest Package
            </span>

            <span className="font-semibold text-[#1D1D1F] mt-0.5 block truncate">
              ₹{(placement / 100000).toFixed(1)} LPA
            </span>
          </div>

          <div className="text-right">
            <span className="text-[#86868B] block font-normal">
              Rating
            </span>

            <span className="font-semibold text-[#BF4800] mt-0.5 block">
              ★ {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-4 border-t border-[#F5F5F7] mt-4 w-full">
        <Link
          href={`/college/${id}`}
          className="flex-1 inline-flex justify-center items-center h-8 px-3 rounded-full text-xs font-medium border border-[#E8E8ED] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] hover:border-[#D2D2D7] transition-all text-center"
        >
          Details
        </Link>

        <button
          onClick={() => onCompare(id)}
          className={`flex-1 h-8 px-3 rounded-full text-xs font-medium transition-all ${
            selected
              ? "bg-[#06C] text-white shadow-[0_1px_2px_rgba(0,102,204,0.1)]"
              : "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED]"
          }`}
        >
          {selected ? "Selected" : "Compare"}
        </button>
      </div>
    </div>
  );
}
