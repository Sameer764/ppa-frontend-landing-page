'use client'
import { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "@/components/Banner/Banner";
import BlogsSection from "@/components/BlogsSection/BlogsSection";
import CommunityBanner from "@/components/CommunityBanner/CommunityBanner";
import CompanyBanner from "@/components/CompanyBanner/CompanyBanner";
import CourseSection from "@/components/CourseSection/CourseSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Footer from "@/components/Footer/Footer";
import InPerson from "@/components/InPerson/InPerson";
import Instructor from "@/components/Instructor/Instructor";
import LearningPlans from "@/components/LearningPlans/LearningPlans";
import ProgramSection from "@/components/ProgramSection/ProgramSection";
import StoriesSection from "@/components/StoriesSection/StoriesSection";
import TransistionSection from "@/components/TransistionSection/TransistionSection";
import YoutubeSection from "@/components/YoutubeSection/YoutubeSection";
import YoutubeVsPpa from "@/components/YoutubeVsPpa/YoutubeVsPpa";

export default function Home() {
  const [isFormHighlighted, setIsFormHighlighted] = useState(false);
  const bannerRef = useRef(null);

  const navigateToBanner = () => {
    setTimeout(() => {
      setIsFormHighlighted(true);
    }, 600);
    setTimeout(() => {
      setIsFormHighlighted(false);
    }, 4600);
    bannerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="ppa-landing-page" ref={bannerRef}>
        <Banner isFormHighlighted={isFormHighlighted} />
      </div>
      <InPerson />
      <CompanyBanner />
      <ProgramSection navigateToBanner={navigateToBanner} />
      <CourseSection />
      <FeatureSection />
      <YoutubeVsPpa />
      <TransistionSection navigateToBanner={navigateToBanner} />
      <LearningPlans />
      <StoriesSection />
      <Instructor />
      <CommunityBanner />
      <YoutubeSection />
      <BlogsSection />
      <Footer />
    </>
  );
}
