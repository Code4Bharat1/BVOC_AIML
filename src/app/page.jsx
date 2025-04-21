import Navbar from "@/components/Navbar";
import CareerOpportunitiesTable from "@/components/CareerOpp";
import HeroAbout from "@/components/HeroAbout";
import SemesterCards from "@/components/Syllabuscards/SemesterCards";
const Home = () => {
  return (
    <div className="bg-[#fafaf3] pt-24">
      <Navbar />
      <HeroAbout />
      <CareerOpportunitiesTable />
      <SemesterCards />
      <Footer/>
    </div>
  );
};

export default Home;
