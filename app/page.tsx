"use client";

import { useState } from "react";
import { colleges } from "../data/colleges";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700">
          College Discovery Platform
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Find, Compare and Explore Top Colleges in India
        </p>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search colleges..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border rounded-lg bg-white text-black"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">
          Featured Colleges
        </h2>

        <div className="grid gap-4">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h3 className="font-bold text-black">
                {college.name}
              </h3>

              <p className="text-gray-700">
                {college.location}
              </p>

              <p className="text-gray-700">
                Rating: {college.rating}
              </p>

              <p className="text-gray-700">
                Fees: ₹{college.fees}
              </p>
            </div>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="mt-6 text-center text-red-500">
            No colleges found
          </div>
        )}
      </div>
    </main>
  );
}
