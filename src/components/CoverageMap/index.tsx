import { useState } from "react";
import { Col, Row } from "antd";
import style from "./coverageMap.module.css";
import vladivostok from "@/assets/images/vlodivostok.svg";
import ussuriysk from "@/assets/images/ussuriysk.svg";
import arsenyev from "@/assets/images/arsenyev.svg";
import partizansk from "@/assets/images/partizansk.svg";
import nahodka from "@/assets/images/nahodka.svg";
import habarovsk from "@/assets/images/habarovsk.svg";

import novoe from "@/assets/images/logo-novoe.png";
import studio from "@/assets/images/logo-studio.png";
import road from "@/assets/images/logo-road.png";
import retro from "@/assets/images/logo-retro.png";
import russian from "@/assets/images/logo-russkoe.png";
import europe from "@/assets/images/logo-europa.png";
import WaveSectionIcon from "@/assets/icons/WaveSectionIcon";
import CoverageDashedWaveIcon from "@/assets/icons/CoverageDashedWaveIcon";

function CoverageMapSection() {
  const [activeTab, setActiveTab] = useState<"cities" | "radios">("cities");
  const cities = [
    {
      icon: vladivostok,
      name: "Владивосток",
      stations: [
        "Новое радио 87.8 FM",
        "Дорожное радио 107.7 FM",
        "Ретро FM 103.7 FM",
      ],
    },
    {
      icon: ussuriysk,
      name: "Уссурийск",
      stations: ["Европа Плюс 100.7 FM"],
    },
    {
      icon: arsenyev,
      name: "Арсеньев",
      stations: ["Европа Плюс 98.9 FM"],
    },
    {
      icon: partizansk,
      name: "Партизанск",
      stations: ["Новое радио 103.9 FM"],
    },
    {
      icon: nahodka,
      name: "Находка",
      stations: [
        "Новое радио 103.9 FM",
        "Дорожное радио 107.9 FM",
        "Русское радио 105.5 FM",
      ],
    },
    {
      icon: habarovsk,
      name: "Хабаровск",
      stations: [
        "Новое радио 106.8 FM",
        "Дорожное радио 104.3 FM",
        "Studio 21 107.5 FM",
      ],
    },
  ];

  const radios = [
    {
      logo: novoe,
      name: "Новое радио",
      stations: [
        "Владивосток 87.8 FM",
        "Находка 103.9 FM",
        "Партизанск 103.9 FM",
        "Хабаровск 106.8 FM",
      ],
    },
    {
      logo: studio,
      name: "Studio 21",
      stations: ["Хабаровск 107.5 FM"],
    },
    {
      logo: road,
      name: "Дорожное радио",
      stations: [
        "Владивосток 107.7 FM",
        "Находка 107.9 FM",
        "Хабаровск 104.3 FM",
      ],
    },
    {
      logo: retro,
      name: "Ретро FM",
      stations: ["Владивосток 103.7 FM"],
    },
    {
      logo: russian,
      name: "Русское радио",
      stations: ["Находка 105.5 FM"],
    },
    {
      logo: europe,
      name: "Европа Плюс",
      stations: ["Находка 102.4 FM", "Уссурийск 100.7 FM", "Арсеньев 98.9 FM"],
    },
  ];

  return (
    <section className={style.section}>
      <h2>Карта покрытия</h2>

      <div className={style.tabs}>
        <button
          className={activeTab === "cities" ? style.active : style.inactive}
          onClick={() => setActiveTab("cities")}
        >
          По городам
        </button>
        <button
          className={activeTab === "radios" ? style.active : style.inactive}
          onClick={() => setActiveTab("radios")}
        >
          По радиостанциям
        </button>
      </div>

      {activeTab === "cities" ? (
        <div className={style.row}>
          <Row gutter={[34, 34]}>
            {cities.map((city, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={4}>
                <div className={style.item}>
                  <img
                    src={city.icon}
                    alt={city.name}
                    className={style.cityIcon}
                  />
                  <h3>{city.name}</h3>
                  {city.stations.map((station, i) => (
                    <p key={i}>{station}</p>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <div className={style.row}>
          <Row gutter={[34, 34]}>
            {radios.map((radio, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={4}>
                <div className={style.item}>
                  <img
                    src={radio.logo}
                    alt={radio.name}
                    className={style.logo}
                  />
                  <h3>{radio.name}</h3>
                  {radio.stations.map((station, i) => (
                    <p key={i}>{station}</p>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* <img src={redVector} alt="" className={style.waveBottom} />
      <div className={style.bottomWave}></div> */}
      <div className={style.wave_box}>
        <WaveSectionIcon className={style.waveSvg} fill="#ffffff" />
        <CoverageDashedWaveIcon className={style.dashed_svg} />
      </div>
    </section>
  );
}

export default CoverageMapSection;
