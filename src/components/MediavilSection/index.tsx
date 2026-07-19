import type { ReactNode } from "react";
import { Col, Row } from "antd";
import style from "./mediavilSection.module.css";
import mic from "@/assets/images/michrophone.png";

function MediavilSection() {
  const reasons: { title: string; text: ReactNode; wide?: boolean }[] = [
    {
      title: "Огромный охват аудитории",
      text: "Мы размещаем вашу рекламу на радиостанциях, которые люди слушают каждый день по дороге на работу, в машине и дома.",
    },
    {
      title: "Популярные радиостанции",
      text: (
        <>
          Мы работаем с радиостанциями, входящими в топ по аудитории в России:{" "}
          <span>Европа Плюс</span>, <span>Русское Радио</span>,{" "}
          <span>Дорожное Радио</span>, <span>Ретро FM</span>,{" "}
          <span>Новое Радио</span> и <span>Studio 21</span>.
        </>
      ),
    },
    {
      title: "Разные станции — разные аудитории",
      text: "Мы подбираем станции так, чтобы вашу рекламу услышали именно те люди, которым она будет интересна.",
    },
    {
      title: "Радио — медиа с высоким вниманием",
      text: "Радио сопровождает людей в повседневной жизни — в дороге, на работе, дома. Ваша реклама звучит в момент, когда слушатель действительно ее слышит.",
      wide: true,
    },
    {
      title: "Гибкие рекламные форматы",
      text: "Мы подберем формат рекламы, который лучше всего расскажет о вашем продукте и запомнится слушателям.",
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <img src={mic} alt="" className={style.mic} />

        <h2>5 причин обратиться в Mediavil</h2>

        <p className={style.subtitle}>
          Мы не просто продаем эфирное время, а создаем работающие
          <br />
          рекламные инструменты. И вот почему нам доверяют лидеры рынка
        </p>

        <Row gutter={[30, 30]} justify="center" className={style.cards}>
          {reasons.map((item, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={item.wide ? 24 : 12}
              lg={item.wide ? 16 : 8}
            >
              <div className={style.card}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default MediavilSection;
