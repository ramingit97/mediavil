import { useState } from "react";
import style from "./coverageMap2.module.css";
import CoverageDashedWaveIcon from "@/assets/icons/CoverageDashedWaveIcon";
import WaveSectionIcon from "@/assets/icons/WaveSectionIcon";
import SunIcon from "@/assets/icons/SunIcon";
import AudioIcon from "@/assets/icons/audio.svg?react";

import mapImg from "@/assets/images/map-wide.png";

import vladivostok from "@/assets/images/vlodivostok.svg";
import ussuriysk from "@/assets/images/ussuriysk.svg";
import arsenyev from "@/assets/images/arsenyev.svg";
import partizansk from "@/assets/images/partizansk.svg";
import nahodka from "@/assets/images/nahodka.svg";
import habarovsk from "@/assets/images/habarovsk.svg";
import yuzhno from "@/assets/images/yuzhno-sahalinsk.png";

import studioIcon from "@/assets/images/logo-studio.png";
import RetroIcon from "@/assets/images/logo-retro.png";
import EuropeIcon from "@/assets/images/logo-europa.png";
import RussiaIcon from "@/assets/images/logo-russkoe.png";
import NovoeIcon from "@/assets/images/logo-novoe.png";
import RoadIcon from "@/assets/images/logo-road.png";

type Entry = {
  icon: string;
  title: string;
  items: { name: string; freq: string }[];
};

/* Red city markers, in % of the map image (1584x1084). */
const dots = [
  { left: 36.0, top: 6.4 }, // Хабаровск
  { left: 91.8, top: 31.5 }, // Южно-Сахалинск
  { left: 23.5, top: 74.5 }, // Арсеньев
  { left: 13.3, top: 79.5 }, // Уссурийск
  { left: 20.5, top: 87.0 }, // Партизанск
  { left: 12.4, top: 89.6 }, // Владивосток
  { left: 19.5, top: 94.0 }, // Находка
];

function CoverageMapSection() {
  const [activeTab, setActiveTab] = useState("stations");

  /* Order matters: the grid renders row 1 = items 0-2 (columns 2-4),
     row 2 = items 3-6 (columns 1-4), matching the Figma layout. */
  const cities: Entry[] = [
    {
      icon: vladivostok,
      title: "Владивосток",
      items: [
        { name: "Новое радио", freq: "87.8 FM" },
        { name: "Дорожное радио", freq: "107.7 FM" },
        { name: "Ретро FM", freq: "103.7 FM" },
      ],
    },
    {
      icon: ussuriysk,
      title: "Уссурийск",
      items: [{ name: "Европа Плюс", freq: "100.7 FM" }],
    },
    {
      icon: arsenyev,
      title: "Арсеньев",
      items: [{ name: "Европа Плюс", freq: "98.9 FM" }],
    },
    {
      icon: yuzhno,
      title: "Южно-\nСахалинск",
      items: [{ name: "Новое радио", freq: "103.9 FM" }],
    },
    {
      icon: partizansk,
      title: "Партизанск",
      items: [{ name: "Новое радио", freq: "103.9 FM" }],
    },
    {
      icon: nahodka,
      title: "Находка",
      items: [
        { name: "Европа Плюс", freq: "102.4 FM" },
        { name: "Новое радио", freq: "103.9 FM" },
        { name: "Дорожное радио", freq: "107.9 FM" },
        { name: "Русское радио", freq: "105.5 FM" },
      ],
    },
    {
      icon: habarovsk,
      title: "Хабаровск",
      items: [
        { name: "Новое радио", freq: "106.8 FM" },
        { name: "Дорожное радио", freq: "104.3 FM" },
        { name: "Studio 21", freq: "107.5 FM" },
      ],
    },
  ];

  const stations: Entry[] = [
    {
      icon: EuropeIcon,
      title: "Европа Плюс",
      items: [
        { name: "Уссурийск", freq: "100.7 FM" },
        { name: "Арсеньев", freq: "98.9 FM" },
      ],
    },
    {
      icon: NovoeIcon,
      title: "Новое радио",
      items: [
        { name: "Владивосток", freq: "87.8 FM" },
        { name: "Партизанск", freq: "103.9 FM" },
        { name: "Находка", freq: "103.9 FM" },
        { name: "Хабаровск", freq: "106.8 FM" },
      ],
    },
    {
      icon: RoadIcon,
      title: "Дорожное радио",
      items: [
        { name: "Владивосток", freq: "107.7 FM" },
        { name: "Находка", freq: "107.9 FM" },
        { name: "Хабаровск", freq: "104.3 FM" },
      ],
    },
    {
      icon: RussiaIcon,
      title: "Русское радио",
      items: [{ name: "Находка", freq: "105.5 FM" }],
    },
    {
      icon: RetroIcon,
      title: "Ретро FM",
      items: [{ name: "Владивосток", freq: "103.7 FM" }],
    },
    {
      icon: studioIcon,
      title: "Studio 21",
      items: [{ name: "Хабаровск", freq: "107.5 FM" }],
    },
  ];

  const data = activeTab === "cities" ? cities : stations;

  return (
    <section className={style.section}>
      <div className={style.mapBg} aria-hidden="true">
        <img src={mapImg} alt="" />
        {dots.map((d, i) => (
          <span
            key={i}
            className={style.dot}
            style={{ left: `${d.left}%`, top: `${d.top}%` }}
          />
        ))}
      </div>

      <div className={style.head}>
        <h2>Карта покрытия</h2>

        <p className={style.subtitle}>
          Максимальный охват вашей рекламы от Владивостока до Хабаровска.{" "}
          <br />
          Ваша информация прозвучит везде, где есть дорога и радиоприемник
        </p>

        <div className={style.tabs}>
          <button
            className={activeTab === "cities" ? style.active : ""}
            onClick={() => setActiveTab("cities")}
          >
            <SunIcon className={style.tabIcon} />
            По городам
          </button>

          <button
            className={activeTab === "stations" ? style.active : ""}
            onClick={() => setActiveTab("stations")}
          >
            <AudioIcon className={style.tabIcon} />
            По радиостанциям
          </button>
        </div>
      </div>

      <div
        className={`${style.cards} ${
          activeTab === "stations" ? style.stationsGrid : ""
        }`}
      >
        {data.map((item, index) => (
          <div
            className={`${style.card} ${
              item.title.startsWith("Южно") ? style.yuzhno : ""
            }`}
            key={index}
          >
            <img src={item.icon} alt="" className={style.icon} />

            <h3>{item.title}</h3>

            <ul>
              {item.items.map((row, i) => (
                <li key={i}>
                  <b>{row.name}</b>
                  <span>{row.freq}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={style.wave_box}>
        <WaveSectionIcon className={style.waveSvg} fill="#f9f9f9" />
        <CoverageDashedWaveIcon className={style.dashed_svg} />
      </div>
    </section>
  );
}

export default CoverageMapSection;
