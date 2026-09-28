import { useId } from 'react';
import type { CSSProperties, ReactNode } from 'react';

type Tone = 'red' | 'cream';

type Props = {
  children: ReactNode;
  /** red = nền đỏ + viền vàng (như mẫu) · cream = nền kem + viền vàng đồng */
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
};

const TONES: Record<Tone, { bg: string; knotFill: string; outer: string; inner: string }> = {
  red: {
    bg: 'bg-gradient-to-b from-[#9A2424] to-[#7A1818]',
    knotFill: '#8B1E1E',
    outer: 'border-brand-gold',
    inner: 'border-brand-gold/40',
  },
  cream: {
    bg: 'bg-brand-ivory',
    knotFill: '#FFF8E7',
    outer: 'border-brand-gold-deep',
    inner: 'border-brand-gold-deep/35',
  },
};

/**
 * Nút góc kiểu hồi văn (回纹): khung vuông đôi + đường xoắn vuông ở giữa.
 * Tô gradient vàng kim loại lấy từ <defs> của ChineseFrame (theo gradientId).
 */
function CornerKnot({
  className,
  gradientId,
  fill,
}: {
  className: string;
  gradientId: string;
  fill: string;
}) {
  const stroke = `url(#${gradientId})`;
  return (
    <svg
      viewBox="0 0 44 44"
      className={`pointer-events-none absolute z-10 h-9 w-9 sm:h-11 sm:w-11 ${className}`}
      aria-hidden="true"
    >
      <rect x="1.5" y="1.5" width="41" height="41" fill={fill} stroke={stroke} strokeWidth="3" />
      <rect x="6.5" y="6.5" width="31" height="31" fill="none" stroke={stroke} strokeWidth="1" />
      <path
        d="M12 32V12H32V27H19V19H25"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

/**
 * Khung trang trí phong cách Trung Hoa: viền vàng đôi + 4 nút hồi văn ở góc.
 * Dùng bọc bất kỳ nội dung nào (card, banner...).
 */
export default function ChineseFrame({ children, tone = 'red', className = '', style }: Props) {
  const gradientId = `cf-gold-${useId().replace(/:/g, '')}`;
  const t = TONES[tone];

  return (
    <div className={`relative ${t.bg} ${className}`} style={style}>
      {/* gradient vàng kim loại dùng chung cho 4 góc */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="44"
            y2="44"
          >
            <stop offset="0%" stopColor="#FDE4B0" />
            <stop offset="50%" stopColor="#E0A34A" />
            <stop offset="100%" stopColor="#FAC775" />
          </linearGradient>
        </defs>
      </svg>

      {/* viền ngoài + viền trong mảnh */}
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 border-2 ${t.outer}`} />
      <div aria-hidden="true" className={`pointer-events-none absolute inset-[7px] border ${t.inner}`} />

      <CornerKnot gradientId={gradientId} fill={t.knotFill} className="-left-px -top-px" />
      <CornerKnot gradientId={gradientId} fill={t.knotFill} className="-right-px -top-px rotate-90" />
      <CornerKnot gradientId={gradientId} fill={t.knotFill} className="-bottom-px -left-px -rotate-90" />
      <CornerKnot gradientId={gradientId} fill={t.knotFill} className="-bottom-px -right-px rotate-180" />

      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
