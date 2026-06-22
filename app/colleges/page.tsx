import { colleges } from "../../data/colleges";
import CollegeCard from "../../components/CollegeCard";

export default function CollegesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          All Colleges
        </h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {colleges.map((college) => (
            <CollegeCard
              key={college.id}
              name={college.name}
              location={college.location}
              rating={college.rating}
              fees={college.fees}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
