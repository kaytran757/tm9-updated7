import CarouselArrow from '@/components/CarouselArrow';
import QuatrefoilDot from '@/components/QuatrefoilDot';
import { useCallback, useEffect, useRef, useState } from 'react';
import LatticeIcon from '@/components/LatticeIcon';

const teachers = [
  {
    name: 'Ths. Lê Quang Thành',
    image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789004660/giang-vien_3.jpg',
  alt: 'Ths. Lê Quang Thành',
  },
  {
    name: 'TS. Phạm Huỳnh Sơn',
    image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789004661/giang-vien_7.jpg',
    alt: 'TS. Phạm Huỳnh Sơn',
  },
  {
    name: 'Ths. Thái Thị Hà Linh',
    image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789004661/giang-vien_5.jpg',
    alt: 'Ths. Thái Thị Hà Linh',
  },
  {
    name: 'Ths. Trần Mai Hương',
    image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789004660/giang-vien_4.jpg',
    alt: 'Ths. Trần Mai Hương',
  },
  {
    name: 'Ths. Nguyễn Thị Thanh Lài',
    image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789004657/giang-vien_1.jpg',
    alt: 'Ths. Nguyễn Thị Thanh Lài',
  },
];

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4" aria-hidden="true">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#BA7517]/50 sm:w-24" />
      <LatticeIcon tone="dark" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#BA7517]/50 sm:w-24" />
    </div>
  );
}

export default function IntroTeachersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % teachers.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
  }, []);

  const pauseAutoAdvance = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 4000);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext, paused]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      pauseAutoAdvance();
      if (delta > 0) handlePrev();
      else handleNext();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="giang-vien"
      className="relative overflow-hidden bg-brand-cream px-6 py-24 sm:py-32"
      style={{ scrollMarginTop: '88px' }}
    >
      {/* Faint watermark */}
      <div
        className="pointer-events-none absolute -right-16 top-12 select-none font-display text-[18rem] leading-none text-brand-red/[0.035]"
        aria-hidden="true"
      >
        师
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#BA7517]/60 sm:w-20" />
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#BA7517]">
              Đội Ngũ Giảng Viên
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#BA7517]/60 sm:w-20" />
          </div>
          <h2 className="font-display text-3xl leading-tight text-brand-red sm:text-4xl lg:text-5xl">
            Gặp Gỡ Những Người Thầy Đồng Hành Cùng Bạn
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans leading-relaxed text-gray-600">
            5 giảng viên tiêu biểu với chuyên môn vững vàng và nhiều năm kinh nghiệm
            giảng dạy tiếng Trung tại ThanhMaiHSK.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-12 mb-16">
          <GoldDivider />
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => pauseAutoAdvance()}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Soft radial glow behind active card */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/15 blur-3xl"
            aria-hidden="true"
          />

          {/* 3D coverflow container */}
          <div className="relative flex h-[520px] items-center justify-center overflow-hidden [perspective:1200px] md:h-[620px]">
            {teachers.map((teacher, index) => {
              const total = teachers.length;
              let pos = index - currentIndex;
              // Normalize to shortest path
              if (pos > total / 2) pos -= total;
              if (pos < -total / 2) pos += total;

              const isCenter = pos === 0;
              const isAdjacent = Math.abs(pos) === 1;
              const isVisible = Math.abs(pos) <= 1;

              return (
                <div
                  key={teacher.name}
                  className="absolute flex items-center justify-center transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${pos * 38}%) scale(${isCenter ? 1 : isAdjacent ? 0.78 : 0.6}) rotateY(${pos * -8}deg)`,
                    zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                    opacity: isCenter ? 1 : isAdjacent ? 0.45 : 0,
                    filter: isCenter ? 'blur(0px)' : 'blur(3px)',
                    visibility: isVisible ? 'visible' : 'hidden',
                  }}
                >
                  <div className="relative w-[85vw] h-[500px] md:w-96 md:h-[600px] rounded-2xl border-2 border-brand-gold/70 bg-white p-2 shadow-2xl shadow-black/20 overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={teacher.alt}
                      className="h-full w-full rounded-xl object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev button */}
          <CarouselArrow
            direction="prev"
            onClick={() => {
              pauseAutoAdvance();
              handlePrev();
            }}
            label="Giảng viên trước"
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 sm:left-4"
          />

          {/* Next button */}
          <CarouselArrow
            direction="next"
            onClick={() => {
              pauseAutoAdvance();
              handleNext();
            }}
            label="Giảng viên tiếp theo"
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 sm:right-4"
          />
        </div>

        {/* Dot pagination */}
        <div className="mt-7 flex justify-center gap-1" role="tablist" aria-label="Chọn giảng viên">
          {teachers.map((teacher, index) => (
            <QuatrefoilDot
              key={teacher.name}
              active={currentIndex === index}
              onClick={() => {
                pauseAutoAdvance();
                setCurrentIndex(index);
              }}
              label={`Đến giảng viên ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
