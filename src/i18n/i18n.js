import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Simplifying Digitalization": "Simplifying Digitalization",
      "Creative studio at the intersection of art, design and technology aimed to simplify your digital experience.":
        "Creative studio at the intersection of art, design and technology aimed to simplify your digital experience.",
      "Consulting & Research": "Consulting & Research",
      "Our Consulting & Research service provides market analysis, insights, and recommendations for informed decisions.":
        "Our Consulting & Research service provides market analysis, insights, and recommendations for informed decisions.",
      "Software Design": "Software Design",
      "Turning requirements into user-friendly software interfaces that streamline tasks, boost productivity, and adhere to industry best practices.":
        "Turning requirements into user-friendly software interfaces that streamline tasks, boost productivity, and adhere to industry best practices.",
      "Hardware Design": "Hardware Design",
      "Innovating, optimizing, and crafting cutting-edge hardware designs that push technological boundaries and bring ideas to life.":
        "Innovating, optimizing, and crafting cutting-edge hardware designs that push technological boundaries and bring ideas to life.",
      "Our projects": "Our projects",
      "Projects we implemented Developed from scratch, Working on, Improving And will be doing better day by day":
        "Projects we implemented Developed from scratch, Working on, Improving And will be doing better day by day",
      "Soft Club": "Soft Club",
      "SoftClub.tj is an IT academy offering quick, intensive programming courses to turn beginners into professionals.":
        "SoftClub.tj is an IT academy offering quick, intensive programming courses to turn beginners into professionals.",
      "Rio": "Rio",
      "RIO.tj is a creative studio that specializes in digitalizing businesses through design, software, and hardware solutions":
        "RIO.tj is a creative studio that specializes in digitalizing businesses through design, software, and hardware solutions",
      "Web development": "Web development",
      "We professionally develop web pages - from landing pages to high scale online shops that will become leaders in their segments.":
        "We professionally develop web pages - from landing pages to high scale online shops that will become leaders in their segments.",
      "App Development": "App Development",
      "Developing modern mobile apps for Android and iOS systems with a simple, convenient, and attractive interface.":
        "Developing modern mobile apps for Android and iOS systems with a simple, convenient, and attractive interface.",
      "Technical Support": "Technical Support",
      "We update text and graphic content on web site, promptly correct mistakes, maintain and optimize web site in search engines (SEO).":
        "We update text and graphic content on web site, promptly correct mistakes, maintain and optimize web site in search engines (SEO).",
      "Automation": "Automation",
      "Introducing software and applications for easy and convenient way of process management alongside professional IT solutions.":
        "Introducing software and applications for easy and convenient way of process management alongside professional IT solutions.",
      "Design and Marketing": "Design and Marketing",
      "Mockups and concepts for offline and online advertising, handouts, identity development, content-marketing and SMM-consulting.":
        "Mockups and concepts for offline and online advertising, handouts, identity development, content-marketing and SMM-consulting.",
      "Development process according to world standards.":
        "Development process according to world standards.",
      "We would love to see as well your company on this worthy list. Quality and timeliness shouldn't even worry you. Everything will be amazing!":
        "We would love to see as well your company on this worthy list. Quality and timeliness shouldn't even worry you. Everything will be amazing!",
      "Request a call": "Request a call",
      "Profile": "Profile",
      "Read more": "Read more",
      "Portfolio": "Portfolio",
    },
  },
  ru: {
    translation: {
      "Simplifying Digitalization": "Упрощение цифровизации",
      "Creative studio at the intersection of art, design and technology aimed to simplify your digital experience.":
        "Креативная студия на пересечении искусства,<br/> дизайна и технологий, направленная на упрощение вашего цифрового опыта.",
      "Consulting & Research": "Консалтинг и исследования",
      "Our Consulting & Research service provides market analysis, insights, and recommendations for informed decisions.":
        "Наша услуга Консалтинг и исследования предоставляет анализ рынка, инсайты и рекомендации для принятия обоснованных решений.",
      "Software Design": "Проектирование ПО",
      "Turning requirements into user-friendly software interfaces that streamline tasks, boost productivity, and adhere to industry best practices.":
        "Преобразование требований в удобные интерфейсы программного обеспечения, которые оптимизируют задачи, повышают производительность и соответствуют лучшим отраслевым практикам.",
      "Hardware Design": "Проектирование аппаратного обеспечения",
      "Innovating, optimizing, and crafting cutting-edge hardware designs that push technological boundaries and bring ideas to life.":
        "Инновации, оптимизация и создание передовых аппаратных решений, которые расширяют технологические границы и воплощают идеи в жизнь.",
      "Our projects": "Наши проекты",
      "Projects we implemented Developed from scratch, Working on, Improving And will be doing better day by day":
        "Проекты, которые мы реализовали. Разработаны с нуля, продолжаем работать, улучшать и делать лучше день ото дня.",
      "Soft Club": "Софт Клуб",
      "SoftClub.tj is an IT academy offering quick, intensive programming courses to turn beginners into professionals.":
        "SoftClub.tj — это ИТ-академия, предлагающая быстрые и интенсивные курсы программирования, чтобы превратить новичков в профессионалов.",
      "Rio": "Рио",
      "RIO.tj is a creative studio that specializes in digitalizing businesses through design, software, and hardware solutions":
        "RIO.tj — это креативная студия, специализирующаяся на цифровизации бизнеса через дизайн, программные и аппаратные решения",
      "Web development": "Веб-разработка",
      "We professionally develop web pages - from landing pages to high scale online shops that will become leaders in their segments.":
        "Мы профессионально разрабатываем веб-страницы — от посадочных страниц до крупных интернет-магазинов, которые станут лидерами в своих сегментах.",
      "App Development": "Разработка приложений",
      "Developing modern mobile apps for Android and iOS systems with a simple, convenient, and attractive interface.":
        "Разработка современных мобильных приложений для систем Android и iOS с простым, удобным и привлекательным интерфейсом.",
      "Technical Support": "Техническая поддержка",
      "We update text and graphic content on web site, promptly correct mistakes, maintain and optimize web site in search engines (SEO).":
        "Мы обновляем текстовый и графический контент на сайте, оперативно исправляем ошибки, поддерживаем и оптимизируем сайт в поисковых системах (SEO).",
      "Automation": "Автоматизация",
      "Introducing software and applications for easy and convenient way of process management alongside professional IT solutions.":
        "Внедрение программного обеспечения и приложений для легкого и удобного управления процессами вместе с профессиональными ИТ-решениями.",
      "Design and Marketing": "Дизайн и маркетинг",
      "Mockups and concepts for offline and online advertising, handouts, identity development, content-marketing and SMM-consulting.":
        "Макеты и концепции для офлайн и онлайн рекламы, раздаточные материалы, разработка фирменного стиля, контент-маркетинг и SMM-консалтинг.",
      "Development process according to world standards.":
        "Процесс разработки в соответствии с мировыми стандартами.",
      "We would love to see as well your company on this worthy list. Quality and timeliness shouldn't even worry you. Everything will be amazing!":
        "Мы также хотели бы видеть вашу компанию в этом достойном списке. Качество и своевременность не должны вас беспокоить. Всё будет замечательно!",
      "Request a call": "Запросить звонок",
      "Profile": "Профиль",
      "Read more": "Читать далее",
      "Portfolio": "Портфолио",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en", // fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
