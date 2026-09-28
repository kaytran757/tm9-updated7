/**
 * Đường sóng đỏ nằm ở đáy section phía trên, nối liền với nền đỏ của section phía dưới.
 * Có 2 lớp đỏ (sáng hơn ở sau, đậm ở trước) và 2 đường viền vàng mảnh chạy theo mép sóng.
 */
export default function WaveDivider() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 -bottom-px z-10 block h-[72px] w-full sm:h-[96px]"
      viewBox="0 0 1440 96"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* lớp sau: đỏ sáng hơn */}
      <path
        d="M0 38 C200 8 400 14 600 40 S960 72 1140 36 S1340 10 1440 28 L1440 96 L0 96 Z"
        className="fill-brand-red-light"
      />
      <path
        d="M0 38 C200 8 400 14 600 40 S960 72 1140 36 S1340 10 1440 28"
        className="fill-none stroke-brand-gold"
        strokeOpacity="0.35"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      {/* lớp trước: trùng màu nền section Lộ Trình để không lộ đường nối */}
      <path
        d="M0 54 C180 20 360 20 540 48 S900 84 1080 50 S1300 22 1440 44 L1440 96 L0 96 Z"
        className="fill-brand-red"
      />
      <path
        d="M0 54 C180 20 360 20 540 48 S900 84 1080 50 S1300 22 1440 44"
        className="fill-none stroke-brand-gold"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
