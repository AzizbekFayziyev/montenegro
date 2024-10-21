import React from "react";
import HeroSlider from "./Slides/HeroSlider";
import ContactBtns from "./ContactBtns";

const Header = () => {
  return (
    <header className="overflow-hidden">
      <div className="text-center text-white relative z-20">
        <div className="px-2 max-w-[840px] mx-auto w-full -mt-4 sm:mt-4">
          <h1 className="mt-28 mb-5 text-4xl sm:text-5xl font-bold">
            Получите ВНЖ Черногории за 30-45 дней за 3.000 евро в стране,
            <span className="text-secondary">
              {" "}
              где солнце, море, горы и которая скоро станет Европой.
            </span>
          </h1>
          <p className="mb-10">
            ВИД НА ЖИТЕЛЬСТВО в ЧЕРНОГОРИИ - это лучше, чем гражданство!
            Получить быстрее, легче, дешевле, а права даёт такие же! От вас
            требуется только оплата и предоставление документов нам, остальное
            сделаем мы! С документами поможем! Напишите нам сейчас и ваши
            документы начнут готовиться уже завтра. Пишите в WhatsApp или
            Telegram!
          </p>

          <div className="mb-8 -mt-4">
            <ContactBtns />
          </div>
        </div>

        <div>
          <HeroSlider />
        </div>
      </div>
    </header>
  );
};

export default Header;
