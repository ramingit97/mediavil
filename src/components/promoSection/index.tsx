import { Col, Row } from "antd";
import style from "./promoSection.module.css";
import vector from "@/assets/images/dashedVector.svg";
import img1 from "@/assets/images/Rectangle252.png";
import img2 from "@/assets/images/Rectangle268.png";
import img3 from "@/assets/images/Rectangle269.png";
import img4 from "@/assets/images/Rectangle270.png";

function PromoSection({ showWave = false }) {
  const cards = [
    {
      size: "large",
      image: img1,
      badge: "более 350 000 слушателей прямо сейчас",
      title: "Разместите свою рекламу на топовых радиостанциях России",
      buttonText: "Получите медиакит",
    },
    {
      image: img2,
      badge: "голос вашего бизнеса",
      title: "Создание аудиороликов для вашего бизнеса",
      buttonText: "Узнайте подробнее",
    },
    {
      image: img3,
      badge: "узнайте свою целевую аудиторию",
      title: "“Базовый” маркетинг вашего продукта",
      buttonText: "Узнайте подробнее",
    },
    {
      image: img4,
      badge: "web-разработка любой сложности",
      title: "Разработка сайтов и мобильных приложений",
      buttonText: "Узнайте подробнее",
    },
  ];

  return (
    <section className={`${style.section} ${showWave ? style.withWave : ""}`}>
      {showWave && <img src={vector} alt="" className={style.waveTop} />}

      <div className={style.wrapper}>
        <Row gutter={[20, 20]}>
          {cards.map((card, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={24}
              lg={card.size === "large" ? 24 : 8}
            >
              <div
                className={`${style.card} ${card.size === "large" ? style.large : ""}`}
              >
                <img src={card.image} alt={card.title} />

                <div className={style.overlay}></div>

                <div className={style.content}>
                  <span className={style.badge}>{card.badge}</span>
                  <h3>{card.title}</h3>
                  <button>{card.buttonText}</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default PromoSection;
