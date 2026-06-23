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
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">
          College not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          {college.name}
        </h1>

        <div className="space-y-3 text-lg text-gray-800">
          <p>📍 Location: {college.location}</p>
          <p>⭐ Rating: {college.rating}</p>
          <p className="text-green-700 font-bold">
            💰 Fees: ₹{college.fees.toLocaleString()}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-3">
            About College
          </h2>

          <p className="text-gray-700 leading-7">
            {college.name} is a reputed institution known for
            quality education, excellent faculty, strong placements,
            modern infrastructure, and industry-oriented learning.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-3">
            Courses Offered
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Computer Science Engineering</li>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Electronics & Communication Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Civil Engineering</li>
          </ul>
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back Home
          </a>

          <a
            href="/compare"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Compare Colleges
          </a>
        </div>

      </div>
    </main>
  );
}
