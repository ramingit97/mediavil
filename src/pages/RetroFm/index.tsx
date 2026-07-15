import RetroLogo from "@/assets/images/logo-retro.png";

import EuropePlus from "@/components/europePlus";

import PromoSection from "@/components/promoSection";
import Footer from "@/components/footer";
import MediavilSection from "@/components/MediavilSection";
import AdsSection from "@/components/AdsSection";
import littleImg1 from "@/assets/images/little1.png";
import littleImg2 from "@/assets/images/main.png";
import littleImg3 from "@/assets/images/little2.png";
import PopularShows from "@/components/popularShows";

function RetroFm() {
  return (
    <>
      {" "}
      <EuropePlus
        title="Ретро FM"
        img1={littleImg1}
        img2={littleImg2}
        img3={littleImg3}
        description=" музыкальная машина времени, объединяющая золотые хиты 70-х, 80-х и 90-х годов. В эфире звучат самые любимые песни отечественной и зарубежной эстрады, пробуждающие лучшие воспоминания. Это станция праздника и ностальгии, создающая яркое настроение 
для слушателей всех поколений. Радио для тех, кто ценит проверенную временем классику и всегда остается на позитивной волне.."
        frequencies={[
          {
            city: "Владивосток",
            fm: "103,7 FM",
          },
        ]}
        logo={RetroLogo}
        colors={{
          pageBg: "#8500AC",
          circleBg: "#E10F78",
          ringBorder: "#8500AC",
          ringOutline: "#E10F78",
          buttonText: "#E10F78",
          playBg: "#8500AC",
          cardShadow: "#ea6faa",
          navShadow: "#8500AC",
        }}
      />
      <AdsSection
        colors={{ pageBg: "#8500AC", btnColor: "#8500AC" }}
        stationName="Ретро FM"
      />
      <PopularShows stationName="Ретро FM" />
      <MediavilSection />
      <PromoSection />
      <Footer />
    </>
  );
}

export default RetroFm;
