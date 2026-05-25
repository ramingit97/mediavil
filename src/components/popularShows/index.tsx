import { Col, Row } from "antd";
import style from "./popularShows.module.css";

import show1 from "@/assets/images/Rectangle102.png";
import show2 from "@/assets/images/Rectangle104.png";
import show3 from "@/assets/images/Rectangle106.png";
import show4 from "@/assets/images/Rectangle108.png";

function PopularShows() {
  const shows = [
    {
      image: show1,
      badge: "Популярное шоу",
      title: "«1+1. Шоу Калинина и Райтрауна»",
      description:
        "Главное развлекательное шоу станции: новости, юмор, гости и интерактив со слушателями",
    },
    {
      image: show2,
      badge: "Популярное шоу",
      title: "«Эвилэнд»",
      description: "Разговорный вечерний эфир с живым общением и музыкой",
    },
    {
      image: show3,
      title: "«Новотека»",
      description: "Быстрые новости шоу-бизнеса и музыкальной индустрии",
    },
    {
      image: show4,
      title: "«Фреш Ток»",
      description:
        "Разговорное шоу о трендах, жизни и медиа. Ведущие обсуждают актуальные темы и новости вместе со слушателями.",
    },
  ];

  return (
    <section className={style.section}>
      <h2>Популярные шоу на Новом радио</h2>
      <div className={style.wrapper}>
        <Row gutter={[31, 31]} justify="center">
          {shows.map((show, index) => (
            <Col key={index} xs={24} sm={24} md={24} lg={12}>
              <article className={style.card}>
                <img src={show.image} alt={show.title} />

                <div className={style.content}>
                  {show.badge && <span>{show.badge}</span>}

                  <h3>{show.title}</h3>

                  <p>{show.description}</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default PopularShows;
