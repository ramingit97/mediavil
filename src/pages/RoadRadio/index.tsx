import RoadLogo from "@/assets/images/road.svg?react";

import EuropePlus from "@/components/europePlus";

import PromoSection from "@/components/promoSection";
import Footer from "@/components/footer";
import MediavilSection from "@/components/MediavilSection";
import AdsSection from "@/components/AdsSection";
import littleImg1 from "@/assets/images/little5.png";
import littleImg2 from "@/assets/images/main4.png";
import littleImg3 from "@/assets/images/little6.png";
import PopularShows from "@/components/popularShows";

function RoadRadio() {
  return (
    <>
      <EuropePlus
        title="Дорожное радио"
        img1={littleImg1}
        img2={littleImg2}
        img3={littleImg3}
        description="добрый 
и надежный попутчик, создающий уютную атмосферу в пути и дома. 
Эфир наполнен душевными песнями, любимыми хитами прошлых лет 
и полезной информацией 
для автомобилистов. 

Это музыка, проверенная временем, которая объединяет поколения и дарит ощущение комфорта в любой точке маршрута. Радиостанция для тех, 
кто ценит искренность, традиции 
и спокойную уверенность за рулем."
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
        logo={RoadLogo}
        colors={{
          pageBg: "#C93E31",
          circleBg: "#F1C74B",
          ringBorder: "#C93E31",
          ringOutline: "#F1C74B",
          buttonText: "#F1C74B",
          playBg: "#C93E31",
          cardShadow: "#f4d877",
          navShadow:"#C93E31"
        }}
      />
      <AdsSection colors={{ pageBg: "#C93E31", btnColor: "#F1C74B" }} />
      <PopularShows />
      <MediavilSection />
      <PromoSection />
      <Footer />
    </>
  );
}

export default RoadRadio;
