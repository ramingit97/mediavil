// import React, { useState } from "react";
import CoverageMapSection from "@/components/CoverageMap";
import HeroSection from "@/components/hero";
import Layout from "@/components/layout";
import PromoSection from "@/components/promoSection";
import RadioStationsSection from "@/components/RadioStations";
import ReasonsSection from "@/components/reasonsSection";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <RadioStationsSection />
      <CoverageMapSection />
      <ReasonsSection />
      <PromoSection showWave />
    </Layout>
  );
}

export default HomePage;
