import EuropePlus from "@/components/europePlus";
import AdsSection from "@/components/AdsSection";
import MediavilSection from "@/components/MediavilSection";
import PromoSection from "@/components/promoSection";
import Footer from "@/components/footer";
import ruskoeLogo from "@/assets/images/logo-russkoe.png";
import littleImg1 from "@/assets/images/mainLittle1.png";
import littleImg2 from "@/assets/images/main2.png";
import littleImg3 from "@/assets/images/mainLittle2.png";
import PopularShows from "@/components/popularShows";

function RusskoeRadio() {
  return (
    <>
      <EuropePlus
        title="Русское радио"
        img1={littleImg1}
        img2={littleImg2}
        img3={littleImg3}
        description="главная национальная станция, в эфире которой звучат только лучшие отечественные хиты. 

Здесь рождаются звезды и вручается самая престижная музыкальная премия страны — «Золотой Граммофон». 

Это радио с позитивным настроем 
и душевной атмосферой, близкой каждому слушателю вне зависимости от возраста. Идеальный выбор для тех, кто любит родную музыку и верит, 
что «Всё будет хорошо!»."
        frequencies={[
          {
            city: "Находка",
            fm: "105,5 FM",
          },
        ]}
        logo={ruskoeLogo}
        colors={{
          pageBg: "#F10316",
          circleBg: "#3333C9",
          ringBorder: "#F10316",
          ringOutline: "#3333C9",
          buttonText: "#3333C9",
          playBg: "#F10316",
          cardShadow: "#8283da",
          navShadow: "#F10316",
        }}
      />
      <AdsSection
        colors={{ pageBg: "#F10316", btnColor: "#3333C9" }}
        stationName="Русском радио"
      />
      <PopularShows stationName="Русском радио" />
      <MediavilSection />
      <PromoSection />
      <Footer />
    </>
  );
}

export default RusskoeRadio;
