import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function MarketCard({ title, value, change }) {
  const isPositive = change >= 0;

  return (
    <div className="bg-[#1f2937] text-white p-4 rounded-xl w-[160px] shadow hover:shadow-lg transition">
      <h2 className="text-sm font-semibold mb-1">{title}</h2>
      <p className="text-xl font-bold">{value}</p>
      <div className="flex items-center text-sm mt-1">
        {isPositive ? (
          <FaArrowUp className="text-green-500 mr-1" />
        ) : (
          <FaArrowDown className="text-red-500 mr-1" />
        )}
        <span className={isPositive ? "text-green-500" : "text-red-500"}>
          {change}%
        </span>
      </div>
    </div>
  );
}
