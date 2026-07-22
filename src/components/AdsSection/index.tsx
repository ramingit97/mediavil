import { useState } from "react";
import { Col, Row } from "antd";
import style from "./adsSection.module.css";
import HeadphoneIcon from "@/assets/icons/HeadphoneIcon";
import WaveSectionIcon from "@/assets/icons/WaveSectionIcon";
import PlayIcon from "@/assets/icons/play.svg?react";
import DashedWaveIcon from "@/assets/icons/DashedWaveIcon";
import ConsultModal from "@/components/consultModal";

type AdsColors = {
  pageBg?: string;
  btnColor?: string;
  consultBtn?: string;
};

function AdsSection({
  colors = { pageBg: "#ffffff", btnColor: "#000000", consultBtn: "#fff" },
  stationName = "Европа Плюс",
}: { colors?: AdsColors; stationName?: string }) {
  const [consultOpen, setConsultOpen] = useState(false);

  const cards = [
    {
      title: "Рекламный аудиоролик",
      subtitle: "Классический формат радиорекламы",
      description:
        "Короткий рекламный ролик, который выходит в эфире между музыкальными блоками и программами. Эффективный способ быстро рассказать о продукте и донести ключевое предложение.",
      bottomTitle: "Рекламный ролик магазина",
      bottomText: "“Все для рыбалки на ул.Ленина”",
    },

    {
      title: "Спонсорство программ",
      subtitle: "Интеграция бренда в популярные программы",
      description:
        "Бренд упоминается ведущими в начале и конце программы или рубрики. Такой формат повышает доверие к бренду и делает рекламу более естественной.",
      bottomTitle: "Спонсорство программы 1+1",
      bottomText: "“Додо Пицца в Уссурийске”",
    },

    {
      title: "Анонсы и джинглы",
      subtitle: "Короткие брендированные упоминания",
      description:
        "Короткие рекламные вставки или брендированные джинглы, которые органично вписываются в эфир радиостанции.",
      bottomTitle: "Джингл компании по импорту авто",
      bottomText: "“ProstoCar в Находке”",
    },
  ];

  return (
    <section
      className={style.section}
      style={
        {
          ["--page-bg"]: colors.pageBg,
          ["--button-color"]: colors.btnColor,
          ["--consultText"]: colors.consultBtn ?? "#fff",
        } as React.CSSProperties
      }
    >
      <h2>Форматы рекламы на {stationName}</h2>

      <div className={style.cards}>
        <Row gutter={[43, 43]} justify="center">
          {cards.map((card, index) => (
            <Col key={index} xs={24} sm={24} md={24} lg={8}>
              <div className={style.card}>
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
                <p className={style.description}>{card.description}</p>
                <div className={style.line}></div>
                <div className={style.bottom}>
                  <PlayIcon className={style.play} />
                  <div>
                    <span>{card.bottomTitle}</span>
                    <strong>{card.bottomText}</strong>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <button
        className={style.consultBtn}
        onClick={() => setConsultOpen(true)}
      >
        Получить консультацию менеджера
      </button>

      <p className={style.bottomText}>
        Наши менеджеры расскажут вам о наилучших
        <br />
        способах привлечь новых клиентов
      </p>
      <div className={style.wave_box}>
        <WaveSectionIcon className={style.waveSvg} fill="#f7f7f7" />
        <div className={style.center_svg}>
          <HeadphoneIcon />
        </div>
        <DashedWaveIcon className={style.dashed_svg} />
      </div>

      <ConsultModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </section>
  );
}

export default AdsSection;
