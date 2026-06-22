type CollegeCardProps = {
  name: string;
  location: string;
  rating: number;
  fees: number;
};

export default function CollegeCard({
  name,
  location,
  rating,
  fees,
}: CollegeCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 border">
      <h3 className="text-xl font-bold text-black">
        {name}
      </h3>

      <p className="text-gray-600 mt-2">
        📍 {location}
      </p>

      <p className="text-gray-700 mt-1">
        ⭐ Rating: {rating}
      </p>

      <p className="text-green-700 font-semibold mt-1">
        💰 Fees: ₹{fees.toLocaleString()}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
}
