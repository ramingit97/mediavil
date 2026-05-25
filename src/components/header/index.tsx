import MIcon from "@/assets/icons/m.svg";
import SettingIcon from "@/assets/icons/settings.svg";
import TruckIcon from "@/assets/icons/truck.svg";
import style from "./header.module.css";

function Header() {
  const items = [
    {
      text: "Разработка сайтов для вашего бизнеса",
      site: "— maintgott.com",
      icon: MIcon,
    },
    {
      text: "Логистические услуги 24/7 ",
      icon: TruckIcon,
      site: "— dv-logistic.ru",
    },
    {
      text: "Сопровождение Битрикс24 ",
      icon: SettingIcon,
      site: "— primcrm.info",
    },
  ];
  return (
    <header className={style.top}>
      <div className={style.track}>
        {[...items, ...items].map((item, index) => {
          return (
            <div key={index} className={style.item}>
              <img src={item.icon} alt="icon" />
              <p>
                {item.text}
                <span className="text-[#0000004D]"> {item.site}</span>
              </p>
            </div>
          );
        })}
      </div>
      <div></div>
    </header>
  );
}

export default Header;
