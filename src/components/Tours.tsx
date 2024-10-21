import React from "react";
import TourSlider from "./Slides/TourSlider";
import ContactBtns from "./ContactBtns";

const Tours = () => {
  return (
    <section id="tours" className="pt-28">
      <h2 className="text-center font-bold text-neutral text-3xl relative max-w-max mx-auto">
        Поиск основания для получения ВНЖ Черногории.
        <img
          src="/lines/line1.svg"
          alt="line"
          className="absolute left-5 top-8"
        />
      </h2>

      <h6 className="text-center mt-2 text-neutral">
        Проще всего сейчас открыть компанию или купить недвижимость! <br /> Мы
        предлагаем услуги по оформлению ВНЖ по всем удобным вам основаниям (а
        так же оказываем иные сопутствующие услуги по получению, <br />{" "}
        оформлению, восстановлению и переводу документов) в Черногории под ключ!{" "}
        <br />
        Получите ВНЖ Черногории уже через 30 дней, откройте карту международного
        банка и передвигайся свободно по миру! <br /> Напишите нам в WhatsApp
        или Telegram!
      </h6>

      <div className="mb-8 -mt-2">
        <ContactBtns />
      </div>

      <div className="w-[1550px] mx-auto mt-8 pl-4">
        <TourSlider />
      </div>
    </section>
  );
};

export default Tours;
