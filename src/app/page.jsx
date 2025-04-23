import Navbar from "@/components/Navbar";
import CareerOpportunitiesTable from "@/components/CareerOpp";
import HeroAbout from "@/components/HeroAbout";
import SemesterCards from "@/components/Syllabuscards/SemesterCards";
import Footer from "@/components/Footer";
import Programs from "@/components/ourProgram/progarm";

const Home = () => {
  return (
    <div className="bg-[#fafaf3] pt-24">
      <Navbar />
      <HeroAbout />
      <CareerOpportunitiesTable />
      <Programs/>
      <SemesterCards />
      <Footer />
    </div>
  );
};

export default Home;
