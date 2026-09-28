import CarouselArrow from '@/components/CarouselArrow';
import { useCallback, useEffect, useRef, useState } from 'react';
import LatticeIcon from '@/components/LatticeIcon';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

type ImageItem = {
  id: number;
  title: string;
  desc: string;
  url: string;
  featured: boolean;
};

const imageItems: ImageItem[] = [
  { id: 1, title: 'Giao Lưu Văn Hóa', desc: 'Sự kiện giao lưu văn hóa Trung - Việt đầy màu sắc', url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005192/hoat-dong_9.jpg', featured: true },
  { id: 2, title: 'Lễ Vinh Danh Học Viên', desc: 'Tôn vinh những thành tích xuất sắc trong kỳ thi HSK', url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005190/hoat-dong_8.jpg', featured: false },
  { id: 3, title: 'Sự Kiện Khai Giảng', desc: 'Không khí rộn ràng ngày đầu tiên của khóa học mới', url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005189/hoat-dong_7.jpg', featured: false },
  { id: 4, title: 'Hoạt Động Nhóm', desc: 'Học viên cùng nhau thực hành tiếng Trung qua trò chơi', url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005187/hoat-dong_6.jpg', featured: false },
  { id: 5, title: 'Workshop Tiếng Trung', desc: 'Buổi thực hành chuyên sâu cùng giảng viên mời', url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005186/hoat-dong_5.jpg', featured: true },
  { id: 6, title: 'Ngày Hội Thử Thách', desc: 'Cuộc thi tiếng Trung đầy sôi động và cảm hứng', url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005185/hoat-dong_4.jpg', featured: false },
  { id: 7, title: 'Trải Nghiệm Thực Tế', desc: 'Học tiếng qua hoạt động ngoại khóa thực tế', url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005180/hoat-dong_3.jpg', featured: false },
  { id: 8, title: 'Liên Hoan Nghệ Thuật', desc: 'Biểu diễn văn nghệ tiếng Trung của học viên', url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005178/hoat-dong_2.jpg', featured: false },
  { id: 9, title: 'Câu Lạc Bộ Tiếng Trung', desc: 'Giao lưu, kết nối và học hỏi cùng cộng đồng', url: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005176/hoat-dong_10.jpg', featured: false },
];

function ImageModal({ item, onClose }: { item: ImageItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.url} alt={item.title} className="h-auto max-h-[88vh] w-full rounded-lg object-contain shadow-2xl" />
        <div className="mt-4 text-center">
          <h3 className="font-display text-xl text-brand-ivory">{item.title}</h3>
          <p className="mt-1 font-sans text-sm text-white/70">{item.desc}</p>
        </div>
      </motion.div>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full p-3 text-brand-gold transition-colors hover:bg-white/15 sm:right-7 sm:top-7"
        aria-label="Đóng"
      >
        <X className="h-7 w-7" />
      </button>
    </motion.div>
  );
}

export default function ExtracurricularSection() {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  }, []);

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.classList.add('cursor-grabbing');
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const delta = e.clientX - startX.current;
    el.scrollLeft = startScrollLeft.current - delta;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    const el = scrollRef.current;
    if (!el) return;
    el.releasePointerCapture(e.pointerId);
    el.classList.remove('cursor-grabbing');
  };

  return (
    <section
      id="hoat-dong-ngoai-khoa"
      className="relative overflow-hidden bg-brand-cream px-6 py-24 sm:py-32"
      style={{ scrollMarginTop: '88px' }}
    >
      {/* Faint watermark */}
      <div
        className="pointer-events-none absolute -left-16 top-12 select-none font-display text-[18rem] leading-none text-brand-red/[0.035]"
        aria-hidden="true"
      >
        活
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#BA7517]/60 sm:w-20" />
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#BA7517]">
              Trải Nghiệm Thực Tế
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#BA7517]/60 sm:w-20" />
          </div>
          <h2 className="font-display text-3xl leading-tight text-brand-red sm:text-4xl lg:text-5xl">
            Hoạt Động Ngoại Khóa Tại ThanhMaiHSK
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans leading-relaxed text-gray-600">
            Không chỉ học trên lớp, học viên ThanhMaiHSK còn được trải nghiệm nhiều
            hoạt động ngoại khóa sôi động, gắn kết và đầy cảm hứng.
          </p>
        </div>

        {/* Gold divider */}
        <div className="mt-10 mb-12 flex items-center justify-center gap-4" aria-hidden="true">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#BA7517]/50 sm:w-24" />
          <LatticeIcon tone="dark" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#BA7517]/50 sm:w-24" />
        </div>

        {/* Gallery with arrow navigation */}
        <div className="relative">
          {/* Prev arrow */}
          <CarouselArrow
            direction="prev"
            onClick={() => scrollByAmount('left')}
            disabled={!canScrollLeft}
            label="Trước"
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 sm:left-2"
          />

          {/* Scrollable gallery */}
          <div
            ref={scrollRef}
            className="relative w-full cursor-grab overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <div className="flex w-max gap-4 px-1">
              {imageItems.map((item) => (
                <div
                  key={item.id}
                  className={`group relative flex h-[16rem] shrink-0 cursor-pointer items-end overflow-hidden rounded-xl border-2 border-brand-gold/60 shadow-md transition-all duration-300 hover:border-brand-gold hover:shadow-xl sm:h-[20rem] ${
                    item.featured
                      ? 'w-[75vw] snap-center sm:w-[32rem]'
                      : 'w-[75vw] snap-center sm:w-[18rem]'
                  }`}
                  onClick={() => setSelectedItem(item)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Xem ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedItem(item);
                    }
                  }}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 font-sans text-sm text-white/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <CarouselArrow
            direction="next"
            onClick={() => scrollByAmount('right')}
            disabled={!canScrollRight}
            label="Sau"
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 sm:right-2"
          />
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
