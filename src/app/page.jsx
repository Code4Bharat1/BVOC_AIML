import Navbar from "@/components/Navbar";
import CareerOpportunitiesTable from "@/components/CareerOpp";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <div className="bg-[#fafaf3] pt-24">
      <Navbar />
      <HeroSection />
      <CareerOpportunitiesTable />
    </div>
  );
};

export default Home;
