type CollegeCardProps = {
  id: number;
  name: string;
  location: string;
  rating: number;
  fees: number;
  selected?: boolean;
  onCompare?: (id: number) => void;
};

export default function CollegeCard({
  id,
  name,
  location,
  rating,
  fees,
  selected,
  onCompare,
}: CollegeCardProps) {
  return (
    <div className="
      bg-white rounded-3xl
      border border-gray-200
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-1
      transition-all duration-300
      p-6
    ">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">
        {name}
      </h3>

      <div className="space-y-2">
        <p className="text-gray-700">
          📍 <span className="font-semibold">Location:</span> {location}
        </p>

        <p className="text-gray-700">
          ⭐ <span className="font-semibold">Rating:</span> {rating}
        </p>

        <p className="text-green-700 font-bold">
          💰 Fees: ₹{fees.toLocaleString()}
        </p>
      </div>

      <div className="flex gap-3 mt-5">
        <a
          href={`/college/${id}`}
          className="
            flex-1 text-center
            bg-blue-600 text-white
            py-3 rounded-xl
            hover:bg-blue-700
            transition
          "
        >
          View Details
        </a>

        <button
          onClick={() => onCompare?.(id)}
          className={`
            flex-1 py-3 rounded-xl text-white transition
            ${
              selected
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-600 hover:bg-green-700"
            }
          `}
        >
          {selected ? "✓ Selected" : "Compare"}
        </button>
      </div>
    </div>
  );
}
