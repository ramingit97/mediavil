import style from "./hero.module.css";
import studioIcon from "@/assets/images/Студио.png";
import RetroIcon from "@/assets/images/Ретрo.png";
import EuropeIcon from "@/assets/images/europe.svg";
import RussiaIcon from "@/assets/images/Русское.png";
import NovoeIcon from "@/assets/images/Новое.png";
import RoadIcon from "@/assets/images/Дорожное.png";
import Navbar from "@/components/navbar";
import WaveSectionIcon from "@/assets/icons/WaveSectionIcon";
import DashedWaveIcon from "@/assets/icons/DashedWaveIcon";
import HeadphoneIcon from "@/assets/icons/HeadphoneIcon";

function HeroSection() {
  return (
    <section className={style.hero}>
      <Navbar variant="gray" />

      <img src={studioIcon} className={`${style.logo} ${style.studio}`} alt="" />
      <img src={EuropeIcon} className={`${style.logo} ${style.europa}`} alt="" />
      <img src={RetroIcon} className={`${style.logo} ${style.retro}`} alt="" />
      <img src={RussiaIcon} className={`${style.logo} ${style.russian}`} alt="" />
      <img src={NovoeIcon} className={`${style.logo} ${style.novoe}`} alt="" />
      <img src={RoadIcon} className={`${style.logo} ${style.road}`} alt="" />

      <div className={style.content}>
        <span className={style.badge}>ваша эффективная</span>

        <h1>
          реклама
          <br />
          <span>на популярных</span>
          <br />
          радиостанциях
        </h1>

        <div className={style.stats}>
          <div>
            <strong>2 000 000</strong>
            <p>слушателей ежедневно</p>
          </div>

          <div>
            <strong>12 городов</strong>
            <p>вещания сети</p>
          </div>

          <div>
            <strong>5 регионов</strong>
            <p>Дальнего Востока</p>
          </div>
        </div>

        <button className={style.btn}>🔊 Запросить медиакит</button>

        <a href="#" className={style.link}>
          Получить консультацию
        </a>
      </div>

      <div className={style.wave_box}>
        <WaveSectionIcon className={style.waveSvg} fill="#f9f9f9" />
        <div className={style.center_svg}>
          <HeadphoneIcon />
        </div>
        <DashedWaveIcon className={style.dashed_svg} />
      </div>
    </section>
  );
}

export default HeroSection;