import React from "react";

import style from "./novoeHero.module.css";

import Navbar from "@/components/navbar";
import PlayIcon from "@/assets/icons/play.svg?react";
import AudioIcon from "@/assets/icons/audio.svg?react";
import type { FrequencyItem } from "@/components/types/type";

export interface InfoCard {
  label: string;
  lines: string[];
}

interface NovoeHeroProps {
  title: string;
  description: string[];
  logo: string;
  frequencies: FrequencyItem[];
  infoCards: InfoCard[];
  highlights?: string[];
  colors?: {
    pageBg: string;
    circleBg: string;
    ringBorder: string;
    ringOutline: string;
    buttonText: string;
    playBg: string;
    logoColor?: string;
    navShadow?: string;
    descriptionColor?: string;
    mediaBtnBg?: string;
    mediaBtnText?: string;
  };
}

function NovoeHero({
  title,
  description,
  frequencies,
  logo,
  infoCards,
  highlights,
  colors = {
    pageBg: "#555553",
    circleBg: "#D41220",
    ringBorder: "#555553",
    ringOutline: "#D41220",
    buttonText: "#D41220",
    playBg: "#555553",
  },
}: NovoeHeroProps) {
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
          ["--logo-color"]: colors.logoColor ?? "white",
          ["--nav-shadow"]: colors.navShadow ?? "rgba(0, 0, 0, 0.35)",
          ["--description-color"]: colors.descriptionColor ?? "white",
          ["--media-btn-bg"]: colors.mediaBtnBg ?? colors.buttonText,
          ["--media-btn-text"]: colors.mediaBtnText ?? "white",
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
          <div className={style.cards}>
            {infoCards.map((card, index) => (
              <div className={style.infoCard} key={index}>
                <span className={style.infoLabel}>{card.label}</span>
                <hr />
                <div className={style.infoContent}>
                  {card.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className={style.btnCell}>
              <button className={style.mediaBtn}>
                <AudioIcon className={style.audioIcon} />
                Запросить медиакит
              </button>
            </div>
          </div>
        </div>

        <div className={style.right}>
          <img src={logo} alt={title} className={style.logo} />

          <div className={style.description}>
            {description.map((paragraph, index) => (
              <p key={index}>
                {index === 0 ? (
                  <>
                    <b>«{title}»</b> — {paragraph}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>

          <div className={style.frequencyList}>
            {frequencies.map((item, index) => (
              <div className={style.frequencyRow} key={index}>
                <PlayIcon className={style.play} />
                <div className={style.freqInfo}>
                  <h4>
                    {item.city} <span>— {item.fm}</span>
                  </h4>
                  <hr />
                  <p>{item.current ?? "сейчас в эфире"}</p>
                  <strong>Рекламная пауза</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {highlights && highlights.length > 0 && (
        <div className={style.highlights}>
          {highlights.map((text, index) => (
            <p className={style.highlight} key={index}>
              {text}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

export default NovoeHero;
