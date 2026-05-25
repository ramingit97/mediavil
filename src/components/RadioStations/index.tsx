import { Col, Row } from "antd";
import style from "./radioStations.module.css";

import vector from "@/assets/images/dashedVector.svg";
import europaCard from "@/assets/images/ЕвропаCard.png";
import novoeCard from "@/assets/images/новоеCard.png";
import russianCard from "@/assets/images/РусскоеCard.png";
import retroCard from "@/assets/images/ретроCard.png";
import roadCard from "@/assets/images/roadCard.png";
import studioCard from "@/assets/images/studioCard.png";
import mirCard from "@/assets/images/radioMirCard.png";

import studioIcon from "@/assets/images/studio.svg?react";
import mirIcon from "@/assets/images/radioMir.svg?react";
import RetroIcon from "@/assets/images/retro.svg?react";
import EuropeIcon from "@/assets/images/Европа.svg?react";
import RussiaIcon from "@/assets/images/russkoe.svg?react";
import NovoeIcon from "@/assets/images/novoe.svg?react";
import RoadIcon from "@/assets/images/road.svg?react";
import { ROUTER } from "@/constants/router";
import { Link } from "react-router-dom";

function RadioStationsSection() {
  const tabs = [
    "Размещение рекламы на радио",
    "Создание аудиорекламы",
    "Разработка стратегии",
    "Поддержка",
  ];

  const stations = [
    {
      image: europaCard,
      logo: EuropeIcon,
      logoColor: "white",
      title: "Europa Plus",
      description:
        "Топ 40, EDM, Pop. Только актуальные мировые и российские хиты",
      bg: "linear-gradient(65deg, #0057ff, #76a7ff)",
      buttonColor: "#2f63ff",
      circleColor: "#F9474E",
      path: ROUTER.Europe,
    },
    {
      image: novoeCard,
      logo: NovoeIcon,
      logoColor: "white",
      title: "Новое радио",
      description: "Современная русская поп-музыка и яркий вайб",
      bg: "linear-gradient(65deg, #5d5d5d, #2f2f2f)",
      buttonColor: "#4a4a4a",
      circleColor: "#D41220",
      path: ROUTER.NovoeRadio,
    },
    {
      image: russianCard,
      logo: RussiaIcon,
      logoColor: "white",
      title: "Русское радио",
      description: "Исключительно русскоязычная поп-музыка всех жанров",
      bg: "linear-gradient(65deg, #ff004c, #ff6868)",
      buttonColor: "#ff004c",
      circleColor: "#3233c8",
      path: ROUTER.RuskoeRadio,
    },
    {
      image: retroCard,
      logo: RetroIcon,
      logoColor: "white",
      title: "Ретро FM",
      description: "Золотые хиты 70-х, 80-х и 90-х",
      bg: "linear-gradient(65deg, #7800d6, #d15cff)",
      buttonColor: "#9b00ff",
      circleColor: "#e20e79",
      path: ROUTER.Retro,
    },
    {
      image: roadCard,
      logo: RoadIcon,
      logoColor: "white",
      title: "Дорожное радио",
      description: "Поп-музыка, шансон, городской романс",
      bg: "linear-gradient(65deg, #d84b2f, #e39b8d)",
      buttonColor: "#d84b2f",
      circleColor: "#F1C74B",
      path: ROUTER.RoadRadio,
    },
    {
      image: studioCard,
      logo: studioIcon,
      logoColor: "white",
      title: "Studio 21",
      description: "Хип-хоп, рэп, R&B, грайм и трэп",
      bg: "linear-gradient(65deg, #1e1e1e, #3a3a3a)",
      buttonColor: "#1f1f1f",
      circleColor: "#ffffff",
      path: ROUTER.Studio,
    },
    {
      image: mirCard,
      logo: mirIcon,
      logoColor: "white",
      title: "Radio Mir",
      description:
        "Русскоязычная поп-музыка 90-х, 00-х и самые качественные хиты сегодняшнего дня",
      bg: "linear-gradient(65deg, #B2D237,#d4e691)",
      buttonColor: "#C7DE6D",
      circleColor: "#1383C6",
      path: ROUTER.RadioMir,
    },
  ];

  return (
    <section className={style.section}>
      <img src={vector} alt="" className={style.waveTop} />
      <h2>Наши радиостанции</h2>

      <div className={style.tabs}>
        {tabs.map((tab, index) => (
          <button key={index} className={style.tab}>
            {tab}
          </button>
        ))}
      </div>
      <div className={style.grid}>
        <Row gutter={[24, 24]}>
          {stations.map((station, index) => {
            const StationLogo = station.logo;
            return (
              <Col key={index} xs={24} sm={24} md={24} lg={12}>
                <div className={style.card} style={{ background: station.bg }}>
                  <div
                    className={style.circle}
                    style={{ background: station.circleColor }}
                  ></div>

                  <img
                    src={station.image}
                    alt={station.title}
                    className={style.people}
                  />

                  <div className={style.info}>
                    <StationLogo
                      className={style.stationLogo}
                      style={{ color: station.logoColor }}
                    />

                    <p>{station.description}</p>

                    <Link
                      to={station.path}
                      style={{ color: station.buttonColor }}
                      className={style.moreBtn}
                    >
                      ● подробнее
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default RadioStationsSection;
