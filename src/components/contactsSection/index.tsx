import { Col, Row } from "antd";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import style from "./contactSection.module.css";

import whatsapp from "@/assets/icons/whatsapp.svg";
import telegram from "@/assets/icons/telegram.svg";
import messenger from "@/assets/icons/messenger.svg";

function ContactsSection() {
  const contacts = [
    {
      city: "Владивосток",
      address: "ул. Тополевая 30а, 4 этаж, оф.407",
      phone: "8 (423) 259-55-33",
      email: "vl@mediavil.ru",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186242.45442473853!2d131.7886483782744!3d43.166719155439246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d485%3A0x186704d4dd967e35!2sVladivostok%2C%20Primorsky%20Krai%2C%20Russia!5e0!3m2!1sen!2sus!4v1779265301302!5m2!1sen!2sus",
    },
    {
      city: "Находка",
      address: "Находкинский пр-т 12, оф. 96",
      phone: "8 (4236) 70-30-70",
      email: "nf@mediavil.ru",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187364.34583075566!2d132.7348597434999!3d42.79748377150718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb15d3c6955b26d%3A0x473a79a033f6e5e4!2sNakhodka%2C%20Primorsky%20Krai%2C%20Russia!5e0!3m2!1sen!2sus!4v1779265580426!5m2!1sen!2sus",
    },
    {
      city: "Уссурийск",
      address: "Находкинский пр-т 12, оф. 96",
      phone: "8 (4236) 70-30-70",
      email: "nf@mediavil.ru",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92165.85643257128!2d131.86415148812378!3d43.78981532469075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb2e82c7a30123d%3A0x3ea6992838cb31b3!2sUssuriysk%2C%20Primorsky%20Krai%2C%20Russia!5e0!3m2!1sen!2sus!4v1779265684128!5m2!1sen!2sus",
    },
    {
      city: "Партизанск",
      address: "Находкинский пр-т 12, оф. 96",
      phone: "8 (4236) 70-30-70",
      email: "nf@mediavil.ru",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93181.64949734762!2d133.04690735071705!3d43.12706922740641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb1865ca767a7ad%3A0x51ec65edd8e073f9!2sPartizansk%2C%20Primorsky%20Krai%2C%20Russia!5e0!3m2!1sen!2sus!4v1779265739629!5m2!1sen!2sus",
    },
  ];

  return (
    <section className={style.section}>
      <Navbar variant="gray" />

      <Title variant1="Контакты" />

      <div className={style.list}>
        {contacts.map((item, index) => (
          <Row
            key={index}
            className={style.row}
            gutter={[70, 40]}
            align="middle"
          >
            <Col xs={24} md={24} lg={6}>
              <div className={style.info}>
                <h3>{item.city}</h3>
                <p>{item.address}</p>
                <a href={`tel:${item.phone}`}>{item.phone}</a>
                <a href={`mailto:${item.email}`}>{item.email}</a>

                <div className={style.socials}>
                  <img alt="wtsp" src={whatsapp} />
                  <img alt="tlgrm" src={telegram} />
                  <img alt="mssngr" src={messenger} />
                </div>
              </div>
            </Col>

            <Col xs={24} md={24} lg={18}>
              <iframe
                className={style.map}
                src={item.mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
}

export default ContactsSection;
