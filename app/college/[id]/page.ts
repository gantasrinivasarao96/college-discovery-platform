import { colleges } from "../../../data/colleges";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetails({ params }: Props) {
  const { id } = await params;

  const college = colleges.find(
    (c) => c.id === parseInt(id)
  );

  if (!college) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-100">
        <h1 className="text-2xl font-bold text-red-500">
          College Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-6">

          <h1 className="text-4xl font-bold text-blue-700 mb-6">
            {college.name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="font-semibold">📍 Location</p>
              <p>{college.location}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="font-semibold">⭐ Rating</p>
              <p>{college.rating}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="font-semibold">💰 Fees</p>
              <p>₹{college.fees.toLocaleString()}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="font-semibold">🎓 Branch</p>
              <p>{college.branch}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="font-semibold">📦 Placement</p>
              <p>₹{college.placement.toLocaleString()}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="font-semibold">🏆 NIRF Ranking</p>
              <p>{college.nirf}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="font-semibold">🏛 Established</p>
              <p>{college.established}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="font-semibold">🌳 Campus Size</p>
              <p>{college.campus}</p>
            </div>

          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3">
              About College
            </h2>

            <p className="text-gray-700 leading-7">
              {college.name} is a reputed institution known for
              academic excellence, strong placements, industry
              partnerships, modern infrastructure, and research
              opportunities.
            </p>
          </div>

          <div className="flex gap-4 mt-8">

            <a
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Back Home
            </a>

            <a
              href="/compare"
              className="bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              Compare Colleges
            </a>

          </div>

        </div>

      </div>
    </main>
  );
}
