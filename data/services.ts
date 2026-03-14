export type ServiceCategory = 'individuals' | 'business';

export const serviceCategories = [
  { id: 'individuals' as const, label: 'Для частных клиентов', slug: 'chastnym-klientam' },
  { id: 'business' as const, label: 'Для бизнеса', slug: 'yuridicheskim-licam' },
];

/**
 * SEO keyword intent (Наши услуги block):
 * Primary: уборка квартиры цена, клининг Москва, генеральная уборка, уборка после ремонта, уборка офиса, мойка окон, химчистка мебели, уборка коттеджа.
 * Secondary: заказать, стоимость, рассчитать, выезд, чек-лист, под ключ, регулярная, МО.
 * Per-card: 1–2 core phrases + LSI; geo (Москва/МО) where natural; no keyword stuffing.
 */

export const services = [
  {
    id: 'uborka-kvartir',
    slug: 'uborka-kvartir',
    title: 'Уборка квартир',
    shortDesc: 'Профессиональный клининг квартиры любой площади опытными клинерами. Гарантия качества. ЭКО средства.',
    category: 'individuals' as const,
    featured: true,
  },
  {
    id: 'uborka-domov',
    slug: 'uborka-domov',
    title: 'Уборка частных домов',
    shortDesc: 'Генеральная уборка, сезонная, или клининг коттеджа после ремонта под ключ. Выезжаем по всей МО.',
    category: 'individuals' as const,
    featured: true,
  },
  {
    id: 'mojka-okon',
    slug: 'mojka-okon',
    title: 'Мойка окон и фасадов',
    shortDesc: 'Мытье окон любой сложности. Очистка фасадов от загрязнений. Высотные работы выполняют альпинисты.',
    category: 'individuals' as const,
    featured: true,
  },
  {
    id: 'himchistka',
    slug: 'himchistka',
    title: 'Химчистка',
    shortDesc: 'Профессиональная химчистка мебели, ковров, матрасов. Удаление пятен. ЭКО средства.',
    category: 'individuals' as const,
    featured: true,
  },
  {
    id: 'ozonirovanie',
    slug: 'ozonirovanie',
    title: 'Озонирование',
    shortDesc: 'Озонирование помещений для дезинфекции и удаления запахов. Выезд в Москве и МО.',
    category: 'individuals' as const,
    featured: false,
  },
  {
    id: 'udalenie-zapahov',
    slug: 'udalenie-zapahov',
    title: 'Удаление запахов',
    shortDesc: 'Удаление стойких запахов в квартирах и домах. Профессиональная обработка, расчёт по заявке.',
    category: 'individuals' as const,
    featured: false,
  },
  {
    id: 'dezinfekciya',
    slug: 'dezinfekciya',
    title: 'Дезинфекция',
    shortDesc: 'Дезинфекция жилых и нежилых помещений. Закажите выезд специалиста в Москве и области.',
    category: 'individuals' as const,
    featured: false,
  },
  {
    id: 'uborka-ofisov',
    slug: 'uborka-ofisov',
    title: 'Уборка офиса',
    shortDesc: 'Чистый офис = довольные клиенты и сотрудники. Любое помещение будет сиять всего за 1 день.',
    category: 'business' as const,
    featured: true,
  },
  {
    id: 'uborka-skladov',
    slug: 'uborka-skladov',
    title: 'Уборка склада',
    shortDesc: 'Клининг складских помещений любой сложности. Механизированная уборка. Профессионально, качественно и в срок.',
    category: 'business' as const,
    featured: true,
  },
  {
    id: 'uborka-fasadov',
    slug: 'uborka-fasadov',
    title: 'Мойка фасадов и вывесок',
    shortDesc: 'Сезонная очистка фасадов любых зданий от атмосферных загрязнений. Вернём вывескам яркость и блеск.',
    category: 'business' as const,
    featured: true,
  },
  {
    id: 'uborka-proizvodstvo',
    slug: 'uborka-proizvodstvo',
    title: 'Уборка на производстве',
    shortDesc: 'Профессиональная уборка в цехе. Порядок без остановки рабочих процессов. Клининг по ГОСТ Р 58394—2019.',
    category: 'business' as const,
    featured: true,
  },
  {
    id: 'mojka-okon-alpinizm',
    slug: 'mojka-okon-alpinizm',
    title: 'Мытье окон и фасадов',
    shortDesc: 'Мойка остекления и фасадов, в том числе альпинистами. Расчёт стоимости для бизнеса в Москве и МО.',
    category: 'business' as const,
    featured: false,
  },
  {
    id: 'uborka-zhilkompleksov',
    slug: 'uborka-zhilkompleksov',
    title: 'Уборка жилых комплексов или подъездов',
    shortDesc: 'Уборка общих зон ЖК и подъездов. Регулярный клининг по договору, расчёт под объект.',
    category: 'business' as const,
    featured: false,
  },
  {
    id: 'uborka-magazina',
    slug: 'uborka-magazina',
    title: 'Уборка магазина или шоурума',
    shortDesc: 'Клининг торговых помещений и шоурумов. Закажите уборку и расчёт стоимости в Москве и МО.',
    category: 'business' as const,
    featured: false,
  },
  {
    id: 'uborka-kafe',
    slug: 'uborka-kafe',
    title: 'Уборка в кафе/ресторане',
    shortDesc: 'Уборка в кафе и ресторанах. Регулярная и разовая, расчёт под график и площадь.',
    category: 'business' as const,
    featured: false,
  },
  {
    id: 'uborka-parkovki',
    slug: 'uborka-parkovki',
    title: 'Уборка на парковке',
    shortDesc: 'Клининг парковок и прилегающих территорий. Стоимость и выезд под объект в Москве и области.',
    category: 'business' as const,
    featured: false,
  },
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(category?: ServiceCategory) {
  const featured = services.filter((s) => s.featured);
  return category ? featured.filter((s) => s.category === category) : featured;
}
