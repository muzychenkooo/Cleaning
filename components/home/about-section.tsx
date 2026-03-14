import { Container } from '@/components/layout/container';
import { VideoWithOverlay } from '@/components/ui/VideoWithOverlay';
import { assetUrl } from '@/lib/asset-url';

/** Card border/shadow tokens aligned with "Почему клиенты выбирают нас" and "Наши услуги". */
const CARD_CLASS =
  'rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 overflow-hidden';

export function AboutSection() {
  return (
    <section id="o-nas" className="w-full py-16 sm:py-24 scroll-mt-20">
      <Container>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          О компании «Большая Уборка»
        </h2>

        <div className="mt-8 grid gap-5 sm:gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Left: text card — SEO-оптимизированный текст, равный по визуальному весу с видео */}
          <div className={`flex min-h-0 flex-col ${CARD_CLASS} p-5 sm:p-6 lg:p-7`}>
            <p className="text-slate-600 leading-relaxed">
              <strong>«Большая Уборка»</strong> — это современная клининговая компания, которая уже более 8 лет обеспечивает безупречную чистоту в домах, квартирах, офисах и коммерческих помещениях Москвы и Подмосковья. Мы берём на себя все заботы о порядке, чтобы вы могли сосредоточиться на действительно важных делах.
            </p>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Мы выполняем любые виды клининговых услуг в помещениях любого типа и площади:
            </p>
            <ul className="mt-2.5 space-y-2.5 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary-600 font-bold shrink-0">•</span>
                генеральная уборка или после ремонта и строительства;
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary-600 font-bold shrink-0">•</span>
                уборка квартир, домов, дезинфекция и озонирование;
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary-600 font-bold shrink-0">•</span>
                клининг офисов, бизнес‑центров, магазинов и торговых залов;
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary-600 font-bold shrink-0">•</span>
                мытьё окон, фасадов и остеклённых конструкций любой сложности;
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary-600 font-bold shrink-0">•</span>
                химчистка мягкой мебели, ковров и текстильных покрытий.
              </li>
            </ul>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Работаем с объектами от небольших студий до крупных складов и производственных цехов.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Опытные специалисты, профессиональное оборудование, гарантия качества, прозрачные цены, ответственность за имущество и быстрый выезд.
            </p>
          </div>

          {/* Right: square video без рамки; на мобильной — меньше, остаётся квадрат */}
          <div className="flex min-h-0 items-center justify-center p-4 sm:p-5">
            <div className="aspect-square w-full min-w-0 max-w-[280px] overflow-hidden rounded-xl bg-slate-900 sm:max-w-[380px] lg:max-w-[460px]">
              <VideoWithOverlay
                src={assetUrl('/assets/about/about-video.mp4')}
                poster={assetUrl('/assets/about/about-video-poster.png')}
                label="Видео о компании Большая Уборка"
                wrapperClassName="h-full w-full"
                videoClassName="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
