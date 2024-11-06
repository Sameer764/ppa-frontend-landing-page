import Banner from "@/components/Banner/Banner";
import CompanyBanner from "@/components/CompanyBanner/CompanyBanner";
import CourseSection from "@/components/CourseSection/CourseSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import InPerson from "@/components/InPerson/InPerson";
import ProgramSection from "@/components/ProgramSection/ProgramSection";

export default function Home() {
  return (
    <>
      <Banner/>
      <InPerson/>
      <CompanyBanner/>
      <ProgramSection/>
      <CourseSection/>
      <FeatureSection/>
    </>
  );
}
