import { CalendarDays, Clock3, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactBtns from "./ContactBtns";

const FireTours = () => {
  return (
    <section id="contacts" className="mt-8 sm:mt-28">
      <h2 className="text-center font-bold text-neutral text-2xl relative max-w-max mx-auto max-w-[900px]">
        🔥 Хотите получить ВНЖ страны, в которой комфортно жить, низкий уровень
        преступности, соседи славянской внешности, которые хорошо относятся к
        русскоговорящим гостям, хороший климат, море и солнце 280 дней в году,
        не запрещена криптовалюта?! Тогда напишите нам в WhatsApp или Telegram!
        <img
          src="/lines/line3.svg"
          alt="line"
          className="absolute left-20 top-7"
        />
      </h2>

      <ContactBtns />
    </section>
  );
};

export default FireTours;
