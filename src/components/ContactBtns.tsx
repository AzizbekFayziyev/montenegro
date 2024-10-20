import React from "react";

const ContactBtns = () => {
  return (
    <div className="flex gap-4 justify-center flex-wrap mt-8">
      <a className="btn btn-primary btn-lg text-xl" href="https://t.me/+79255074559" target="_blank">
        <img width={30} src="/tg.svg" alt="telegram" /> TELEGRAM
      </a>
      <a
        className="btn btn-success text-white btn-lg text-xl"
        href="https://wa.me/+38268757078"
        target="_blank"
      >
        <img width={30} src="/wa.svg" alt="whatsapp" /> WHATSAPP
      </a>
    </div>
  );
};

export default ContactBtns;
