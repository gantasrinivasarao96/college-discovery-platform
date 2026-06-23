"use client";

import { useState } from "react";
import { colleges } from "../../data/colleges";

export default function RecommendPage() {
  const [budget, setBudget] = useState(200000);

  const filteredColleges = colleges.filter(
    (college) => college.fees <= budget
  );

  return (
    <main className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
          College Recommendation System
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">

          <label className="font-semibold text-black">
            Enter Your Budget
          </label>

          <input
            type="number"
            placeholder="Enter budget (₹)"
            value={budget === 0 ? "" : budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full mt-3 p-4 rounded-xl border-2 border-blue-500 bg-white text-black"
          />
        </div>

        <h2 className="text-2xl font-bold text-black mb-5">
          Recommended Colleges
        </h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className="bg-white p-5 rounded-2xl shadow-lg border"
            >
              <h3 className="text-xl font-bold text-blue-700">
                {college.name}
              </h3>

              <p className="mt-2 text-gray-700">
                📍 {college.location}
              </p>

              <p className="text-gray-700">
                ⭐ {college.rating}
              </p>

              <p className="font-bold text-green-700">
                ₹{college.fees.toLocaleString()}
              </p>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
