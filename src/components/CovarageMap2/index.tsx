import { useState } from "react";
import style from "./coverageMap2.module.css";
import CoverageDashedWaveIcon from "@/assets/icons/CoverageDashedWaveIcon";
import WaveSectionIcon from "@/assets/icons/WaveSectionIcon";

import mapImg from "@/assets/images/map.png";

import vladivostok from "@/assets/images/vlodivostok.svg";
import ussuriysk from "@/assets/images/ussuriysk.svg";
import arsenyev from "@/assets/images/arsenyev.svg";
import partizansk from "@/assets/images/partizansk.svg";
import nahodka from "@/assets/images/nahodka.svg";
import habarovsk from "@/assets/images/habarovsk.svg";

import studioIcon from "@/assets/images/Студио.png";
import RetroIcon from "@/assets/images/Ретрo.png";
import EuropeIcon from "@/assets/images/europe.svg";
import RussiaIcon from "@/assets/images/Русское.png";
import NovoeIcon from "@/assets/images/Новое.png";
import RoadIcon from "@/assets/images/Дорожное.png";

function CoverageMapSection() {
  const [activeTab, setActiveTab] = useState("stations");

  const cities = [
    {
      icon: vladivostok,
      city: "Владивосток",
      items: [
        "Новое радио 87.8 FM",
        "Дорожное радио 107.7 FM",
        "Ретро FM 103.7 FM",
      ],
    },
    {
      icon: ussuriysk,
      city: "Уссурийск",
      items: ["Европа Плюс 100.7 FM"],
    },
    {
      icon: arsenyev,
      city: "Арсеньев",
      items: ["Европа Плюс 98.9 FM"],
    },
    {
      icon: partizansk,
      city: "Партизанск",
      items: ["Новое радио 103.9 FM"],
    },
    {
      icon: nahodka,
      city: "Находка",
      items: [
        "Новое радио 103.9 FM",
        "Дорожное радио 107.9 FM",
        "Русское радио 105.5 FM",
      ],
    },
    {
      icon: habarovsk,
      city: "Хабаровск",
      items: [
        "Новое радио 106.8 FM",
        "Дорожное радио 104.3 FM",
        "Studio 21 107.5 FM",
      ],
    },
  ];

  const stations = [
    {
      icon: EuropeIcon,
      title: "Европа Плюс",
      items: ["Уссурийск — 100.7 FM", "Арсеньев — 98.9 FM"],
    },
    {
      icon: NovoeIcon,
      title: "Новое радио",
      items: [
        "Владивосток — 87.8 FM",
        "Партизанск — 103.9 FM",
        "Находка — 103.9 FM",
        "Хабаровск — 106.8 FM",
      ],
    },
    {
      icon: RoadIcon,
      title: "Дорожное радио",
      items: [
        "Владивосток — 107.7 FM",
        "Находка — 107.9 FM",
        "Хабаровск — 104.3 FM",
      ],
    },
    {
      icon: RussiaIcon,
      title: "Русское радио",
      items: ["Находка — 105.5 FM"],
    },
    {
      icon: RetroIcon,
      title: "Ретро FM",
      items: ["Владивосток — 103.7 FM"],
    },
    {
      icon: studioIcon,
      title: "Studio 21",
      items: ["Хабаровск — 107.5 FM"],
    },
  ];

  const data = activeTab === "cities" ? cities : stations;

  return (
    <section className={style.section}>
      <h2>Карта покрытия</h2>

      <div className={style.content}>
        <div className={style.mapBox}>
          <img src={mapImg} alt="Карта покрытия" />
        </div>

        <div className={style.right}>
          <div className={style.tabs}>
            <button
              className={activeTab === "cities" ? style.active : ""}
              onClick={() => setActiveTab("cities")}
            >
              ☀ По городам
            </button>

            <button
              className={activeTab === "stations" ? style.active : ""}
              onClick={() => setActiveTab("stations")}
            >
              🔊 По радиостанциям
            </button>
          </div>

          <div className={style.cards}>
            {data.map((item, index) => (
              <div className={style.card} key={index}>
                {item.icon ? (
                  <img src={item.icon} alt="" className={style.icon} />
                ) : (
                  <div className={style.iconPlaceholder}></div>
                )}

                <h3>
                  {activeTab === "cities"
                    ? (item as (typeof cities)[0]).city
                    : (item as (typeof stations)[0]).title}
                </h3>

                <ul>
                  {item.items.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.wave_box}>
        <WaveSectionIcon className={style.waveSvg} fill="#ffffff" />
        <CoverageDashedWaveIcon className={style.dashed_svg} />
      </div>
    </section>
  );
}

export default CoverageMapSection;
