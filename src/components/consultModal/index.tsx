import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import style from "./consultModal.module.css";

interface ConsultModalProps {
  open: boolean;
  onClose: () => void;
}

function ConsultModal({ open, onClose }: ConsultModalProps) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSent(false);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return createPortal(
    <div
      className={style.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={style.modal} role="dialog" aria-modal="true">
        <button
          type="button"
          className={style.close}
          onClick={onClose}
          aria-label="Закрыть"
        >
          &times;
        </button>

        <h2>
          Получите консультацию
          <br />
          от экспертов радиовещания
        </h2>

        <p className={style.subtitle}>
          Разработаем эффективную рекламную
          <br />
          стратегию для вашего бизнеса
        </p>

        {sent ? (
          <p className={style.success}>
            Спасибо за заявку!
            <br />
            Наши менеджеры свяжутся с вами в ближайшее время.
          </p>
        ) : (
          <>
            <form className={style.form} onSubmit={handleSubmit}>
              <label className={style.field}>
                <span>Ваше имя</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Константин Константинович Константинопольский"
                  required
                />
              </label>

              <div className={style.row}>
                <label className={style.field}>
                  <span>Мобильный телефон</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+7 984 123 65 47"
                    required
                  />
                </label>

                <label className={style.field}>
                  <span>Электронная почта</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Konstantin@mail.ru"
                  />
                </label>
              </div>

              <div className={style.row}>
                <label className={style.field}>
                  <span>Ваш город</span>
                  <input type="text" name="city" placeholder="Южно-Сахалинск" />
                </label>
              </div>

              <label className={style.field}>
                <span>Комментарий</span>
                <textarea
                  name="comment"
                  placeholder="Просто сделайте мне рекламу, чтобы я заработал очень много денег"
                />
              </label>

              <button type="submit" className={style.submit}>
                Отправить
              </button>
            </form>

            <p className={style.note}>
              Наши менеджеры расскажут вам о наилучших
              <br />
              способах привлечь новых клиентов
            </p>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

export default ConsultModal;
