import style from "./navbar.module.css";
import MediawilIcon from "@/assets/icons/mediawilIcon.svg?react";
import HamburgerIcon from "../../assets/icons/hamburger.svg?react";
import phoneIcon from "@/assets/icons/phone.svg";
import arrowDown from "@/assets/icons/arrow.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER } from "@/constants/router";

function Navbar({ variant }: { variant: string }) {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Владивосток");
  const [menuOpen, setMenuOpen] = useState(false);

  const cities = ["Владивосток", "Хабаровск", "Уссурийск", "Находка"];

  const navigate = useNavigate();

  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <MediawilIcon
          onClick={() => navigate(ROUTER.Home)}
          className={`${style.logo} ${style[variant]}`}
        />

        <div className={style.dropdown}>
          <button className={style.cityBtn} onClick={() => setOpen(!open)}>
            <span className={style[variant]}>{selectedCity}</span>

            <img
              src={arrowDown}
              alt="arrow"
              className={`${style.arrow} ${open ? style.rotate : ""}`}
            />
          </button>

          {open && (
            <div className={style.menu}>
              {cities.map((city, index) => (
                <p
                  key={index}
                  className={`${style.menuItem} `}
                  onClick={() => {
                    setSelectedCity(city);
                    setOpen(false);
                  }}
                >
                  {city}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <nav className={`${style.nav} ${menuOpen ? style.showMenu : ""}`}>
        <Link to={ROUTER.About} className={style[variant]}>
          О компании
        </Link>
        <Link to={ROUTER.Stations} className={style[variant]}>
          Наши радиостанции
        </Link>
        <Link to={ROUTER.Services} className={style[variant]}>
          Наши услуги
        </Link>
        <Link to={ROUTER.Contacts} className={style[variant]}>
          Контакты
        </Link>
      </nav>

      <div className={style.phone}>
        <span className={`${style.phoneLabel} ${style[variant]}`}>
          Единая справочная
        </span>

        <div className={style.phoneRow}>
          <img src={phoneIcon} alt="phone" />
          <span className={`${style.phoneNumber}  ${style[variant]}`}>
            8 423 269 55 33
          </span>
        </div>
      </div>

      <HamburgerIcon
        onClick={() => setMenuOpen(!menuOpen)}
        className={`
    ${style.hamburger}
    ${style[variant]}
    ${menuOpen ? style.hideHamburger : ""}
  `}
      />

      {menuOpen && (
        <div className={style.overlay} onClick={() => setMenuOpen(false)}></div>
      )}
    </div>
  );
}

export default Navbar;
