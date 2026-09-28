type Props = {
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  /** light = nền sáng (kem/trắng) · dark = nền tối/lightbox */
  tone?: 'light' | 'dark';
};

/** Hình 4 cánh (四叶) — 4 cung tròn nối nhau, giống mẫu. */
const QUATREFOIL =
  'M5.2 5.2A7.05 7.05 0 0 1 18.8 5.2A7.05 7.05 0 0 1 18.8 18.8A7.05 7.05 0 0 1 5.2 18.8A7.05 7.05 0 0 1 5.2 5.2Z';

/**
 * Nút chuyển slide dạng hoa 4 cánh.
 * Chưa chọn: chỉ có viền, bên trong trắng/rỗng. Đang chọn: tô đặc bên trong.
 */
export default function QuatrefoilDot({ active, onClick, label, tone = 'light' }: Props) {
  const shape =
    tone === 'light'
      ? active
        ? 'fill-brand-gold-deep stroke-brand-gold-deep'
        : 'fill-white stroke-brand-gold-deep/70 group-hover:stroke-brand-gold-deep'
      : active
        ? 'fill-brand-gold stroke-brand-gold'
        : 'fill-transparent stroke-white/60 group-hover:stroke-brand-gold';

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-label={label}
      onClick={onClick}
      className="group inline-flex h-6 w-6 items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
    >
      <svg
        viewBox="-1 -1 26 26"
        className={`h-5 w-5 transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}
        aria-hidden="true"
      >
        <path d={QUATREFOIL} strokeWidth="1.7" strokeLinejoin="round" className={`transition-colors duration-300 ${shape}`} />
      </svg>
    </button>
  );
}
