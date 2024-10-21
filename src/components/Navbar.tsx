"use client";
import { NavLinks } from "@/constants";
import {
  FacebookIcon,
  InstagramIcon,
  Mail,
  MapPin,
  Menu,
  PhoneCall,
  Send,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="bg-white fixed top-0 left-0 w-full z-50">
        <nav className="navbar wrapper">
          <button onClick={toggleMenu} className="navbar-start lg:hidden">
            {isMenuOpen ? (
              <X color="#142657" size={30} />
            ) : (
              <Menu color="#142657" size={30} />
            )}
          </button>

          <div className="navbar-start gap-2 mr-4 lg:mr-0 sm:text-2xl text-lg font-medium uppercase">
            <img
              className="rounded-full border"
              width={50}
              src="/logo.jpg"
              alt="logo"
            />
            <h1 className="whitespace-nowrap">
              <span className="font-bold">Роял</span> ВНЖ
            </h1>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-8 px-1">
              {NavLinks.map((link, id) => (
                <li key={id}>
                  <Link
                    className="text-lg hover:text-primary  transition-colors"
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <Link
              href="https://t.me/+79255074559"
              target="_blank"
              className="sm:btn sm:btn-primary"
            >
              <Send className="block sm:hidden" color="#2985ff" size={24} />

              <span className="sm:block hidden">
                <Send color="#fff" size={20} />
              </span>

              <span className="hidden sm:block">Получить ВНЖ</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}

      <nav
        className={`${
          isMenuOpen
            ? "opacity-100 -translate-x-0 z-40 pointer-events-auto"
            : "opacity-0 -z-10 pointer-events-none -translate-x-44"
        } fixed w-[80%] h-full bg-neutral text-white p-5 flex flex-col justify-between transition-all`}
      >
        <ul className="flex flex-col gap-6 mt-16">
          {NavLinks.map((link, id) => (
            <li onClick={toggleMenu} key={id}>
              <Link
                className="text-lg hover:text-primary  transition-colors"
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <nav>
            <h6 className="text-lg mb-4 font-bold">Контакты</h6>

            <a href="tel:+38268757078">
              <li className="list-none text-base flex gap-2 items-center my-1 -ml-3">
                 <PhoneCall color="#2985ff" /> +38268757078
              </li>
            </a>
          </nav>
          <nav className="mt-8">
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
          <nav className="flex flex-col gap-2 mt-6">
            <a className="text-gray-300" href="/Политика конфиденциальности vnj-chernogoria.com.docx">
              Политика конфиденциальности
            </a>
            <a className="text-gray-300" href="/Публичная офферта vnj-chernogoria.com.docx">
              Публичная офферта
            </a>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
