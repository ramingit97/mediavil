import Navbar from "@/components/navbar";
import style from "./notFound.module.css";

import EuropeIcon from "@/assets/images/logo-europa.png";
import NovoeIcon from "@/assets/images/logo-novoe.png";
import RussiaIcon from "@/assets/images/logo-russkoe.png";
import RetroIcon from "@/assets/images/logo-retro.png";
import RoadIcon from "@/assets/images/logo-road.png";
import StudioIcon from "@/assets/images/logo-studio.png";
import MirIcon from "@/assets/images/logo-mir.png";

import { Link } from "react-router-dom";
import { ROUTER } from "@/constants/router";

function NotFound() {
  return (
    <section className={style.hero}>
      <Navbar variant="gray" />

      <div className={style.rings}></div>

      <img src={StudioIcon} alt="" className={`${style.logo} ${style.studio}`} />
      <img src={EuropeIcon} alt="" className={`${style.logo} ${style.europa}`} />
      <img src={NovoeIcon} alt="" className={`${style.logo} ${style.novoe}`} />
      <img src={RetroIcon} alt="" className={`${style.logo} ${style.retro}`} />
      <img src={RussiaIcon} alt="" className={`${style.logo} ${style.russia}`} />
      <img src={RoadIcon} alt="" className={`${style.logo} ${style.road}`} />
      <img src={MirIcon} alt="" className={`${style.logo} ${style.mir}`} />

      <div className={style.center}>
        <h1>
          404
          <br />
          Страница
          <br />
          не найдена
        </h1>

        <Link to={ROUTER.Home} className={style.btn}>
          Вернуться на главную страницу
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
