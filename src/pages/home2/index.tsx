import Layout from "@/components/layout";
import HeroSection from "@/components/hero";
import RadioStationsSection from "@/components/RadioStations";
import ReasonsSection from "@/components/reasonsSection";
import PromoSection from "@/components/promoSection";
import CoverageMapSection from "@/components/CovarageMap2";

function Home2() {
  return (
    <>
      <Layout>
        <HeroSection />
        <RadioStationsSection />
        <CoverageMapSection />
        <ReasonsSection variant="dark" accentColor="#09437A" />
        <PromoSection showWave />
      </Layout>
    </>
  );
}

export default Home2;
