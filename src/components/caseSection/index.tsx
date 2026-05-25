import style from "./caseSections.module.css";

import case1 from "@/assets/images/mallImg.png";
import case2 from "@/assets/images/people.png";

function CasesSection() {
  const cases = [
    {
      image: case1,
      title:
        "Комплексная рекламная кампания нового торгового центра во Владивостоке",
      linkText: "подробнее об этом кейсе",
    },
    {
      image: case2,
      title: "Комплексная рекламная кампания клиники косметологии в Хабаровске",
      linkText: "подробнее об этом кейсе",
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.head}>
        <h2>Наши кейсы</h2>
        <p>
          Реальные истории успеха, цифры и охваты.
          <br />
          Посмотрите, как мы помогаем бизнесу в Приморье и Хабаровском крае
          расти быстрее
        </p>
      </div>

      <div className={style.cards}>
        {cases.map((item, index) => (
          <article className={style.card} key={index}>
            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

            <a href="#">{item.linkText}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CasesSection;
