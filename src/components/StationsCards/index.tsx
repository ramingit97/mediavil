import Navbar from "@/components/navbar";
import Title from "@/components/title";
import style from "./stationsCards.module.css";

import europaCard from "@/assets/images/ЕвропаCard.png";
import novoeCard from "@/assets/images/новоеCard.png";
import russianCard from "@/assets/images/РусскоеCard.png";
import retroCard from "@/assets/images/ретроCard.png";
import roadCard from "@/assets/images/roadCard.png";
import studioCard from "@/assets/images/studioCard.png";
import MirCard from "@/assets/images/radioMirCard.png";

import studioIcon from "@/assets/images/studio.svg?react";
import RetroIcon from "@/assets/images/retro.svg?react";
import EuropeIcon from "@/assets/images/Европа.svg?react";
import RussiaIcon from "@/assets/images/russkoe.svg?react";
import NovoeIcon from "@/assets/images/novoe.svg?react";
import RoadIcon from "@/assets/images/road.svg?react";
import MirIcon from "@/assets/images/radioMir.svg?react";
import { ROUTER } from "@/constants/router";
import { Link } from "react-router-dom";

function StationsCards() {
  const stations = [
    {
      title: "Европа Плюс",
      logo: EuropeIcon,
      image: europaCard,
      bg: "linear-gradient(65deg, #1957EA, #86a9ff)",
      circle: "#F9474E",
      music: "Только актуальные мировые и российские хиты",
      audience:
        "Главные хиты, энергия страны, звезды, драйв и эксклюзивные премьеры от топовых исполнителей.",
      page: ROUTER.Europe,
    },
    {
      title: "Новое радио",
      logo: NovoeIcon,
      image: novoeCard,
      bg: "linear-gradient(65deg, #505050, #8c8c8c)",
      circle: "#D41220",
      music: "Современная русская поп-музыка и яркий вайб",
      audience:
        "Формат строится на отечественных хитах и актуальной поп-музыке.",
      page: ROUTER.NovoeRadio,
    },
    {
      title: "Русское радио",
      logo: RussiaIcon,
      image: russianCard,
      bg: "linear-gradient(65deg, #F10316, #ff7a7a)",
      circle: "#3233c8",
      music: "Исключительно русскоязычная поп-музыка всех жанров",
      audience: "Всё будет хорошо: главная площадка для отечественных звезд.",
      page: ROUTER.RuskoeRadio,
    },
    {
      title: "Ретро FM",
      logo: RetroIcon,
      image: retroCard,
      bg: "linear-gradient(65deg, #8500AC, #d46cff)",
      circle: "#e20e79",
      music: "Золотые хиты 70-х, 80-х и 90-х",
      audience:
        "Музыкальная машина времени, радиостанция для людей с хорошим вкусом.",
      page: ROUTER.Retro,
    },
    {
      title: "Дорожное Радио",
      logo: RoadIcon,
      image: roadCard,
      bg: "linear-gradient(65deg, #C93E31, #e5a095)",
      circle: "#f0c74c",
      music: "Поп-музыка, шансон, городской романс",
      audience: "Музыка в дороге, душевные и спокойные композиции.",
      page: ROUTER.RoadRadio,
    },
    {
      title: "Studio 21",
      logo: studioIcon,
      image: studioCard,
      bg: "linear-gradient(65deg, #111, #2a2a2a)",
      circle: "#ffffff",
      music: "Хип-хоп, рэп, R&B, грайм и трэп",
      audience: "Территория лайфстайла и прогрессивной уличной культуры.",
      page: ROUTER.Studio,
    },
    {
      title: "Радио Мир",
      logo: MirIcon,
      image: MirCard,
      bg: "linear-gradient(65deg, #B2D237, #b6e328)",
      circle: "#1383C6",
      music: "Русскоязычная поп-музыка 90-х и 00-х",
      audience: "Радио для всей семьи. Спокойная атмосфера и знакомые хиты.",
      page: ROUTER.RadioMir,
    },
  ];

  return (
    <section className={style.section}>
      <Navbar variant="gray" />
      <Title
        variant1="Наши радиостанции"
        variant2="От актуальных мировых хитов до душевного ретро — вещаем на частотах, которые выбирают миллионы слушателей каждый день"
      />
      <div className={style.list}>
        {stations.map((station, index) => {
          const Logo = station.logo;

          return (
            <article
              className={style.card}
              style={{ background: station.bg }}
              key={index}
            >
              <div
                className={style.circle}
                style={{ background: station.circle }}
              ></div>

              <div className={style.imageBox}>
                <img src={station.image} alt={station.title} />
              </div>

              <div className={style.content}>
                <Logo className={style.logo} />

                <h2>{station.title}</h2>

                <div className={style.info}>
                  <small>Музыка</small>
                  <p>{station.music}</p>
                </div>

                <div className={style.info}>
                  <small>Концепция</small>
                  <p>{station.audience}</p>
                </div>

                <Link className={style.button} to={station.page}>● подробнее</Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default StationsCards;
