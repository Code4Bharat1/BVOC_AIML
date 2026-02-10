import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import EnhancedAITools from '@/components/WhyChooseUs/Cardcarousel'
import CourseComparison from '@/components/WhyChooseUs/CourseComparison'
import PeerToPeerLearning from '@/components/WhyChooseUs/PeerToPeerLearning'
import DegreeComparisonTable from '@/components/WhyChooseUs/Tablesection'
import CenteredBoxWithCards from '@/components/WhyChooseUs/TopBenefits'
import WhyChooseBVoc from '@/components/WhyChooseUs/WhyChooseBvoc'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <EnhancedAITools/>
        <CourseComparison/>
        <PeerToPeerLearning/>
        <DegreeComparisonTable/>
        <CenteredBoxWithCards/>
        <WhyChooseBVoc/>
        <Footer/>
    </div>
  )
}

export default page