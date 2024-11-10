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
  return (
    <>
      <Banner/>
      <InPerson/>
      <CompanyBanner/>
      <ProgramSection/>
      <CourseSection/>
      <FeatureSection/>
      <YoutubeVsPpa/>
      <TransistionSection/>
      <LearningPlans/>
      <StoriesSection/>
      <Instructor/>
      <CommunityBanner/>
      <YoutubeSection/>
      <BlogsSection/>
      <Footer/>
    </>
  );
}
