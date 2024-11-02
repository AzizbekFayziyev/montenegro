import { User, Play, Check } from "lucide-react";
import React from "react";

const Advantages = () => {
  return (
    <section id="reviews" className="mt-20 wrapper">
      <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
        Видео отзывы
        <img
          src="/lines/line2.svg"
          alt="line"
          className="absolute right-0 -bottom-1"
        />
      </h2>

      <div className="flex items-center justify-between flex-wrap gap-4 mt-8">
        <div className="bg-black overflow-hidden rounded-xl mx-auto hover:bg-primary transition-colors">
          <iframe
            className="sm:max-w-[320px] h-[200px] w-full"
            src="https://www.youtube.com/embed/34bW57xAj3g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h5 className="text-white text-center p-3 text-xl">Светлана</h5>
        </div>

        <div className="bg-black overflow-hidden rounded-xl mx-auto hover:bg-primary transition-colors">
          <iframe
            className="sm:max-w-[320px] h-[200px] w-full"
            src="https://www.youtube.com/embed/9egdPauQ5pU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h5 className="text-white text-center p-3 text-xl">Зарина</h5>
        </div>

        <div className="bg-black overflow-hidden rounded-xl mx-auto hover:bg-primary transition-colors">
          <iframe
            className="sm:max-w-[320px] h-[200px] w-full"
            src="https://www.youtube.com/embed/JLIxTTTEZao"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h5 className="text-white text-center p-3 text-xl">Андрей</h5>
        </div>

        <div className="bg-black overflow-hidden rounded-xl mx-auto hover:bg-primary transition-colors">
          <iframe
            className="sm:max-w-[320px] h-[200px] w-full"
            src="https://www.youtube.com/embed/1hgYtBI15Qs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h5 className="text-white text-center p-3 text-xl">Марина</h5>
        </div>
      </div>


      <div id="advantages" className="mt-20">
        <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
          Основные услуги
          <img
            src="/lines/line2.svg"
            alt="line"
            className="absolute right-0 -bottom-1"
          />
        </h2>

        <ul className="mt-8 flex flex-col gap-4">
          <li className="mt-4 items-start flex gap-4 ">
            <div className="bg-primary rounded-full p-1">
              <Check size={30} color="#ffffff" />
            </div>

            <div className="text-xl font-medium">
              Открытие фирмы (DOO) + подготовка и подача документов в органы
              Черногории для получения вида на жительство. Документы от клиента:
              копия паспорта, справка об отсутствии судимости не старше 6
              месяцев (поможем получить), копия документа об образовании -
              школьный аттестат/сертификат о среднем образовании/диплом (поможем
              получить, перевести, заверить), нотариально заверенный договор
              аренды жилья в Черногории, что подтверждает ваше проживание на
              территории Черногории (поможем получить). Срок получения ВНЖ -
              30-45 дней (зависит от загрузки гос. органа).
            </div>
          </li>

          <li className="mt-4 items-start flex gap-4 ">
            <div className="bg-primary rounded-full p-1">
              <Check size={30} color="#ffffff" />
            </div>

            <div className="text-xl font-medium">
              Оформление ВНЖ по основанию владения недвижимостью (поможем
              выбрать недвижимость, купить, оформить). Документы от клиента:
              копия паспорта, справка об отсутствии судимости (не старше 6
              месяцев), лист непокретности на объект недвижимости в
              собственности (выписка из реестра собственности в ЧГ), банковский
              счёт в ЧГ с суммой на счету от 3650 до 5000 евро, регистрация в
              туристической организации.
            </div>
          </li>

          <li className="mt-4 items-center flex gap-4 ">
            <div className="bg-primary rounded-full p-1">
              <Check size={30} color="#ffffff" />
            </div>

            <div className="text-xl font-medium">
              Оформление на работу в Черногорскую фирму (при наличии
              работодателя) - по запросу.
            </div>
          </li>

          <li className="mt-4 items-center flex gap-4 ">
            <div className="bg-primary rounded-full p-1">
              <Check size={30} color="#ffffff" />
            </div>

            <div className="text-xl font-medium">
              Воссоединение членов семьи по каждому основанию.
            </div>
          </li>

          <li className="mt-4 items-start flex gap-4 ">
            <div className="bg-primary rounded-full p-1">
              <Check size={30} color="#ffffff" />
            </div>

            <div className="text-xl font-medium">
              Открытие фирмы (DOO) под ключ (с печатью). Необходима копия
              паспорта учредителя и нотариальная доверенность на представителя,
              оформленная либо в Черногории либо в ином государстве (при
              дистанционном открытии).
            </div>
          </li>

          <li className="mt-4 items-start flex gap-4 ">
            <div className="bg-primary rounded-full p-1">
              <Check size={30} color="#ffffff" />
            </div>

            <div className="text-xl font-medium">
              Нострификация документов об образовании в зависимости от вида
              документа (школьный аттестат,сертификат о среднем образовании,
              диплом). Необходимые документы: копия паспорта, копия документа об
              образовании, доверенность на представителя. Получение повторной
              подтверды из МинОбразования Черногории. Необходимые документы:
              копия предыдущей подтверды. Оформления нотариального договора для
              целей подачи документов на ВНЖ.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
