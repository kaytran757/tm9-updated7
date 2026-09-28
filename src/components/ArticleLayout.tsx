import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

type ArticleLayoutProps = {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  updatedAt?: string;
  children: React.ReactNode;
};

export default function ArticleLayout({ title, breadcrumbs, updatedAt, children }: ArticleLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero — solid red so header text is always readable */}
      <section className="relative flex min-h-[42vh] w-full items-center justify-center overflow-hidden bg-brand-red px-6 pb-16 pt-28 sm:min-h-[48vh] sm:pt-32">
        <div className="pointer-events-none absolute -right-12 top-8 select-none font-display text-[16rem] leading-none text-white/[0.04] sm:text-[20rem]" aria-hidden="true">
          文
        </div>
        <Header />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl leading-tight text-brand-ivory sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {updatedAt && (
            <p className="mt-4 font-sans text-sm text-white/50">
              Cập nhật: {updatedAt}
            </p>
          )}
        </div>
      </section>

      {/* Breadcrumb bar */}
      <div className="border-b border-brand-gold/30 bg-brand-cream px-6 py-4">
        <nav className="mx-auto flex max-w-4xl flex-wrap items-center gap-1.5 font-sans text-xs text-gray-500 sm:text-sm" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3 w-3 text-brand-gold-deep/50" />}
              {crumb.href ? (
                <a href={crumb.href} className="font-semibold text-brand-gold-deep transition-colors hover:text-brand-red">
                  {crumb.label}
                </a>
              ) : (
                <span className="font-semibold text-brand-red">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Article body */}
      <article className="bg-brand-cream px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {children}
        </div>
      </article>

      <Footer enableFadeIn={false} />
      <FloatingContact />
    </div>
  );
}
