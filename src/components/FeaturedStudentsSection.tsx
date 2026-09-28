import CarouselArrow from '@/components/CarouselArrow';
import QuatrefoilDot from '@/components/QuatrefoilDot';
import { useEffect, useState, useCallback } from 'react';
import { X } from 'lucide-react';
import cloudCorner from '@/assets/images/hoavan/cloud-corner.svg';
import cloudTile from '@/assets/images/hoavan/cloud-tile.svg';
import { useScrollReveal, revealClass, revealTransition } from '@/hooks/useScrollReveal';

const achievements = [
  'https://res.cloudinary.com/qugyphlv/image/upload/v1789259687/vinh-danh-hoc-vien1_a-4.webp',
  'https://res.cloudinary.com/qugyphlv/image/upload/v1789259686/vinh-danh-hoc-vien1_a-12.webp',
  'https://res.cloudinary.com/qugyphlv/image/upload/v1789259686/vinh-danh-hoc-vien1_a-15.webp',
  'https://res.cloudinary.com/qugyphlv/image/upload/v1789259688/vinh-danh-hoc-vien1_a-3.webp',
  'https://res.cloudinary.com/qugyphlv/image/upload/v1789259688/vinh-danh-hoc-vien1_a-9.webp',
  'https://res.cloudinary.com/qugyphlv/image/upload/v1789259690/vinh-danh-hoc-vien1_a-10.webp',
];

export default function FeaturedStudentsSection({
  sectionId = 'hoc-vien-tieu-bieu',
  enableFadeIn = true,
  joinAbove = false,
}: {
  sectionId?: string;
  enableFadeIn?: boolean;
  /** true = section nối liền với đường sóng đỏ phía trên (trang chủ): nền đỏ đồng nhất ở mép trên, chừa chỗ cho thẻ trang trí */
  joinAbove?: boolean;
}) {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal<HTMLDivElement>({ enabled: enableFadeIn });
  const { ref: gridRef, visible: gridVisible } = useScrollReveal<HTMLDivElement>({ enabled: enableFadeIn });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + achievements.length) % achievements.length));
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % achievements.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section id={sectionId} className={`relative overflow-hidden px-6 ${
        joinAbove
          ? 'bg-gradient-to-b from-brand-red to-[#6E1717] pb-20 pt-28 sm:pb-28 sm:pt-36'
          : 'bg-gradient-to-br from-brand-red to-[#6E1717] py-20 sm:py-28'
      }`} style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -left-16 top-10 font-display text-[18rem] leading-none text-white/[0.035]" aria-hidden="true">榮</div>

      {/* ── Nền hoa văn mây (祥云) ── */}
      {/* ánh sáng ấm nhẹ phía trên bên phải */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 50% at 78% 50%, rgba(232,120,70,0.16), transparent 100%)' }}
        aria-hidden="true"
      />
      {/* mây nhỏ lặp lại phủ toàn nền */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url(${cloudTile})`, backgroundRepeat: 'repeat', backgroundSize: '260px 260px' }}
        aria-hidden="true"
      />
      {/* cụm mây lớn ở 2 góc chéo: trên-trái và dưới-phải */}
      <img
        src={cloudCorner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-[58vw] max-w-[460px] select-none opacity-60 sm:w-[34vw]"
      />
      <img
        src={cloudCorner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[58vw] max-w-[460px] rotate-180 select-none opacity-60 sm:w-[34vw]"
      />


      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={`mx-auto max-w-3xl text-center ${enableFadeIn ? `${revealTransition} ${revealClass(headerVisible)}` : ''}`}
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/70 sm:w-20" />
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-brand-gold">Thành tích học viên</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/70 sm:w-20" />
          </div>
          <h2 className="font-display text-3xl leading-tight text-brand-ivory sm:text-4xl lg:text-5xl">
            Học Viên Tiêu Biểu Tại ThanhMaiHSK
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans leading-relaxed text-white/75">
            Những thành tích ấn tượng trong kỳ thi HSK/HSKK là minh chứng rõ nét nhất cho chất lượng đào tạo tại ThanhMaiHSK.
          </p>
        </div>

        {/* Framed grid container */}
        <div ref={gridRef} className="relative mt-14 rounded-2xl border border-brand-gold/25 p-4 sm:p-6 lg:p-8">
          {/* Corner ornaments */}
          <span className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-brand-gold/60" aria-hidden="true" />
          <span className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-brand-gold/60" aria-hidden="true" />
          <span className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-brand-gold/60" aria-hidden="true" />
          <span className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-brand-gold/60" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {achievements.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className={`group relative block overflow-hidden rounded-xl border border-brand-gold/60 bg-brand-cream p-2 shadow-md transition-all duration-300 hover:scale-[1.03] hover:border-brand-gold hover:shadow-xl ${enableFadeIn ? `${revealTransition} ${revealClass(gridVisible)}` : ''}`}
                style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
                aria-label={`Xem thành tích học viên ${index + 1}`}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={`Thành tích học viên ${index + 1}`}
                    className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Thành tích học viên phóng to"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute right-4 top-4 rounded-full p-3 text-white transition-colors hover:bg-white/15 hover:text-brand-gold sm:right-7 sm:top-7"
            aria-label="Đóng"
          >
            <X className="h-7 w-7" />
          </button>

          <CarouselArrow
            tone="dark"
            direction="prev"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            label="Trước"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 sm:left-5"
          />

          <img
            src={achievements[lightboxIndex]}
            alt={`Thành tích học viên ${lightboxIndex + 1}`}
            className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <CarouselArrow
            tone="dark"
            direction="next"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            label="Sau"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 sm:right-5"
          />

          {/* Pagination dots */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {achievements.map((_, index) => (
              <QuatrefoilDot
                key={index}
                tone="dark"
                active={index === lightboxIndex}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                label={`Đến ảnh ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
