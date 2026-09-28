import { useRef, useState, useEffect } from 'react';
import LatticeIcon from '@/components/LatticeIcon';
import { useScrollReveal, revealClass, revealTransition } from '@/hooks/useScrollReveal';
import RoundelDivider from '@/components/RoundelDivider';
import WaveDivider from '@/components/WaveDivider';
import ChineseFrame from '@/components/ChineseFrame';

/* ─── Brush-style checkmark icon ─── */
function BrushCheck() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 flex-shrink-0 mt-0.5">
      <path
        d="M6 17 L13 24 L27 8"
        stroke="#8B1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: 'url(#brushRough)' }}
      />
      <defs>
        <filter id="brushRough">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="1" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.5" />
        </filter>
      </defs>
    </svg>
  );
}

/* ─── Decorative divider with seal icon ─── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#BA7517]/50" />
      <LatticeIcon tone="dark" />
      <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#BA7517]/50" />
    </div>
  );
}

/* ─── Count-up hook (Intersection Observer, fires once) ─── */
function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start || done) return;
    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(target);
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, done, target, duration]);

  return { value, done };
}

/* ─── Stat card ─── */
function StatCard({
  target,
  suffix,
  label,
  start,
  duration,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  start: boolean;
  duration: number;
  delay: number;
}) {
  const { value, done } = useCountUp(target, duration, start);

  return (
    <ChineseFrame
      tone="red"
      className={`group px-6 py-11 text-center shadow-xl shadow-[#BA7517]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#BA7517]/30 ${revealTransition} ${revealClass(start)}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-sans text-5xl sm:text-6xl font-extrabold text-brand-gold leading-none tracking-tight">
        {value}
        <span
          className={`inline-block transition-all duration-500 ${
            done ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          {suffix}
        </span>
      </div>

      {/* đường kẻ vàng + hình thoi */}
      <div className="mx-auto mt-5 flex items-center justify-center gap-2" aria-hidden="true">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-gold/80" />
        <span className="h-1.5 w-1.5 rotate-45 bg-brand-gold" />
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-gold/80" />
      </div>

      <p className="font-sans text-sm sm:text-base text-brand-ivory/85 mt-4 leading-snug">
        {label}
      </p>
    </ChineseFrame>
  );
}

/* ─── Góc trang trí kiểu 回 ─── */
function CornerPlate({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-20 flex h-9 w-9 items-center justify-center border border-brand-gold/80 bg-brand-red ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21V3H21V19H7V7H17V13" />
      </svg>
    </span>
  );
}

const REVEAL_EASE = 'cubic-bezier(.22,.61,.36,1)';

/* ─── Ảnh giới thiệu: khi cuộn tới, ảnh "cuộn ra" từ trái sang phải như tranh cuộn ─── */
function IntroPhoto() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [done, setDone] = useState(false);

  // sau khi cuộn xong thì bỏ clip-path để các chi tiết tràn viền hiện đủ
  useEffect(() => {
    if (!visible) return;
    const t = window.setTimeout(() => setDone(true), 1700);
    return () => window.clearTimeout(t);
  }, [visible]);

  const clipPath = done
    ? 'none'
    : visible
      ? 'inset(-100px 0px -100px -100px)'
      : 'inset(-100px 100% -100px -100px)';

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
      <div
        className="relative [transition:clip-path_1.5s_cubic-bezier(.22,.61,.36,1)] motion-reduce:transition-none"
        style={{ clipPath }}
      >
        {/* cửa sổ hoa văn lớn, rất mờ, nằm phía sau */}
        <LatticeIcon
          tone="dark"
          className="pointer-events-none absolute -left-16 -top-20 !h-[380px] !w-[380px] opacity-[0.07]"
        />
        {/* khung lệch màu vàng đồng */}
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-brand-gold-deep/60"
        />

        {/* khung đỏ + viền vàng mảnh */}
        <div className="relative bg-brand-red p-2.5 shadow-2xl shadow-black/20">
          <div className="relative overflow-hidden border border-brand-gold/70">
            <img
              src="https://res.cloudinary.com/qugyphlv/image/upload/v1789005153/hoat-dong_1.jpg"
              alt="Hoạt động tại ThanhMaiHSK"
              className={`aspect-[11/12] w-full object-cover transition-transform duration-[1800ms] ease-out motion-reduce:transition-none ${
                visible ? 'scale-100' : 'scale-110'
              }`}
            />
          </div>
        </div>

        {/* hoa văn góc */}
        <CornerPlate className="-left-2.5 -top-2.5" />
        <CornerPlate className="-bottom-2.5 -right-2.5" />

        {/* bảng chữ dọc: 学以致用 = học để áp dụng */}
        <div
          aria-hidden="true"
          className="absolute right-6 top-10 z-20 hidden border border-brand-gold bg-brand-red px-2 py-4 shadow-lg outline outline-1 -outline-offset-[3px] outline-brand-gold/50 sm:block"
        >
          <span
            className="block text-xl tracking-[0.35em] text-brand-gold"
            style={{
              writingMode: 'vertical-rl',
              fontFamily: '"Noto Serif SC","Songti SC","SimSun","Microsoft YaHei",serif',
            }}
          >
            学以致用
          </span>
        </div>

        {/* ấn triện */}
        <img
          src="https://res.cloudinary.com/qugyphlv/image/upload/v1789009070/dau-an-removebg-preview.png"
          alt="Ấn triện ThanhMaiHSK"
          className="absolute -bottom-4 -left-4 z-20 h-[80px] w-[80px] rotate-[-12deg] object-contain drop-shadow-lg"
        />
      </div>

      {/* trục cuộn chạy theo mép ảnh, mờ dần khi cuộn xong */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-3 z-30 w-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4a0d0d] via-brand-gold to-[#4a0d0d] shadow-md [transition:left_1.5s_cubic-bezier(.22,.61,.36,1),opacity_.4s_ease_1.3s] motion-reduce:transition-none"
        style={{ left: visible ? '100%' : '0%', opacity: visible ? 0 : 1 }}
      />
    </div>
  );
}

/* ─── Feature list item ─── */
const features = [
  'Lộ trình rõ ràng',
  'Giảng viên chất lượng',
  'Giáo trình độc quyền',
  'Luyện thi HSK hiệu quả',
];

export default function AboutSection() {
  const { ref: textRef, visible: textVisible } = useScrollReveal<HTMLDivElement>();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gioi-thieu" className="relative overflow-hidden bg-brand-cream px-6 pb-[240px] pt-20 sm:pt-28 md:pb-[200px]">
      {/* ─── BLOCK 1: INTRODUCTION ─── */}
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 pt-[30px] lg:grid-cols-2 lg:gap-16">
          {/* Left: text content */}
          <div
            ref={textRef}
            className={`${revealTransition} ${revealClass(textVisible)}`}
          >
            <p className="mb-4 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-[#BA7517]">
              <span className="h-px w-8 bg-[#BA7517]/60" aria-hidden="true" />
              Trung tâm tiếng Trung
            </p>
            <h2 className="mb-6 font-display text-3xl leading-tight text-brand-red sm:text-4xl lg:text-5xl">
              Giới Thiệu Về ThanhMaiHSK
            </h2>
            <p className="mb-8 max-w-xl font-sans text-base leading-relaxed text-gray-600 sm:text-lg">
              Hệ sinh thái đào tạo tiếng Trung toàn diện với 15 năm phát triển,
              hơn 100.000 học viên và 20+ cơ sở. Học để dùng được — trong học
              tập, công việc và môi trường quốc tế.
            </p>

            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BrushCheck />
                  <span className="font-sans text-base font-semibold text-gray-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: photo "cuộn ra" từ trái sang phải */}
          <IntroPhoto />
        </div>
      </div>

      {/* ─── BLOCK 2: DIFFERENTIATORS & STATS ─── */}
      <div ref={statsRef} className="relative z-20 mx-auto mt-24 max-w-4xl sm:mt-32">
        <GoldDivider />

        <div className="text-center">
          <p className="font-sans text-xs tracking-[0.3em] text-[#BA7517] uppercase mb-4">
            Khác biệt trong đào tạo tiếng Trung
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-red leading-tight mb-5">
            <span className="font-sans font-extrabold tracking-tight">10</span>{' '}
            Lý Do Nên Chọn Tiếng Trung ThanhMaiHSK
          </h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto leading-relaxed mb-14">
            ThanhMaiHSK xây dựng hệ sinh thái học tiếng Trung toàn diện, kết hợp
            giảng viên chất lượng, giáo trình chuẩn và nền tảng học tập hiện đại.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          <StatCard
            target={15}
            suffix="+"
            label="năm phát triển"
            start={statsVisible}
            duration={1800}
            delay={0}
          />
          <StatCard
            target={100}
            suffix="K+"
            label="học viên đồng hành"
            start={statsVisible}
            duration={2000}
            delay={100}
          />
          <StatCard
            target={20}
            suffix="+"
            label="cơ sở toàn quốc"
            start={statsVisible}
            duration={1800}
            delay={200}
          />
        </div>
      </div>
      <RoundelDivider />
      <WaveDivider />
    </section>
  );
}
