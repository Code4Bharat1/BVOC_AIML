import Navbar from "@/components/Navbar";
import CareerOpportunitiesTable from "@/components/CareerOpp";
import HeroAbout from "@/components/HeroAbout";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/Chatbot/Chatbot";
import StudentExperiance from "@/components/StudentExperiance/StudentExperiance";
import Brands from "@/components/Partnerns&Collabrations/Partnerns&Collabrations";
import CourseFilterBar from "@/components/Syllabuscards/SyllabusSidebar";
import ProgramStructure from "@/components/ProgramStructure/ProgramStructure";
const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroAbout />
      <CareerOpportunitiesTable />
      <ProgramStructure/>
      <CourseFilterBar/>
      <StudentExperiance/>
      <Brands/>
      <Footer />
      <ChatbotWidget/>
    </div>
  );
};

export default Home;
