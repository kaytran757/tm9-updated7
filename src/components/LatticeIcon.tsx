import latticeUrl from '@/assets/images/hoavan/lattice-medallion.svg';

type Props = {
  /** dark = đỏ (nền sáng) · light = vàng (nền đỏ) */
  tone?: 'dark' | 'light';
  className?: string;
};

/**
 * Biểu tượng cửa sổ hoa văn tròn (窗花) dùng thay cho hình thoi ở các heading.
 * Vẽ bằng CSS mask nên đổi màu theo tone, không cần nhiều file.
 */
export default function LatticeIcon({ tone = 'dark', className = '' }: Props) {
  const color = tone === 'light' ? 'bg-brand-gold' : 'bg-brand-red';
  const mask = `url(${latticeUrl}) center / contain no-repeat`;
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-12 w-12 shrink-0 ${color} ${className}`}
      style={{ WebkitMask: mask, mask }}
    />
  );
}
