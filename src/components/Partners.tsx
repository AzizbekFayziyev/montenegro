import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="my-20">
      <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
        Так же поможем с:
        <img
          src="/lines/line4.svg"
          alt="line"
          className="absolute right-0 -bottom-2"
        />
      </h2>

      <div className="wrapper">
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            ⁠Справка об отсутствии судимости.
          </div>

          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            Справка об отсутствии ОМС в РФ.
          </div>

          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            Перевод документов.
          </div>

          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            Нотариальное удостоверение и заверение документов.
          </div>

          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            Получение или восстановление справок об отсутствии судимости,
            свидетельств о рождении, свидетельств о заключении или расторжении
            брака.
          </div>

          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            Открытие банковского счёта (или карты VISA\Mastercard) без
            ограничений и препятствий.
          </div>

          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            Помощь в выводе, переводе, сохранении, инвестировании, обмене
            денежных средств.
          </div>

          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            Есть премиум сопровождение с страхованием от отказа в получении ВНЖ!
          </div>

          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            Есть услуги по получению, оформлению, восстановлению, переводу и
            нотариальному заверению документов.
          </div>

          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            Возможна оплата рублями, евро, криптовалютой или любым другим
            образом.
          </div>

          <div className="bg-lightBlue p-3 rounded-2xl gird place-content-center max-w-[300px] text-center text-lg font-semibold">
            Трансфер.
          </div>
        </div>

        <div className="mt-8 border-l-4 pl-2 border-l-primary font-bold text-lg">
          Открытие фирмы или подбор недвижимости мы сможем начать без вашего
          физического присутствия в Черногории после предоплаты. На подаче
          документов для получения ВНЖ вам нужно будет присутствовать, чтобы
          взять у вас биометрию (биометрия — это система идентификации и
          распознавания человека с помощью отличительных физических
          характеристик, которые уникальны для каждого человека: отпечаток
          пальца, фотография лица или тела). Ваш второй и заключительный поход в
          МУП будет уже для получения ВНЖ Черногории, примерно через 20-30 дней
          после подачи. То есть, у вас будет 2 выезда в органы.
        </div>
      </div>
    </section>
  );
};

export default Partners;
