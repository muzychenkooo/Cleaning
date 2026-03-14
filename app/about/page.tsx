import Link from 'next/link';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { Container } from '@/components/layout/container';
import { site, baseUrl } from '@/data/site';

export const metadata: Metadata = {
  title: 'О компании',
  description: `О клининговой компании ${site.name}: команда, оборудование, подход к работе.`,
  openGraph: {
    title: 'О компании | ' + site.name,
    url: `${baseUrl}/about/`,
    locale: 'ru_RU',
  },
  alternates: { canonical: `${baseUrl}/about/` },
};

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'О компании' }]} />
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          О компании
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          {site.name} — профессиональная клининговая компания. Работаем с частными клиентами и организациями в Москве и Московской области.
        </p>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Кто мы и чем занимаемся</h2>
            <p className="mt-2 text-slate-600">
              Более 8 лет оказываем услуги профессиональной уборки в Москве и Московской области. Полный спектр клининга: уборка квартир, частных домов, офисов и коммерческих помещений, уборка после ремонта, мойка окон и фасадов, химчистка мебели и ковров. Работаем с частными лицами и юридическими лицами. Выезд на объект, расчёт стоимости по заявке, оплата по факту после проверки качества.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Услуги и география</h2>
            <p className="mt-2 text-slate-600">
              Уборка квартир и домов, офисов, складов, производственных помещений; мойка окон и фасадов; химчистка; дезинфекция и озонирование. Работаем по Москве и Московской области — выезд в любой район и пригород в зоне обслуживания.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Наши преимущества</h2>
            <ul className="mt-2 space-y-2 text-slate-600 list-disc list-inside">
              <li>Опытные специалисты, обучение и контроль качества</li>
              <li>Профессиональное оборудование и безопасные средства для уборки</li>
              <li>Гарантия качества работ</li>
              <li>Гибкий график выезда под ваши задачи</li>
              <li>Прозрачное ценообразование, без скрытых платежей</li>
              <li>Ответственность за сохранность имущества клиента</li>
              <li>Быстрая подача бригады, оперативный расчёт по заявке</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Наши ценности</h2>
            <p className="mt-2 text-slate-600">
              Честность в отношениях с клиентами, качество результата и соблюдение договорённостей. Мы ценим ваше время и доверие: чёткие сроки, предсказуемые цены, аккуратность на объекте.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-900">География работы</h2>
            <p className="mt-2 text-slate-600">
              Москва и Московская область — основная зона работы. Выезжаем в любые районы Москвы и в города и населённые пункты МО. Точные условия и стоимость выезда уточняйте при заявке.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Как мы работаем</h2>
            <ol className="mt-2 space-y-2 text-slate-600 list-decimal list-inside">
              <li>Заявка по сайту, телефону или мессенджеру</li>
              <li>Уточнение параметров объекта и пожеланий, расчёт стоимости</li>
              <li>При необходимости — бесплатный выезд для осмотра и точной сметы</li>
              <li>Согласование даты и времени, приезд бригады</li>
              <li>Выполнение работ, проверка качества, при необходимости — доработка</li>
              <li>Оплата по факту; договор, акты и чек — по запросу</li>
            </ol>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Команда и оборудование</h2>
            <p className="mt-2 text-slate-600">
              В команде — опытные клинеры с необходимыми навыками. Используем профессиональную технику и сертифицированные безопасные средства. Это позволяет выполнять уборку быстрее и качественнее и давать гарантию на результат.
            </p>
          </section>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/contacts/"
            className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700"
          >
            Контакты
          </Link>
          <a
            href={`tel:+${site.phoneRaw}`}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {site.phone}
          </a>
        </div>
      </Container>
    </div>
  );
}
