import Navbar from "@/components/Navbar";
import CareerOpportunitiesTable from "@/components/CareerOpp";
import HeroSection from "@/components/HeroSection";
import SemesterCards from "@/components/Syllabuscards/SemesterCards";

const Home = () => {
  return (
    <div className="bg-[#fafaf3] pt-24">
      <Navbar />
      <HeroSection />
      <CareerOpportunitiesTable />
      <SemesterCards/>
    </div>
  );
};

export default Home;
