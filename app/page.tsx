"use client";

import { useState } from "react";
import { colleges } from "../data/colleges";
import CollegeCard from "../components/CollegeCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number[]>([]);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCompare = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-3">
          College Discovery Platform
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Find, Compare and Explore Top Colleges in India
        </p>

        <input
          type="text"
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full p-4 rounded-2xl
            border border-gray-300
            bg-white text-black
            shadow-sm
            mb-8
          "
        />

        {selected.length > 0 && (
          <div className="
            bg-white rounded-3xl
            shadow-lg p-6 mb-8
          ">

            <h2 className="text-2xl font-bold text-black mb-4">
              Selected Colleges ({selected.length})
            </h2>

            <div className="flex flex-wrap gap-3 mb-5">
              {selected.map((id) => {
                const college = colleges.find(
                  (c) => c.id === id
                );

                return (
                  <button
                    key={id}
                    onClick={() =>
                      setSelected(
                        selected.filter(
                          (item) => item !== id
                        )
                      )
                    }
                    className="
                      bg-blue-100
                      text-blue-700
                      px-4 py-2
                      rounded-full
                      font-medium
                      hover:bg-red-100
                      hover:text-red-600
                      transition
                    "
                  >
                    {college?.name} ✕
                  </button>
                );
              })}
            </div>

            {selected.length >= 2 && (
              <a
                href={`/compare?ids=${selected.join(",")}`}
                className="
                  inline-block
                  bg-green-600
                  text-white
                  px-6 py-3
                  rounded-xl
                  hover:bg-green-700
                  transition
                "
              >
                Compare Selected Colleges
              </a>
            )}

          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              id={college.id}
              name={college.name}
              location={college.location}
              rating={college.rating}
              fees={college.fees}
              selected={selected.includes(college.id)}
              onCompare={handleCompare}
            />
          ))}

        </div>

      </div>
    </main>
  );
}
