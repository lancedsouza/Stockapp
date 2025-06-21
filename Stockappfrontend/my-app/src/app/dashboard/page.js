import TopNavbar from '../../components/TopNavbar';
import CategoryTabs from '../../components/CategoryTabs';

export default function Dashboard() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <TopNavbar />
      <CategoryTabs />
      {/* More components will go here */}
    </div>
  );
}
