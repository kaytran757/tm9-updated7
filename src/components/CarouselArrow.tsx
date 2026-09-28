import { ArrowLeft, ArrowRight } from 'lucide-react';

type Props = {
  direction: 'prev' | 'next';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  disabled?: boolean;
  /** light = nền sáng (kem/trắng) · dark = nền tối/lightbox */
  tone?: 'light' | 'dark';
  /** class để định vị (absolute left-0 top-1/2 ...) */
  className?: string;
};

/** Viền huy hiệu dạng răng cưa tròn (16 cung nhỏ) — gợi hình đồng tiền/cửa sổ hoa văn. */
const SCALLOP =
  'M24.00 4.70A3.95 3.95 0 0 1 31.39 6.17A3.95 3.95 0 0 1 37.65 10.35A3.95 3.95 0 0 1 41.83 16.61A3.95 3.95 0 0 1 43.30 24.00A3.95 3.95 0 0 1 41.83 31.39A3.95 3.95 0 0 1 37.65 37.65A3.95 3.95 0 0 1 31.39 41.83A3.95 3.95 0 0 1 24.00 43.30A3.95 3.95 0 0 1 16.61 41.83A3.95 3.95 0 0 1 10.35 37.65A3.95 3.95 0 0 1 6.17 31.39A3.95 3.95 0 0 1 4.70 24.00A3.95 3.95 0 0 1 6.17 16.61A3.95 3.95 0 0 1 10.35 10.35A3.95 3.95 0 0 1 16.61 6.17A3.95 3.95 0 0 1 24.00 4.70Z';

const DOTS: [number, number][] = [
  [41, 24],
  [36.02, 36.02],
  [24, 41],
  [11.98, 36.02],
  [7, 24],
  [11.98, 11.98],
  [24, 7],
  [36.02, 11.98],
];

/**
 * Nút mũi tên carousel phong cách Trung Hoa: huy hiệu viền răng cưa,
 * vòng trong mảnh, 8 chấm trang trí; hover thì tô vàng.
 */
export default function CarouselArrow({
  direction,
  onClick,
  label,
  disabled = false,
  tone = 'light',
  className = '',
}: Props) {
  const dark = tone === 'dark';
  const Icon = direction === 'prev' ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`group grid h-11 w-11 place-items-center drop-shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-30 sm:h-12 sm:w-12 ${className}`}
    >
      <svg viewBox="0 0 48 48" className="col-start-1 row-start-1 h-full w-full" aria-hidden="true">
        <path
          d={SCALLOP}
          strokeWidth="1.6"
          strokeLinejoin="round"
          className={`transition-colors duration-300 group-hover:fill-brand-gold ${
            dark ? 'fill-black/35 stroke-brand-gold' : 'fill-brand-cream stroke-brand-gold-deep'
          }`}
        />
        <circle
          cx="24"
          cy="24"
          r="14.2"
          fill="none"
          strokeWidth="1"
          className={dark ? 'stroke-brand-gold/60' : 'stroke-brand-gold-deep/55'}
        />
        {DOTS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.95" className={dark ? 'fill-brand-gold' : 'fill-brand-gold-deep'} />
        ))}
      </svg>
      <Icon
        className={`col-start-1 row-start-1 h-[18px] w-[18px] transition-colors duration-300 group-hover:text-brand-brown sm:h-5 sm:w-5 ${
          dark ? 'text-white' : 'text-brand-gold-deep'
        }`}
        strokeWidth={2.2}
      />
    </button>
  );
}
