import TopNavbar from '../components/TopNavbar';
import BottomNavbar from '../components/BottomNavbar';
import BannerCarousel from '../components/BannerCarousel';
import MarketCard from '../components/MarketCard'; // ← NEW

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pb-16">
      <TopNavbar />

      <div className="p-4">
        <BannerCarousel />

        <h2 className="text-lg font-bold mt-6 mb-2">Market Today</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <MarketCard title="NIFTY 50" value="23,465" change={0.88} />
          <MarketCard title="SENSEX" value="77,209" change={-0.12} />
          <MarketCard title="BANK NIFTY" value="50,789" change={1.35} />
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
}
