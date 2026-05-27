import Navbar from "@/components/navbar";
import Title from "@/components/title";
import style from "./adProductsSection.module.css";
import PlayIcon from "@/assets/icons/play.svg?react";
import WaveSectionIcon from "@/assets/icons/WaveSectionIcon";
import DashedWaveIcon from "@/assets/icons/DashedWaveIcon";
function AdProductsSection() {
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
    <section className={style.section}>
      <Navbar variant="gray" />
      <Title variant1="Наши услуги" />
      <div className={style.head}>
        <h2>
          Какие рекламные продукты
          <br />
          мы можем вам предложить
        </h2>
        <p>
          Готовые инструменты для решения любых задач — от быстрого анонса акции
          <br />
          до формирования долгосрочного имиджа вашего бренда
        </p>
      </div>

      <div className={style.cards}>
        {cards.map((card, index) => (
          <article className={style.card} key={index}>
            <h3>{card.title}</h3>
            <h4>{card.subtitle}</h4>

            <p className={style.description}>{card.description}</p>

            <div className={style.line}></div>

            <div className={style.bottom}>
              <button>
                <PlayIcon />
              </button>

              <div>
                <span>{card.bottomTitle}</span>
                <strong>{card.bottomText}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={style.wave_box}>
        <WaveSectionIcon className={style.waveSvg} fill="#f7f7f7" />
        <DashedWaveIcon className={style.dashed_svg} />
      </div>
    </section>
  );
}

export default AdProductsSection;
