import style from "./hero.module.css";
import studioIcon from "@/assets/images/logo-studio.png";
import RetroIcon from "@/assets/images/logo-retro.png";
import EuropeIcon from "@/assets/images/logo-europa.png";
import RussiaIcon from "@/assets/images/logo-russkoe.png";
import NovoeIcon from "@/assets/images/logo-novoe.png";
import RoadIcon from "@/assets/images/logo-road.png";
import MirIcon from "@/assets/images/logo-mir.png";
import lightning from "@/assets/images/lightning.png";
import Navbar from "@/components/navbar";
import AudioIcon from "@/assets/icons/audio.svg?react";
import WaveSectionIcon from "@/assets/icons/WaveSectionIcon";
import DashedWaveIcon from "@/assets/icons/DashedWaveIcon";
import frogMascot from "@/assets/images/frog-mascot.svg";

function HeroSection() {
  return (
    <section className={style.hero}>
      <Navbar variant="gray" />

      <div className={style.signals}>
        <img src={lightning} className={`${style.bolt} ${style.boltStudio}`} alt="" />
        <img src={lightning} className={`${style.bolt} ${style.boltEuropa}`} alt="" />
        <img src={lightning} className={`${style.bolt} ${style.boltNovoe}`} alt="" />
        <img src={lightning} className={`${style.bolt} ${style.boltRetro}`} alt="" />
        <img src={lightning} className={`${style.bolt} ${style.boltRusskoe}`} alt="" />
        <img src={lightning} className={`${style.bolt} ${style.boltRoad}`} alt="" />
        <img src={lightning} className={`${style.bolt} ${style.boltMir}`} alt="" />
      </div>

      <img src={studioIcon} className={`${style.logo} ${style.studio}`} alt="" />
      <img src={EuropeIcon} className={`${style.logo} ${style.europa}`} alt="" />
      <img src={RetroIcon} className={`${style.logo} ${style.retro}`} alt="" />
      <img src={RussiaIcon} className={`${style.logo} ${style.russian}`} alt="" />
      <img src={NovoeIcon} className={`${style.logo} ${style.novoe}`} alt="" />
      <img src={RoadIcon} className={`${style.logo} ${style.road}`} alt="" />

      <div className={style.content}>
        <img src={MirIcon} className={style.mir} alt="" />
        <span className={style.badge}>ваша эффективная</span>

        <h1>
          Реклама на радио,
          <br />
          <span>которую слышат</span>
        </h1>

        <div className={style.stats}>
          <div>
            <strong>2 000 000</strong>
            <p>слушателей ежедневно</p>
          </div>

          <div>
            <strong>5 городов</strong>
            <p>вещания сети</p>
          </div>

          <div>
            <strong>3 региона</strong>
            <p>Дальнего Востока</p>
          </div>
        </div>

        <button className={style.btn}>
          <AudioIcon className={style.btnIcon} />
          Запросить медиакит
        </button>

        <a href="#" className={style.link}>
          Получить консультацию
        </a>
      </div>

      <div className={style.wave_box}>
        <WaveSectionIcon
          className={style.waveSvg}
          gradientFrom="#e6e6e6"
          gradientTo="#f9f9f9"
        />
        <div className={style.center_svg}>
          <img src={frogMascot} alt="" width={57} height={71} />
        </div>
        <DashedWaveIcon className={style.dashed_svg} />
      </div>
    </section>
  );
}

export default HeroSection;