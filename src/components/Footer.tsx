import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral mt-20 sm:mt-0">
      <div className="wrapper">
        <footer className="flex justify-between flex-col lg:flex-row gap-12 lg:gap-72 text-white p-10 py-20">
          <aside>
            <div className="flex items-center gap-2 mr-4 lg:mr-0 text-2xl font-medium uppercase">
              <img
                className="rounded-full border"
                width={50}
                src="/logo.jpg"
                alt="logo"
              />
              <h1>
                <span className="font-bold">Роял</span> ВНЖ
              </h1>
            </div>

            <p className="mt-4 text-gray-400 whitespace-nowrap">
              © 2024 «Роял ВНЖ».
              <br />
              Все права защищены
            </p>
          </aside>

          <div className="flex flex-wrap gap-10 sm:gap-20">
            <nav>
              <h6 className="text-lg mb-4 font-bold">Контакты</h6>

              <li className="list-none text-base flex gap-2 items-center my-1 -ml-3">
                 <PhoneCall color="#2985ff" /> 8(929)940-54-54
              </li>

              <li className="list-none text-base flex gap-2 items-center my-4">
                <Mail color="#2985ff" /> Moi.glaza.vezde@yandex.ru
              </li>
            </nav>
            <nav>
              <h6 className="text-lg mb-4 font-bold">Соц. сети</h6>

              <div className="flex items-center gap-4">
                <Link
                  target="_blank"
                  className="bg-primary p-2 rounded-full"
                  href="https://t.me/+79255074559"
                >
                  <img width={28} src="/tg.svg" alt="telegram" />
                </Link>

                <Link
                  className="bg-success p-2 rounded-full"
                  href="https://wa.me/+38268757078"
                >
                  <img width={28} src="/wa.svg" alt="whatsapp" />
                </Link>
              </div>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
