import { colleges } from "../../../data/colleges";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetails({ params }: Props) {
  const { id } = await params;

  const college = colleges.find(
    (c) => c.id === Number(id)
  );

  if (!college) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h1 className="text-3xl font-bold text-red-600">
            College Not Found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-4 md:p-8">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-8">
            {college.name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                📍 Location
              </p>
              <p className="text-xl font-semibold text-black">
                {college.location}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                ⭐ Rating
              </p>
              <p className="text-xl font-semibold text-black">
                {college.rating}/5
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                💰 Annual Fees
              </p>
              <p className="text-xl font-semibold text-green-700">
                ₹{college.fees.toLocaleString()}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                💼 Placement Package
              </p>
              <p className="text-xl font-semibold text-black">
                ₹{college.placement.toLocaleString()}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                🏆 NIRF Ranking
              </p>
              <p className="text-xl font-semibold text-black">
                #{college.nirf}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                🎓 Branch
              </p>
              <p className="text-xl font-semibold text-black">
                {college.branch}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                📅 Established
              </p>
              <p className="text-xl font-semibold text-black">
                {college.established}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                🌳 Campus Size
              </p>
              <p className="text-xl font-semibold text-black">
                {college.campus}
              </p>
            </div>

          </div>

          <div className="mt-10">

            <h2 className="text-3xl font-bold text-black mb-4">
              About College
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              {college.name} is one of India's leading institutions
              known for academic excellence, strong placements,
              industry partnerships, research opportunities and
              modern infrastructure.
            </p>

          </div>

          <div className="mt-10">

            <h2 className="text-3xl font-bold text-black mb-4">
              Courses Offered
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-blue-50 p-4 rounded-xl">
                Computer Science Engineering
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                Artificial Intelligence & Machine Learning
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                Electronics & Communication Engineering
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                Mechanical Engineering
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                Civil Engineering
              </div>

            </div>

          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-10">

            <a
              href="/"
              className="text-center bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition"
            >
              ← Back Home
            </a>

            <a
              href="/"
              className="text-center bg-green-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-green-700 transition"
            >
              Select Colleges To Compare
            </a>

            <a
              href="/recommend"
              className="text-center bg-purple-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-purple-700 transition"
            >
              Get Recommendations
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}
