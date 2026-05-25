import { Col, Row } from "antd";
import MediawilIcon from "@/assets/icons/mediawilIcon.svg?react";

import style from "./footer.module.css";

function Footer() {
  const cities = [
    {
      name: "Владивосток",
      address: "ул. Толстого 32а, 4 этаж, оф.407",
      phone: "8 (423) 269-55-33",
    },
    {
      name: "Находка",
      address: "Находкинский пр-т 12, оф. 96",
      phone: "8 (4236) 70-30-70",
    },
    {
      name: "Уссурийск",
      address: "ул. Некрасова 22, оф. 418А",
      phone: "8 (4234) 31-00-70",
    },
    {
      name: "Партизанск",
      address: "ул. Кронида Коренова 22",
      phone: "8 (42363) 6-20-36",
    },
    {
      name: "Хабаровск",
      address: "ул. Фрунзе 22, оф. 701",
      phone: "8 (4212) 63-10-10",
    },
    {
      name: "Южно-Сахалинск",
      address: "ул. ХХХХХ ХХ, оф. ХХ",
      phone: "8 (ХХХХ) ХХ-ХХ-ХХ",
    },
  ];

  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <MediawilIcon className={style.logo} />

        <p className={style.title}>
          Mediavil — медиахолдинг, который помогает бизнесу звучать и быть
          увиденным
        </p>

        <p className={style.text}>
          Радио, наружная реклама, кинотеатры — мы подбираем и реализуем
          размещение там, где ваша аудитория уже есть.
          <br />
          Русское радио, Европа Плюс, Дорожное радио, Ретро FM, Новое радио,
          Studio 21 — проверенные площадки с устойчивым охватом.
        </p>

        <p className={style.text}>
          Работаем в ключевых городах региона:
          <br />
          Владивосток, Хабаровск, Уссурийск, Находка, Партизанск и Партизанский
          район
        </p>

        <p className={style.text}>
          Планируем, размещаем, сопровождаем. Без лишней сложности — с понятным
          результатом
        </p>

        <Row gutter={[24, 24]} className={style.cities}>
          {cities.map((city, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={4}>
              <div className={style.city}>
                <h4>{city.name}</h4>
                <p>{city.address}</p>
                <p>{city.phone}</p>
              </div>
            </Col>
          ))}
        </Row>

        <div className={style.bottom}>
          <span>2017 — 2026</span>
          <span>ООО "Новое Радио ДВ"</span>
          <span>2509010982</span>
        </div>

        <p className={style.link}>Полные реквизиты компании</p>
      </div>
    </footer>
  );
}

export default Footer;
