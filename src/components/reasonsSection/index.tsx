import { Col, Row } from "antd";
import style from "./reasons.module.css";

function ReasonsSection({ variant = "light", accentColor = "#0f4d82" }) {
  const reasons = [
    {
      title: "Огромный охват аудитории",
      text: "Мы размещаем вашу рекламу на радиостанциях, которые люди слушают каждый день по дороге на работу, в машине и дома. Это стабильный контакт с широкой аудиторией.",
    },

    {
      title: "Популярные радиостанции",
      text: "Мы работаем с радиостанциями, входящими в топ по аудитории в России: Европа Плюс, Русское Радио, Дорожное Радио, Ретро FM и Новое Радио.",
      highlight:
        "Европа Плюс, Русское Радио, Дорожное Радио, Ретро FM и Новое Радио.",
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
  const isDark = variant === "dark";
  return (
    <section
      className={`${style.section} ${isDark ? style.dark : ""}`}
      style={
        {
          ["--accent-color"]: accentColor,
        } as React.CSSProperties
      }
    >
      <div className={style.wrapper}>
        <h2>5 причин обратиться в Mediavil</h2>

        <Row gutter={[32, 32]} justify="center" className={style.grid}>
          {reasons.map((reason, index) => (
            <Col key={index} xs={24} md={reason.wide ? 16 : 8}>
              <div className={style.card}>
                <h3>{reason.title}</h3>

                <p>
                  {reason.text}

                  {reason.highlight && (
                    <span className={style.highlight}> {reason.highlight}</span>
                  )}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default ReasonsSection;
