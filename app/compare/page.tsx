import { colleges } from "../../data/colleges";

type Props = {
  searchParams: Promise<{
    ids?: string;
  }>;
};

export default async function ComparePage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const ids =
    params.ids
      ?.split(",")
      .map(Number)
      .filter(Boolean) || [];

  const selectedColleges = colleges.filter((college) =>
    ids.includes(college.id)
  );

  if (selectedColleges.length < 2) {
    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            Select at least 2 colleges
          </h1>

          <a
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Back Home
          </a>
        </div>
      </main>
    );
  }

  const bestRating = [...selectedColleges].sort(
    (a, b) => b.rating - a.rating
  )[0];

  const lowestFees = [...selectedColleges].sort(
    (a, b) => a.fees - b.fees
  )[0];

  const bestPlacement = [...selectedColleges].sort(
    (a, b) => b.placement - a.placement
  )[0];

  const bestNirf = [...selectedColleges].sort(
    (a, b) => a.nirf - b.nirf
  )[0];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-8">
          College Comparison
        </h1>

        <div className="overflow-x-auto bg-white rounded-3xl shadow-xl">

          <table className="w-full">

            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left">College</th>
                <th className="p-4 text-left">Location</th>
                <th className="p-4 text-left">Rating</th>
                <th className="p-4 text-left">Fees</th>
                <th className="p-4 text-left">Placement</th>
                <th className="p-4 text-left">NIRF</th>
                <th className="p-4 text-left">Campus</th>
              </tr>
            </thead>

            <tbody>
              {selectedColleges.map((college) => (
                <tr
                  key={college.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4 font-semibold">
                    {college.name}
                  </td>

                  <td className="p-4">
                    {college.location}
                  </td>

                  <td className="p-4">
                    ⭐ {college.rating}
                  </td>

                  <td className="p-4 text-green-700 font-semibold">
                    ₹{college.fees.toLocaleString()}
                  </td>

                  <td className="p-4">
                    ₹{college.placement.toLocaleString()}
                  </td>

                  <td className="p-4">
                    #{college.nirf}
                  </td>

                  <td className="p-4">
                    {college.campus}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              🏆 Best Rating
            </h2>

            <p className="font-semibold text-blue-700">
              {bestRating.name}
            </p>

            <p>
              Rating: {bestRating.rating}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              💰 Lowest Fees
            </h2>

            <p className="font-semibold text-green-700">
              {lowestFees.name}
            </p>

            <p>
              ₹{lowestFees.fees.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              💼 Best Placement
            </h2>

            <p className="font-semibold text-purple-700">
              {bestPlacement.name}
            </p>

            <p>
              ₹{bestPlacement.placement.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4">
              🏅 Best NIRF Rank
            </h2>

            <p className="font-semibold text-orange-600">
              {bestNirf.name}
            </p>

            <p>
              Rank #{bestNirf.nirf}
            </p>
          </div>

        </div>

        <div className="text-center mt-8">

          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition"
          >
            Back Home
          </a>

        </div>

      </div>

    </main>
  );
}
