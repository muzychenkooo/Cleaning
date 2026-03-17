import Link from 'next/link';
import { Container } from '@/components/layout/container';
import type { RelatedLink } from '@/data/service-content';

type Props = {
  links: RelatedLink[];
};

export function ServiceCrossLinks({ links }: Props) {
  if (!links?.length) return null;

  const primary = links.slice(0, 5);
  const secondary = links.slice(5);

  return (
    <section className="py-8 sm:py-10 border-t border-slate-200">
      <Container>
        <h2 className="text-xl font-semibold text-slate-900">С этим заказывают</h2>
        <ul className="mt-3 flex flex-wrap gap-3">
          {primary.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {secondary.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">Полезные ссылки</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {secondary.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
