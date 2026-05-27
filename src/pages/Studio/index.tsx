import studioLogo from "@/assets/images/studio.svg?react";

import EuropePlus from "@/components/europePlus";

import PromoSection from "@/components/promoSection";
import Footer from "@/components/footer";
import MediavilSection from "@/components/MediavilSection";
import AdsSection from "@/components/AdsSection";
import littleImg1 from "@/assets/images/little7.png";
import littleImg2 from "@/assets/images/main5.png";
import littleImg3 from "@/assets/images/little8.png";
import PopularShows from "@/components/popularShows";

function Studio() {
  return (
    <>
      <EuropePlus
        title="Studio 21"
        img1={littleImg1}
        img2={littleImg2}
        img3={littleImg3}
        description="эпицентр хип-хоп культуры и главный проводник в мир прогрессивного звука. В эфире звучат актуальные мировые новинки, качественный российский рэп и эксклюзивные интервью с топовыми артистами.Это радио для тех, кто живет в ритме мегаполиса, ценит стиль и следит за трендами уличной моды. Единственная федеральная станция, формирующая повестку современной музыкальной индустрии."
        frequencies={[
          {
            city: "Хабаровск",
            fm: "107,5 FM",
          },
        ]}
        logo={studioLogo}
        colors={{
          pageBg: "#000",
          circleBg: "#FFFFFF",
          ringBorder: "#000",
          ringOutline: "#FFFFFF",
          buttonText: "#FFFFFF",
          playBg: "#000000",
          cardShadow: "#f1f1f1",
          navShadow: "#000",

          titleColor: "#ffffff",
          descriptionColor: "#000",

          mediaBtnBg: "#000",
          mediaBtnText: "#fffff",
        }}
      />
      <AdsSection
        colors={{ pageBg: "#000", btnColor: "#FFFFFF", consultBtn: "#000" }}
        stationName="Studio 21"
      />
      <PopularShows stationName="Studio 21" />
      <MediavilSection />
      <PromoSection />
      <Footer />
    </>
  );
}

export default Studio;
