import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-primary">
      <div className="wrapper">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between text-white text-center lg:text-left">
          <div className="max-w-[680px] py-10 sm:px-10">
            <h3 className="text-3xl font-bold">Консультация</h3>

            <p className="my-6">
              Расширенная консультация специалиста по оформлению
              документов/выбору наиболее выгодного основания для ВНЖ, налогам и
              сборам, выбору недвижимости, открытию бизнеса (длительность от 30
              до 50 минут).
            </p>

            <Link target="_blank" href="https://t.me/+79255074559">
              <button className="btn btn-secondary px-6 text-base text-neutral">
              Заказать услугу
              </button>
            </Link>
          </div>

          <Image
            className="lg:mt-6"
            src="/bannerHero.png"
            alt="banner image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
