import { Col, Row } from "antd";
import style from "./workProcessSection.module.css";
import vector from "@/assets/images/dashedVector.svg";

import work1 from "@/assets/images/girl.png";
import work2 from "@/assets/images/worker4.png";
import work3 from "@/assets/images/worker.png";
import work4 from "@/assets/images/worker2.png";
import work5 from "@/assets/images/worker3.png";
import work6 from "@/assets/images/girl2.png";

function WorkProcessSection() {
  const steps = [
    {
      image: work1,
      title: "Консультация",
      text: "Обсуждаем бизнес, цели рекламы и целевую аудиторию. Это помогает подобрать лучший формат рекламы и радиостанции",
    },
    {
      image: work2,
      title: "Медиаплан",
      text: "Из задач бизнеса мы формируем медиаплан: выбираем радиостанции, формат рекламы и частоту выходов",
    },
    {
      image: work3,
      title: "Создание ролика",
      text: "Помогаем создать аудиоролик: пишем текст, подбираем диктора, музыку и оформляем рекламу в формате радиостанции",
    },
    {
      image: work4,
      title: "Размещение",
      text: "После согласования ролик выходит в эфир в выбранные временные слоты и на нужных радиостанциях",
    },
    {
      image: work5,
      title: "Контроль",
      text: "Мы следим за выполнением медиаплана и гарантируем выход рекламы согласно утвержденному графику",
    },
    {
      image: work6,
      title: "Результат",
      text: "По итогам кампании мы помогаем оценить эффективность и даем рекомендации для дальнейшего продвижения",
    },
  ];

  return (
    <section className={style.section}>
      <img src={vector} alt="" className={style.waveTop} />
      <div className={style.head}>
        <h2>Как мы работаем</h2>
        <p>
          От глубокого анализа вашей ниши до запуска в эфир —
          <br />
          берем на себя все этапы производства и медиапланирования
        </p>
      </div>

      <div className={style.list}>
        <Row gutter={[24, 24]}>
          {steps.map((step, index) => (
            <Col key={index} xs={24} sm={24} md={24} lg={12}>
              <article className={style.card}>
                <img src={step.image} alt={step.title} />

                <div className={style.content}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default WorkProcessSection;
