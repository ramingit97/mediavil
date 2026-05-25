import NovoeLogo from "@/assets/images/novoe.svg?react";

import EuropePlus from "@/components/europePlus";

import PromoSection from "@/components/promoSection";
import Footer from "@/components/footer";
import MediavilSection from "@/components/MediavilSection";
import AdsSection from "@/components/AdsSection";
import littleImg1 from "@/assets/images/little3.png";
import littleImg2 from "@/assets/images/main3.png";
import littleImg3 from "@/assets/images/little4.png";
import PopularShows from "@/components/popularShows";
function NovoeRadio() {
  return (
    <>
      <EuropePlus
        title="Новое радио"
        img1={littleImg1}
        img2={littleImg2}
        img3={littleImg3}
        description=" яркое мультимедийное пространство, 
где звучат только суперхиты и самые горячие суперновинки. 

Это выбор молодой и активной аудитории, которая следит за хайпом 
и хочет получать доступ к лучшим музыкальным премьерам в режиме реального времени"
        frequencies={[
          {
            city: "Владивосток ",
            fm: "87,8 FM",
          },
          {
            city: "Находка / Партизанск",
            fm: "103,9 FM",
          },
          {
            city: "Хабаровск",
            fm: "106,8 FM",
          },
        ]}
        logo={NovoeLogo}
        colors={{
          pageBg: "#555553",
          circleBg: "#D41220",
          ringBorder: "#555553",
          ringOutline: "#D41220",
          buttonText: "#D41220",
          playBg: "#555553",
          cardShadow: "#e76f74",
          navShadow: "#555553",
        }}
      />
      <AdsSection colors={{ pageBg: "#555553", btnColor: "#D41220" }} />
      <PopularShows />
      <MediavilSection />
      <PromoSection />
      <Footer />
    </>
  );
}

export default NovoeRadio;
