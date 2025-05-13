import React from 'react'
import Navbar from '@/components/layout/Navbar'
import CardCarousel from '@/components/WhyChooseUs/Cardcarousel'
import DegreeComparisonTable from '@/components/WhyChooseUs/Tablesection'
import WhyChooseBVoc from '@/components/WhyChooseUs/WhyChooseBvoc'
import PeerToPeerLearning from '@/components/WhyChooseUs/PeerToPeerLearning'
import CenteredBoxWithCards from '@/components/WhyChooseUs/TopBenefits'
import Footer from '@/components/layout/Footer'
 const page = () => {
  return (
    <div>
    <Navbar/>
    <main className="bg-[#0f0f1a] min-h-screen">
    <CardCarousel/>
    <DegreeComparisonTable/>
    <WhyChooseBVoc/>
    <PeerToPeerLearning/>
    <CenteredBoxWithCards/>
    <Footer/>
    </main>
    </div>
  )
}
export default page