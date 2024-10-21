// Navbar links

type navLink = {
  title: string;
  path: string;
};

export const NavLinks: navLink[] = [
  {
    title: "Главная",
    path: "#",
  },
  {
    title: "Услуги",
    path: "#advantages",
  },
  {
    title: "Отзывы",
    path: "#reviews",
  },
  {
    title: "О нас",
    path: "#about",
  },
  {
    title: "Контакты",
    path: "#contacts"
  }
];

// Tour card slides

type tourCard = {
  img: string;
  title: string;
  price: number;
  day: number;
};

export const TourCards: tourCard[] = [
  {
    img: "/heroSlides/2.png",
    title: "Сделать ВНЖ по бизнесу",
    price: 500,
    day: 40,
  },
  {
    img: "/heroSlides/1.png",
    title: "Сделать ВНЖ по недвижимости",
    price: 500,
    day: 30,
  },
  {
    img: "/heroSlides/3.png",
    title: "Помощь в сборе документов на ВНЖ",
    price: 500,
    day: 20,
  },
  {
    img: "/heroSlides/4.png",
    title: "Подать документы на ВНЖ",
    price: 500,
    day: 2,
  },
];

// review cards

type reviewCard = {
  comment: string;
  authorName: string;
  authorPic: string;
  authorLocation: string;
};

export const reviewCards: reviewCard[] = [
  {
    comment:
      "Наше путешествие в Шарм-эль-Шейх с Royaltour было невероятным! Я хочу выразить огромную благодарность агентству за великолепную организацию. От момента бронирования до возвращения домой всё было на высшем уровне. Прекрасный отель, потрясающий пляж и увлекательные экскурсии — всё это сделало наш отдых незабываемым",
    authorName: "Абдувалиев Абдулазиз",
    authorLocation: "Ташкент , Узбекистан",
    authorPic: "/reviews/profile.png",
  },
  {
    comment:
      "Наше путешествие в Шарм-эль-Шейх с Royaltour было невероятным! Я хочу выразить огромную благодарность агентству за великолепную организацию. От момента бронирования до возвращения домой всё было на высшем уровне. Прекрасный отель, потрясающий пляж и увлекательные экскурсии — всё это сделало наш отдых незабываемым",
    authorName: "Абдувалиев Абдулазиз",
    authorLocation: "Ташкент , Узбекистан",
    authorPic: "/reviews/profile.png",
  },
  {
    comment:
      "Наше путешествие в Шарм-эль-Шейх с Royaltour было невероятным! Я хочу выразить огромную благодарность агентству за великолепную организацию. От момента бронирования до возвращения домой всё было на высшем уровне. Прекрасный отель, потрясающий пляж и увлекательные экскурсии — всё это сделало наш отдых незабываемым",
    authorName: "Абдувалиев Абдулазиз",
    authorLocation: "Ташкент , Узбекистан",
    authorPic: "/reviews/profile.png",
  },
  {
    comment:
      "Наше путешествие в Шарм-эль-Шейх с Royaltour было невероятным! Я хочу выразить огромную благодарность агентству за великолепную организацию. От момента бронирования до возвращения домой всё было на высшем уровне. Прекрасный отель, потрясающий пляж и увлекательные экскурсии — всё это сделало наш отдых незабываемым",
    authorName: "Абдувалиев Абдулазиз",
    authorLocation: "Ташкент , Узбекистан",
    authorPic: "/reviews/profile.png",
  },
  {
    comment:
      "Наше путешествие в Шарм-эль-Шейх с Royaltour было невероятным! Я хочу выразить огромную благодарность агентству за великолепную организацию. От момента бронирования до возвращения домой всё было на высшем уровне. Прекрасный отель, потрясающий пляж и увлекательные экскурсии — всё это сделало наш отдых незабываемым",
    authorName: "Абдувалиев Абдулазиз",
    authorLocation: "Ташкент , Узбекистан",
    authorPic: "/reviews/profile.png",
  },
];
