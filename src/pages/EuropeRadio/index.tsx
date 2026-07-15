import EuropeLogo from "@/assets/images/Европа.svg?react";
import Footer from "@/components/footer";
import PromoSection from "@/components/promoSection";
import MediavilSection from "@/components/MediavilSection";
import littleImg1 from "@/assets/images/Rectangle242.png";
import littleImg2 from "@/assets/images/Rectangle241.png";
import littleImg3 from "@/assets/images/Rectangle243.png";
import EuropePlus from "@/components/europePlus";
import AdsSection from "@/components/AdsSection";
import PopularShows from "@/components/popularShows";
function EuropeRadio() {
  return (
    <>
      <EuropePlus
        title="Европа Плюс"
        img1={littleImg1}
        img2={littleImg2}
        img3={littleImg3}
        description="радиостанция №1 в России, задающая тренды и транслирующая только главные мировые хиты."
        frequencies={[
          {
            city: "Находка",
            fm: "102,4 FM",
          },
          {
            city: "Уссурийск",
            fm: "100,7 FM",
          },
          {
            city: "Арсеньев",
            fm: "98,9 FM",
          },
        ]}
        logo={EuropeLogo}
        colors={{
          pageBg: "#ff4651",
          circleBg: "#1f5bea",
          ringBorder: "#ff4651",
          buttonText: "#1f5bea",
          ringOutline: "#1f5bea",
          playBg: "#ff4651",
          cardShadow: "#7398f2",
          navShadow: "#ff4651",
          logoColor: "white",
        }}
      />
      <AdsSection
        colors={{ pageBg: "#ff4651", btnColor: "#1f5bea" }}
        stationName="Европа Плюс"
      />
      <PopularShows stationName="Европа Плюс" />
      <MediavilSection />
      <PromoSection />
      <Footer />
    </>
  );
}

export default EuropeRadio;
