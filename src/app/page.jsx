'use client';
import { useEffect } from 'react';
import React from 'react';
import Welcome from '@/components/Hub/Welcome';
import AdmissionCard from '@/components/Hub/AdmissionCard';
import AboutUs from '@/components/Hub/AboutUs';
import FiveCards from '@/components/Hub/FiveCards';
import CareerOpportunities from '@/components/Hub/CareerOpportunities';
import InDemandCareer from '@/components/Hub/InDemandCareer';
import CareerPath from '@/components/Hub/CareerPath';
import KickStart from '@/components/Hub/KickStart';
import NextLevelRole from '@/components/Hub/NextLevelRole';
import ShapeTheFuture from '@/components/Hub/ShapeTheFuture';
import HubHero from '@/components/Hub/HubHero';

const Page = () => {
  useEffect(() => {
     const script = document.createElement('script');
     script.src = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?97631';
     script.async = true;
     script.onload = () => {
       if (typeof CreateWhatsappChatWidget === 'function') {
         CreateWhatsappChatWidget({
           enabled: true,
           chatButtonSetting: {
             backgroundColor: '#00e785',
             ctaText: 'Chat with us',
             borderRadius: '25',
             marginLeft: '20',
             marginRight: '0',
             marginBottom: '35',
             ctaIconWATI: false,
             position: 'left',
           },
           brandSetting: {
             brandName: 'BVOC AI & ML',
             brandSubTitle: 'undefined',
             brandImg: 'https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg',
             welcomeText: 'Hi there!\nWelocme',
             messageText: 'Hi',
             backgroundColor: '#00e785',
             ctaText: 'Chat with us',
             borderRadius: '25',
             autoShow: false,
             phoneNumber: '919892398976',
           },
         });
       }
     };
 
     document.body.appendChild(script);
   }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 "> {/* Add padding top to prevent overlap with fixed navbar */}
        {/* Page content goes here */}
        <HubHero/>
        <Welcome/>
        <AdmissionCard/>
        <AboutUs/>
        <FiveCards/>
        <CareerOpportunities/>
        <InDemandCareer/>
        <CareerPath/>
        <KickStart/>
        <NextLevelRole/>
        <ShapeTheFuture/>
        
      </main>
      
    </div>
  );
};

export default Page;
