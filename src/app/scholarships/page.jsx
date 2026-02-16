import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ScholarshipsPage from '@/components/scholarships/scholarships'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <ScholarshipsPage/>
        <Footer/>
    </div>
  )
}

export default page