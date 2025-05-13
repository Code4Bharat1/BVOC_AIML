'use client';
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/Infrastructure/Hero';
import ModernInfra from '@/components/Infrastructure/ModernInfra';
import InfraImgVid from '@/components/Infrastructure/InfraImgVid';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow py-16"> {/* Add padding top to prevent overlap with fixed navbar */}
        {/* Page content goes here */}
        <Hero/>
        <ModernInfra/>
        <InfraImgVid/>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
