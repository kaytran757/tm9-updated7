/* ─── Shared premium table + UI helpers for article pages ─── */

export function CornerOrnaments() {
  return (
    <>
      <span className="absolute left-2 top-2 h-6 w-6 border-l border-t border-brand-gold/60" aria-hidden="true" />
      <span className="absolute right-2 top-2 h-6 w-6 border-r border-t border-brand-gold/60" aria-hidden="true" />
      <span className="absolute bottom-2 left-2 h-6 w-6 border-b border-l border-brand-gold/60" aria-hidden="true" />
      <span className="absolute bottom-2 right-2 h-6 w-6 border-b border-r border-brand-gold/60" aria-hidden="true" />
    </>
  );
}

type Column = {
  label: string;
  align?: 'left' | 'center';
  className?: string;
};

export function PremiumTable({ columns, rows }: { columns: Column[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-gold/40 bg-white p-3 shadow-md sm:p-4">
      <CornerOrnaments />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-brand-gold/50">
              {columns.map((col) => (
                <th
                  key={col.label}
                  className={`px-4 py-3 font-sans text-xs font-bold uppercase tracking-wide text-brand-gold-deep sm:px-6 ${
                    col.align === 'center' ? 'text-center' : 'text-left'
                  } ${col.className ?? ''}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-brand-gold/15 transition-colors hover:bg-brand-gold/5 ${
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3.5 font-sans text-sm text-gray-700 sm:px-6 ${
                      columns[cellIndex]?.align === 'center' ? 'text-center' : 'text-left'
                    } ${columns[cellIndex]?.className ?? ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function GoldImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8">
      <div className="relative mx-auto max-w-md overflow-hidden rounded-xl border border-brand-gold/60 bg-white p-2 shadow-xl shadow-black/15">
        <img src={src} alt={alt} className="block h-[260px] w-full rounded-lg object-cover sm:h-[340px]" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-sans text-sm font-semibold text-brand-gold-deep">{caption}</figcaption>
      )}
    </figure>
  );
}

export function GoldNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 border-l-2 border-brand-gold-deep pl-4 font-sans text-sm italic leading-relaxed text-gray-600">
      {children}
    </p>
  );
}

export function GoldBullet({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-gray-700">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-gold-deep" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-display text-2xl text-brand-red sm:text-3xl">{children}</h2>
  );
}

export function IntroText({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-base leading-[1.85] text-gray-700">{children}</p>
  );
}

export function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 font-sans text-base leading-[1.85] text-gray-700">{children}</p>
  );
}

export function CtaButton({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-8 border-t border-brand-gold/30 pt-8">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[48px] items-center rounded-full bg-brand-gold px-8 py-4 font-sans text-base font-bold text-brand-brown shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-deep hover:text-white"
      >
        {label}
      </a>
    </div>
  );
}

/* ─── Shared diacritic-insensitive normalize for search ─── */
export function normalizeVietnamese(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/Đ/g, 'D')
    .replace(/đ/g, 'd')
    .toLowerCase()
    .trim();
}
