import NovoeLogo from "@/assets/images/novoe.svg?react";

import NovoeHero from "@/components/novoeHero";

import PromoSection from "@/components/promoSection";
import Footer from "@/components/footer";
import MediavilSection from "@/components/MediavilSection";
import AdsSection from "@/components/AdsSection";
import PopularShows from "@/components/popularShows";
function NovoeRadio() {
  return (
    <>
      <NovoeHero
        title="Новое радио"
        description=" яркое мультимедийное пространство, где звучат только суперхиты и самые горячие суперновинки. Это выбор молодой и активной аудитории, которая следит за хайпом и хочет получать доступ к лучшим музыкальным премьерам в режиме реального времени"
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
        infoCards={[
          {
            label: "Аудитория",
            lines: ["45% мужчины   55% женщины", "25 — 45 лет"],
          },
          {
            label: "Охват",
            lines: ["~ 70 000 слушателей ежедневно", "только во Владивостоке"],
          },
          {
            label: "Портрет аудитории",
            lines: ["Доход средний +, амбициозная,", "высоко ценящая сервис"],
          },
          {
            label: "Зоны покрытия",
            lines: [
              "Владивосток, Надеждинский",
              "район, Находкинский ГО,",
              "Хабаровск, Южно-Сахалинск",
            ],
          },
          {
            label: "% охвата / AQH / TSL",
            lines: [
              "9.8% — еженедельный охват",
              "110 615 — AQH",
              "1:03 ч — TSL ежедневно",
            ],
          },
        ]}
        highlights={[
          "Победитель национальной\nпремии «Марка №1\nв России 2024»",
          "В эфире —\nтолько суперхиты\nи суперновинки",
          "Второе место\nпо темпу роста\nаудитории в России",
          "ТОП 1\nв утреннем прайме\n(пн-пт 7-11) среди 25-40",
        ]}
        logo={NovoeLogo}
        colors={{
          pageBg: "#555553",
          circleBg: "#D41220",
          ringBorder: "#555553",
          ringOutline: "#D41220",
          buttonText: "#D41220",
          playBg: "#555553",
          navShadow: "#555553",
        }}
      />
      <AdsSection
        colors={{ pageBg: "#555553", btnColor: "#D41220" }}
        stationName="Новом радио"
      />
      <PopularShows stationName="Новом радио" />
      <MediavilSection />
      <PromoSection />
      <Footer />
    </>
  );
}

export default NovoeRadio;
