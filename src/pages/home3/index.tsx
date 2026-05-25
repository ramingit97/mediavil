import Layout from "@/components/layout";
import HeroSection from "@/components/hero";
import RadioStationsSection from "@/components/RadioStations";
import CoverageMapSection from "@/components/CoverageMap";
import ReasonsSection from "@/components/reasonsSection";
import PromoSection from "@/components/promoSection";
import MediavilSection from "@/components/MediavilSection";

function Home3() {
  return (
    <>
      <Layout>
        <HeroSection />
        <RadioStationsSection />
        <CoverageMapSection />
        <ReasonsSection variant="dark" accentColor="#09437A" />
        <MediavilSection />
        <PromoSection showWave />
      </Layout>
    </>
  );
}

export default Home3;
