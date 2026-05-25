import React from "react";

import style from "./europePlus.module.css";

import Navbar from "@/components/navbar";
import type { MainDetails } from "@/components/types/type";

function EuropePlus({
  title,
  description,
  frequencies,
  logo: Logo,
  img1,
  img2,
  img3,
  colors = {
    pageBg: "#ff4651",
    circleBg: "#1f5bea",
    ringBorder: "#ff4651",
    ringOutline: "#1f5bea",
    buttonText: "#1f5bea",
    playBg: "#ff4651",
    cardShadow: "#7398f2",
    logoColor: "white",
    navShadow: "rgba(85, 85, 83, 0.75)",
  },
}: MainDetails) {
  return (
    <section
      className={style.page}
      style={
        {
          ["--page-bg"]: colors.pageBg,
          ["--circle-bg"]: colors.circleBg,
          ["--ring-border"]: colors.ringBorder,
          ["--ring-outline"]: colors.ringOutline,
          ["--button-text"]: colors.buttonText,
          ["--play-bg"]: colors.playBg,
          ["--card-shadow"]: colors.cardShadow,
          ["--logo-color"]: colors.logoColor ?? "white",
          ["--nav-shadow"]: colors.navShadow ?? "rgba(0, 0, 0, 0.35)",
         
          ["--description-color"]: colors.descriptionColor ?? "white",

          ["--media-btn-bg"]: colors.mediaBtnBg ?? "white",
          ["--media-btn-text"]: colors.mediaBtnText ?? colors.buttonText,
        } as React.CSSProperties
      }
    >
      <div className={style.navOverlay}></div>
      <Navbar variant="white" />

      <div className={style.breadcrumb}>
        <p> Главная страница — Наши радиостанции</p>
        <h1>{title}</h1>
      </div>
      <div className={style.hero}>
        <div className={style.left}>
          <p>
            <b>«{title}»</b> — {description}
          </p>

          <button className={style.mediaBtn}>🔊 Запросить медиакит</button>

          <div className={style.frequencyList}>
            {frequencies.map((item, index) => (
              <div className={style.frequencyCard} key={index}>
                <button className={style.play}>▶</button>

                <div>
                  <h4>
                    {item.city} <span>— {item.fm}</span>
                  </h4>
                  <p>сейчас в эфире</p>
                  <strong>Рекламная пауза</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.imagesBox}>
          <img src={img1} alt="" className={style.smallOne} />
          <img src={img2} alt="" className={style.mainGirl} />
          <img src={img3} alt="" className={style.smallTwo} />
        </div>
        <div className={style.visual}>
          <Logo className={style.logo} />

          <div className={style.stats}>
            <div className={style.statItem}>
              <h3>360 000</h3>
              <p>
                слушателей ежедневно
                <br />
                на Дальнем Востоке
              </p>
            </div>

            <div className={style.statItem}>
              <h3>20-36 лет</h3>
              <p>
                средний возраст
                <br />
                слушателей
              </p>
            </div>

            <div className={style.statItem}>
              <h3>
                Молодая
                <br />и активная
              </h3>

              <p>основная аудитория</p>
            </div>

            <div className={style.statItem}>
              <h3>15-20 раз в день</h3>

              <p>
                среднее количество
                <br />
                рекламных выходов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EuropePlus;
