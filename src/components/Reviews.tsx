import React from "react";
import ContactBtns from "./ContactBtns";

const Reviews = () => {
  return (
    <section>
      <h2 className="text-center font-bold text-neutral text-3xl relative max-w-max mx-auto">
        Есть вопросы, сомнения? Хотите пообщаться? <br /> Тогда напишите нам в
        WhatsApp или Telegram!
        <img
          src="/lines/line3.svg"
          alt="line"
          className="absolute left-20 top-8"
        />
      </h2>

      <ContactBtns />
    </section>
  );
};

export default Reviews;
