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

  const ids = params.ids
    ? params.ids.split(",").map(Number)
    : [];

  const selectedColleges = colleges.filter((college) =>
    ids.includes(college.id)
  );

  if (selectedColleges.length < 2) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h1 className="text-2xl font-bold text-red-500">
            Select at least 2 colleges
          </h1>

          <a
            href="/"
            className="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back Home
          </a>
        </div>
      </main>
    );
  }

  const highestRated = [...selectedColleges].sort(
    (a, b) => b.rating - a.rating
  )[0];

  return (
    <main className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          College Comparison
        </h1>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">
                  College
                </th>

                <th className="p-4 text-left">
                  Location
                </th>

                <th className="p-4 text-left">
                  Rating
                </th>

                <th className="p-4 text-left">
                  Fees
                </th>

                <th className="p-4 text-left">
                  Placement
                </th>

                <th className="p-4 text-left">
                  Branch
                </th>
              </tr>
            </thead>

            <tbody>

              {selectedColleges.map((college) => (
                <tr
                  key={college.id}
                  className={`border-b ${
                    college.id === highestRated.id
                      ? "bg-yellow-50"
                      : ""
                  }`}
                >
                  <td className="p-4 font-semibold">
                    {college.name}
                    {college.id === highestRated.id && " 🏆"}
                  </td>

                  <td className="p-4">
                    {college.location}
                  </td>

                  <td className="p-4">
                    ⭐ {college.rating}
                  </td>

                  <td className="p-4">
                    ₹{college.fees.toLocaleString()}
                  </td>

                  <td className="p-4">
                    ₹{college.placement.toLocaleString()}
                  </td>

                  <td className="p-4">
                    {college.branch}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold text-center text-black">
            Best Rated College
          </h2>

          <p className="text-center text-xl mt-4 text-blue-700 font-bold">
            🏆 {highestRated.name}
          </p>

          <p className="text-center text-gray-700 mt-2">
            Rating: {highestRated.rating}
          </p>

        </div>

        <div className="text-center mt-8">

          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back Home
          </a>

        </div>

      </div>
    </main>
  );
}
