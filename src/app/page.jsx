import Navbar from "@/components/Navbar";
import CareerOpportunitiesTable from "@/components/CareerOpp";
import HeroAbout from "@/components/HeroAbout";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/Chatbot/Chatbot";
import StudentExperiance from "@/components/StudentExperiance/StudentExperiance";
import Brands from "@/components/Partnerns&Collabrations/Partnerns&Collabrations";
import Programs from "@/components/ourProgram/progarm";
import CourseFilterBar from "@/components/Syllabuscards/SyllabusSidebar";
const Home = () => {
  return (
    <div className="bg-[#fafaf3] ">
      <Navbar />
      <HeroAbout />
      <CareerOpportunitiesTable />
      <Programs/>
      <CourseFilterBar/>
      <StudentExperiance/>
      <Brands/>
      <Footer />
      <ChatbotWidget/>
    </div>
  );
};

export default Home;
