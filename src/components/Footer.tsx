import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral mt-0">
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

              <a href="tel:+38268757078">
                <li className="list-none text-base flex gap-2 items-center my-1 -ml-3">
                   <PhoneCall color="#2985ff" /> +38268757078
                </li>
              </a>
            </nav>
            <nav>
              <h6 className="text-lg mb-4 font-bold">Мессенджеры</h6>

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
            <nav className="flex flex-col gap-2">
            <a className="text-gray-300" href="/Политика конфиденциальности vnj-chernogoria.com.docx">
              Политика конфиденциальности
            </a>
            <a className="text-gray-300" href="/Публичная офферта vnj-chernogoria.com.docx">
              Публичная офферта
            </a>
          </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
