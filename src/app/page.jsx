import Navbar from "@/components/Navbar";
import CareerOpportunitiesTable from "@/components/CareerOpp";
import HeroAbout from "@/components/HeroAbout";
import SemesterCards from "@/components/Syllabuscards/SemesterCards";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/Chatbot/Chatbot";
import StudentExperiance from "@/components/StudentExperiance/StudentExperiance";
import Brands from "@/components/Partnerns&Collabrations/Partnerns&Collabrations";
const Home = () => {
  return (
    <div className="bg-[#fafaf3] ">
      <Navbar />
      <HeroAbout />
      <CareerOpportunitiesTable />
      <SemesterCards />
      <StudentExperiance/>
      <Brands/>
      <Footer />
      <ChatbotWidget/>
    </div>
  );
};

export default Home;
