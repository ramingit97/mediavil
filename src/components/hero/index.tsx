import style from "./hero.module.css";
import studioIcon from "@/assets/images/Студио.png";
import RetroIcon from "@/assets/images/Ретрo.png";
import EuropeIcon from "@/assets/images/europe.svg";
import RussiaIcon from "@/assets/images/Русское.png";
import NovoeIcon from "@/assets/images/Новое.png";
import RoadIcon from "@/assets/images/Дорожное.png";
import Navbar from "@/components/navbar";

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

    
    </section>
  );
}

export default HeroSection;