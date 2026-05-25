import Navbar from "@/components/navbar";
import style from "./notFound.module.css";

import EuropeIcon from "@/assets/images/europe.svg";
import NovoeIcon from "@/assets/images/Новое.png";
import RussiaIcon from "@/assets/images/Русское.png";
import RetroIcon from "@/assets/images/Ретрo.png";
import RoadIcon from "@/assets/images/Дорожное.png";
import StudioIcon from "@/assets/images/Студио.png";
import MirIcon from "@/assets/icons/mir.svg";

import { Link } from "react-router-dom";
import { ROUTER } from "@/constants/router";

function NotFound() {
  return (
    <section className={style.hero}>
      <Navbar variant="gray" />

      <div className={style.rings}></div>

      <img src={StudioIcon} className={`${style.logo} ${style.studio}`} />
      <img src={EuropeIcon} className={`${style.logo} ${style.europa}`} />
      <img src={NovoeIcon} className={`${style.logo} ${style.novoe}`} />
      <img src={RetroIcon} className={`${style.logo} ${style.retro}`} />
      <img src={RussiaIcon} className={`${style.logo} ${style.russia}`} />
      <img src={RoadIcon} className={`${style.logo} ${style.road}`} />
      <img src={MirIcon} className={`${style.logo} ${style.mir}`} />

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
