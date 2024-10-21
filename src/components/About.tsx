import {
  FileCheck,
  Landmark,
  User,
  CreditCard,
  Map,
  Timer,
  Pill,
  Smile,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactBtns from "./ContactBtns";

const About = () => {
  const data = [
    {
      icon: <Landmark size={100} color="#2985ff" />,
      text: "подать заявление на открытие счета в европейском банке.",
    },
    {
      icon: <Map size={100} color="#2985ff" />,
      text: "свободно передвигаться по всей территории Черногории и безвизовое пересечение границы в несколько стран, как к себе домой.",
    },
    {
      icon: <FileCheck size={100} color="#2985ff" />,
      text: "открыть своё дело и платить налог на прибыль от предпринимательской деятельности в 9 %.",
    },
    {
      icon: <CreditCard size={100} color="#2985ff" />,
      text: "подать на упрощённую процедуру получения шенгенской визы.",
    },
    {
      icon: <Timer size={100} color="#2985ff" />,
      text: "находиться в Черногории неограниченно по времени.",
    },
    {
      icon: <Pill size={100} color="#2985ff" />,
      text: "пользоваться бесплатным медицинским обслуживанием.",
    },
    {
      icon: <Smile size={100} color="#2985ff" />,
      text: "жить в спокойной стране с морем, солнцем, горами с низким уровнем преступности и дружелюбными местными жителями славянами.",
    },
  ];

  return (
    <>
      <section className="mt-20">
        <div className="wrapper">
          <h2 className="text-center font-bold text-neutral text-3xl relative max-w-max mx-auto">
            Что даёт вид на жительство в Черногории?
            <img
              src="/lines/line2.svg"
              alt="line"
              className="absolute left-0 -bottom-1"
            />
          </h2>

          <h6 className="text-center mt-2 text-neutral">
            Вместе со статусом черногорского резидента (независимо от санкций)
            вы гарантированно можете:
          </h6>

          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            {data.map((e, id) => (
              <div
                key={id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white w-full sm:max-w-[290px] border "
              >
                <div className="p-4">
                  <div className="flex justify-center">{e.icon}</div>
                  <h4 className="mt-4 text-neutral text-lg font-bold mb-4 text-center">
                    {e.text}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-lightBlue py-10  my-14">
          <div className="wrapper text-center">
            <p className="font-bold text-neutral text-3xl max-w-[900px] mx-auto">
              Мы работаем давно, зарегистрированы официально, платим налоги и
              имеем репутацию. Если вам хочется получить ВНЖ Черногории
              побыстрее, без отказов и заморочек, то мы сможем это сделать!
              Пишите в WhatsApp или Telegram!
            </p>

            <ContactBtns />
          </div>
        </div>
      </section>

      <section id="about" className="mt-10">
        <h2 className="text-center font-bold text-neutral text-3xl relative w-max mx-auto">
          Кто мы?
          <img
            src="/lines/line5.svg"
            alt="line"
            className="absolute left-0 -bottom-2"
          />
        </h2>

        <div className="mt-8 bg-neutral flex flex-wrap xl:flex-nowrap">
          <Image
            className="w-full min-h-[200px] xl:h-auto xl:max-w-[800px] object-cover"
            src="/about.jpg"
            alt="royal tour image"
            width={960}
            height={480}
          />

          <div className="px-4 py-6 lg:px-8 lg:py-16">
            <p className="text-white xl:max-w-[570px]">
              Мы команда юристов и риелторов из РФ, Республики Беларусь и
              Украины. В 2022 году на базе агентства недвижимости "СMM
              MONTENEGRO" стали увеличиваться заявки на получение шенгенских
              виз, ВНЖ Черногории, банковских карт и по подбору недвижимости от
              русскоязычных клиентов.
              <br />
              <br />
              В следствии чего было создано отдельное русскоязычное направление
              по Черногории. Мы сотрудничаем с туристическими агентствами и
              отелями, в нашей команде есть бывшие сотрудники государственных
              органов Черногории. Поэтому мы регулярно успешно решаем, даже
              нестандартные задачи наших клиентов.
              <br />
              <br />
              Будьте бдительны! Ужесточение европейских стандартов и санкции
              против граждан РФ сократили количество лояльных стран. Многие
              посредники совершают ошибки или вовсе не исполняют обязательства.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
