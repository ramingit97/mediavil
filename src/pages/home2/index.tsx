import Layout from "@/components/layout";
import HeroSection from "@/components/hero";
import RadioStationsSection from "@/components/RadioStations";
import MediavilSection from "@/components/MediavilSection";
import PromoSection from "@/components/promoSection";
import CoverageMapSection from "@/components/CovarageMap2";

function Home2() {
  return (
    <>
      <Layout>
        <HeroSection />
        <RadioStationsSection />
        <CoverageMapSection />
        <MediavilSection />
        <PromoSection showWave />
      </Layout>
    </>
  );
}

export default Home2;
