import patternRingsGold from '@/assets/images/hoavan/pattern-rings-soft.svg';

/**
 * Nền hoa văn vòng tròn vàng ở đáy section.
 * Luôn dùng đúng kích thước gốc của file SVG (516×400) — không co giãn, vì SVG này
 * không có viewBox nên co giãn sẽ làm các vòng tròn bị cắt/dẹt.
 *
 * Mask làm hoa văn nhạt dần lên phía trên và đậm dần xuống phía dưới
 * (đậm nhất ~55%). Chỉnh 3 mức alpha trong FADE_MASK để đổi độ đậm.
 */
const FADE_MASK =
  'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 35%, rgba(0,0,0,0.55) 100%)';

export default function RoundelDivider() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[400px] overflow-hidden"
      style={{
        backgroundImage: `url(${patternRingsGold})`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '516px 400px',
        backgroundPosition: 'center bottom',
        WebkitMaskImage: FADE_MASK,
        maskImage: FADE_MASK,
      }}
      aria-hidden="true"
    />
  );
}
