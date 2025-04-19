import Navbar from "@/components/Navbar";
import CareerOpportunitiesTable from "@/components/CareerOpp";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import HeroAbout from "@/components/HeroAbout";

const Home = () => {
  return (
    <div className="bg-[#fafaf3] pt-24">
      <Navbar />
      {/* <HeroSection />
      <About /> */}
      <HeroAbout />
      <CareerOpportunitiesTable />
    </div>
  );
};

export default Home;
