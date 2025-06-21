import TopNavbar from '../components/TopNavbar';
import BottomNavbar from '../components/BottomNavbar';
import BannerCarousel from '../components/BannerCarousel';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pb-16">
      <TopNavbar />

      <div className="p-4">
        <BannerCarousel />
      </div>

      <BottomNavbar />
    </div>
  );
}
