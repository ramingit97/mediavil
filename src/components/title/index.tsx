import style from './title.module.css';

type TitleProps = {
  variant1: string;
  variant2?: string;
};

function Title({ variant1, variant2 }: TitleProps) {
  return (
    <div className={style.head}>
      <p>Главная страница</p>
      <h1>{variant1}</h1>
      <span>{variant2}</span>
    </div>
  );
}

export default Title;
