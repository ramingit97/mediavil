import MirLogo from "@/assets/images/logo-mir.png";

import EuropePlus from "@/components/europePlus";

import PromoSection from "@/components/promoSection";
import Footer from "@/components/footer";
import MediavilSection from "@/components/MediavilSection";
import AdsSection from "@/components/AdsSection";
import littleImg1 from "@/assets/images/little9.png";
import littleImg2 from "@/assets/images/main6.png";
import littleImg3 from "@/assets/images/little10.png";
import PopularShows from "@/components/popularShows";
function RadioMir() {
  return (
    <>
      <EuropePlus
        title="Радио Мир"
        img1={littleImg1}
        img2={littleImg2}
        img3={littleImg3}
        description="уникальная информационно-музыкальная радиостанция, создающая атмосферу комфортного пространства. 

Основа музыкальной базы – современные и популярные русскоязычные хиты последних 10-15 лет. 

Предпочтение отдается позитивным песням, приятным на слух, качественным, известным, созданным признанными авторами и композиторами."
        frequencies={[
          {
            city: "Хабаровск",
            fm: "102,3 FM",
          },
        ]}
        logo={MirLogo}
        colors={{
          pageBg: "#B2D237",
          circleBg: "#1383C6",
          ringBorder: "#B2D237",
          ringOutline: "#1383C6",
          buttonText: "#1383C6",
          playBg: "#B2D237",
          cardShadow: "#6fb2d9",
          navShadow: "#B2D237",
        }}
      />
      <AdsSection
        colors={{ pageBg: "#B2D237", btnColor: "#1383C6" }}
        stationName="Радио Мир"
      />
      <PopularShows stationName="Радио Мир" />
      <MediavilSection />
      <PromoSection />
      <Footer />
    </>
  );
}

export default RadioMir;
