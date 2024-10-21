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
        <iframe
          className="sm:max-w-[320px] h-[200px] w-full rounded-xl"
          src="https://www.youtube.com/embed/6t_zsJXiWeE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="sm:max-w-[320px] h-[200px] w-full rounded-xl"
          src="https://www.youtube.com/embed/w32KC3Vkgp8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="sm:max-w-[320px] h-[200px] w-full rounded-xl"
          src="https://www.youtube.com/embed/gRwImp3k7T8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          className="sm:max-w-[320px] h-[200px] w-full rounded-xl"
          src="https://www.youtube.com/embed/1WtkoqRAyf0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* 
      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        <div className="w-full sm:max-w-[290px] min-h-[290px] bg-lightBlue p-5 rounded-2xl flex flex-col">
          <div className="flex flex-col text-center items-center gap-4">
            <div className="bg-lightBlue2 p-3 rounded-full">
              <User size={50} color="#2985ff" />
            </div>
            <h5 className="font-bold text-neutral text-xl">
              Отзыв Марины. Сделали за 42 дня.
            </h5>
          </div>
          <a
            target="_blank"
            href="https://www.youtube.com/shorts/w32KC3Vkgp8"
            className="mt-auto btn btn-primary w-full font-semibold text-lg"
          >
            <Play size={18} />
            Посмотреть
          </a>
        </div>

        <div className="w-full sm:max-w-[290px] min-h-[290px] bg-lightYellow p-5 rounded-2xl flex flex-col">
          <div className="flex flex-col text-center items-center gap-4">
            <div className="bg-lightYellow2 p-3 rounded-full">
              <User size={50} color="#ffd785" />
            </div>
            <h5 className="font-bold text-neutral text-xl">
              Светлане сделали за <br /> 33 дня.
            </h5>
          </div>
          <a
            target="_blank"
            href="https://www.youtube.com/shorts/6t_zsJXiWeE"
            className="mt-auto btn btn-primary w-full font-semibold text-lg"
          >
            <Play size={18} />
            Посмотреть
          </a>
        </div>

        <div className="w-full sm:max-w-[290px] min-h-[290px] bg-lightBlue p-5 rounded-2xl flex flex-col">
          <div className="flex flex-col text-center items-center gap-4">
            <div className="bg-lightBlue2 p-3 rounded-full">
              <User size={50} color="#2985ff" />
            </div>
            <h5 className="font-bold text-neutral text-xl">
              Андрею сделали за <br /> 44 дня.
            </h5>
          </div>
          <a
            target="_blank"
            href="https://www.youtube.com/shorts/gRwImp3k7T8"
            className="mt-auto btn btn-primary w-full font-semibold text-lg"
          >
            <Play size={18} />
            Посмотреть
          </a>
        </div>

        <div className="w-full sm:max-w-[290px] min-h-[290px] bg-lightYellow p-5 rounded-2xl flex flex-col">
          <div className="flex flex-col text-center items-center gap-4">
            <div className="bg-lightYellow2 p-3 rounded-full">
              <User size={50} color="#ffd785" />
            </div>
            <h5 className="font-bold text-neutral text-xl">
              Зарине открыли компанию и сделали ВНЖ за 58 дней.
            </h5>
          </div>
          <a
            target="_blank"
            href="https://www.youtube.com/shorts/1WtkoqRAyf0"
            className="mt-auto btn btn-primary w-full font-semibold text-lg"
          >
            <Play size={18} />
            Посмотреть
          </a>
        </div>
      </div> */}

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
