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
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold text-black">{name}</h3>
      <p className="text-gray-700">{location}</p>
      <p className="text-gray-700">Rating: {rating}</p>
      <p className="text-gray-700">Fees: ₹{fees}</p>
    </div>
  );
}
