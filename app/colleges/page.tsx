"use client";

import { useMemo, useState } from "react";
import { colleges } from "../../data/colleges";
import CollegeCard from "../../components/CollegeCard";

type SortOption =
  | "rating"
  | "fees-low"
  | "fees-high"
  | "placement"
  | "nirf";

export default function CollegesPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [tier, setTier] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("rating");

  const [selected, setSelected] = useState<number[]>([]);

  const handleCompare = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const filteredColleges = useMemo(() => {
    let result = [...colleges];

    if (search.trim()) {
      result = result.filter((college) =>
        college.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (region !== "All") {
      result = result.filter(
        (college) =>
          college.region.toLowerCase() === region.toLowerCase()
      );
    }

    if (tier !== "All") {
      result = result.filter(
        (college) => String(college.tier) === tier
      );
    }

    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "fees-low":
        result.sort((a, b) => a.fees - b.fees);
        break;

      case "fees-high":
        result.sort((a, b) => b.fees - a.fees);
        break;

      case "placement":
        result.sort((a, b) => b.placement - a.placement);
        break;

      case "nirf":
        result.sort((a, b) => a.nirf - b.nirf);
        break;
    }

    return result;
  }, [search, region, tier, sortBy]);

  return (
    <main className="min-h-screen bg-[#F5F5F7] p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1D1D1F] mb-10">
          Explore Engineering Colleges
        </h1>

        <div className="bg-white rounded-3xl border border-[#E5E5EA] p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search college..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 px-4 rounded-xl border border-gray-300"
            />

            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="h-12 px-4 rounded-xl border border-gray-300"
            >
              <option value="All">All Regions</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>

            <select
              value={tier}
              onChange={(e) => setTier(e.target.value)}
              className="h-12 px-4 rounded-xl border border-gray-300"
            >
              <option value="All">All Tiers</option>
              <option value="1">Tier 1</option>
              <option value="2">Tier 2</option>
              <option value="3">Tier 3</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as SortOption)
              }
              className="h-12 px-4 rounded-xl border border-gray-300"
            >
              <option value="rating">Highest Rating</option>
              <option value="fees-low">Lowest Fees</option>
              <option value="fees-high">Highest Fees</option>
              <option value="placement">Best Placement</option>
              <option value="nirf">Best NIRF Rank</option>
            </select>
          </div>
        </div>

        {selected.length >= 2 && (
          <a
            href={`/compare?ids=${selected.join(",")}`}
            className="inline-block mb-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Compare Selected Colleges ({selected.length})
          </a>
        )}

        <div className="mb-6">
          <p className="text-gray-600 font-medium">
            Showing {filteredColleges.length} colleges
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              id={college.id}
              name={college.name}
              location={college.location}
              rating={college.rating}
              fees={college.fees}
              placement={college.placement}
              nirf={college.nirf}
              selected={selected.includes(college.id)}
              onCompare={handleCompare}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
