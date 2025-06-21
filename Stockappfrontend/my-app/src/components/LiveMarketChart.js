'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
  { time: '9:15', price: 23465 },
  { time: '10:15', price: 23475 },
  { time: '11:15', price: 23490 },
  { time: '12:15', price: 23480 },
  { time: '1:15', price: 23510 },
  { time: '2:15', price: 23530 },
  { time: '3:15', price: 23560 },
];

export default function LiveMarketChart() {
  return (
    <div className="bg-[#1f2937] rounded-xl p-4 mt-6 shadow w-full">
      <h2 className="text-white font-semibold mb-2">NIFTY 50 - Live</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sampleData}>
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#38bdf8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
